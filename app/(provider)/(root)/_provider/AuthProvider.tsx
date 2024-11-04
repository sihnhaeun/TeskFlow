"use client";

import { supabase } from "@/supabase/client";
import { useAuthStore } from "@/zustand/auth.store";
import { PropsWithChildren, useEffect } from "react";

function AuthProvider({ children }: PropsWithChildren) {
  const setCurrentUserId = useAuthStore((state) => state.setCurrentUserId);
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const logIn = useAuthStore((state) => state.logIn);
  const logOut = useAuthStore((state) => state.logOut);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setCurrentUserId(session.user.id);
        logIn();
      } else {
        logOut();
        setCurrentUserId(null);
      }

      initializeAuth();
    });
  }, []);

  return children;
}

export default AuthProvider;
