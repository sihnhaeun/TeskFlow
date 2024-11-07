"use client";

import Page from "../../_components/Page/page";
import TodoForm from "../_components/TodoForm";

function AddPage() {
  return (
    <Page
      title="Add a New To-Do"
      subtitle="Please fill in all fields to create a To-Do item"
    >
      <TodoForm
        variantStyle="secondary"
        todo={null}
        todoId={null}
        label="Add To-Do"
      ></TodoForm>
    </Page>
  );
}

export default AddPage;
