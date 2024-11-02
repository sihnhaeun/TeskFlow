import Page from "./_components/Page/page";

export default function HomePage() {
  return (
    <Page>
      <div className="flex gap-x-7">
        <main>
          <article className="flex flex-col gap-y-7">
            <section className="bg-gray-200 w-[910px] h-[320px] rounded-lg px-5 py-4">
              투두리스트 ( To-Do List)
              {/* 배경색은 임시로 넣음. 원래는 투명 */}
              <div className="bg-white w-[250px] h-[250px]">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExMWFhUVFRUXFxgXFxUXHRUYGBgYFxoXGhcYHSggGBolHRcXITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OFRAPFy0dFR0rLS0rKystKysrKy0rKystLS0tLS0tKy0rLS0tLS0rKzg3Ky0tKys3KysrKzcrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAABAwIDBAkDAgUCBgMAAAABAAIRAyEEEjEFQVFhBgcTInGBkaHwscHRMuEUI0JS8WKSFjNDU3KCFRck/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EACARAQADAAICAwEBAAAAAAAAAAABAhESUQMTITFBFDL/2gAMAwEAAhEDEQA/APJilBTUpXQLCWEidxtr428JM+soAG2+L+E2/ZCXkhRSgxaPngn0z7/PwmuZrvA36angj9vluSink8/3TXtRl3pWgi+nPwQMfrw+c00BON9d95RA1trp8vCKbCXL4evyU5rUrRx5eSKYlAV3B7NqVP0ttxIge+q2ML0XJgud6fkoOaASxzXb0OirBq2fOVdGwKYFqbfQe5U0edpwN16D/wDB0/8Att9AoqnR6kf+mPIR9E0xwbjPDfoEmVdjX6JtI7pc33+oWLjNg1Wad4DhY+iDHhClewixEJmVVcMIQ5PIRG9DEZQIjThe9vn2Un51+fLpuVQN0PqPsmwpG2M/W/qjKopsIAUhYI1veRHpBm+/h5o1JJ3oGgKRo5IaE8BFJlQnZUIKTHR5gi/PekKVzYm48t6AurgG6p+X5xTYTuUzdArQnQgD56QnR56JigD581QGm9t0f49E4H20T2t9Y8FMUwM0BtblvQRH+VPTZJFuHmdPNSfw+YWtwJ3xu9wmNYpNYd9uMXTXNEmNFaqUSAN8zcTugfdaeyNidp3nggbm6T48lkxn7O2c+qYaLbzeB+V1uyujrGxmBc7cT9huW1gcC1gtYDd9h6K82NJnwCiqdLBgHnzVoNaNw+qsHDH28E+ls8+XH9uKhiJjwNfz/hOyhymp4ZhsLkaqw7AGxGm9QZ72Dgoy4AWC0XYbdvTjhAbAH6oMptS9wUtXCgjT54K+/CRaL/N5UhbxG5DHK7Q2Mx+rR88dFy+0ejj2SadxwP2XptSiDYj2VCvgjcTfh+FdV5K5haYIghNhd5tvYbagnR24gexC46vhXMcWuF93DxV1VSEKXKkyqCMjSyGWIMAxuOh8VJlQWIYiypzLKQNS5eCLhjG+Xr9k9o/dKGp7G3UXDYQpQ1CGMkJYTmxw9Eon7L0PKaE4N+XRCUBMUsRx+ic1qGpWhFK0fPROASgJ7WosFaJt8lTsgfumNHyVe2Xhe0dO5uvPko6Qv7J2XmGdwsZgHfzW/hqOSTEn6JmEB4aaBa+Ge2YiZIXOVR4Fjnm8xzla7aTWCTA4T+OCkpsEiBrdZuOqd9xvqfRZTFypiWtGtyoqVY5pk3+aLO1hWsOdyYq6KhF906R9bLQwdbNIMct3wrO110V7Dac1CV/sQb70pYNPPd9vymU3R+rcdD4qHa+KcCGh26ZB9ETEOOpkXhQZ5jwsmNxbhqZUNSr3g5RcSUqneIOnH/KlfQkTu3Kw2kx0OaZ4q0KAGiowq+GDgZ1XM7Y2Q2oCNCNDGi7uvSF1k4ukLyL/AF80Hkdag5ji1wuPdMDF2vSHZIeMzR3hcc+S5DKq3EIsqUz7zwUxbwHDn9kZFGsQZU5zDYcreBv91MWJQxDEQECI1g6CfXUa/RKGKbKnsEXCmriDKhWS1IppjnwE6EsJy9vF8/SAJQE6OCdCcV00BPhK1qe1qcWitZrv4aD24RPsnlt/x8ugNUgHy30Ti1BA2dNV1Oz6AYzKBfeee9ZGyKEvLtzR7ldDh22k6zosTDpC3QZ84rSwzcrgTu/CqUGTf4FfbTXOYVdfW7vEneJt4KoaZ1O9TU2TEKV4Gh8lnFUxhRxjmnNaY8LK6xsajVSUsO0gEneR4JLWKRaTC0sE0gySL34Ie2nnEaLQ7AOFh6fLKMzArUzEjWyyMW0uMG3BbeGwbtSTA4LL2q2DbhrxUIhn5ElRllK1phOqsnkjWIMC4sfrY+66H+Iblvb5/hc+W8N3stDtwWwDprz0QmqxXZMRoZWVtNha2OJ18PnurmDxZzZZEDcreMotewiLozmOKqVYN9FzG3cDkqZgLOv5rrMVRVfa2Bz0RGoEj8KOsQ4oMShqm7NPFNTW+KANSlisCmnCmpMnFWDE9rVYdSixEeKe6jBgx5EH3Czq8VbIhWezQppxcoAlIUjWIAX1cfG5G5dLp4H03JQ1Pa1XGok0NTw1PY1SZeSY3EmBqe1qe1ilYzcpjpDa2Lh4a0xrf8ey2AwfhLQpimBa8CBy4nl88ZIv81XKW4WsFSkgcwterQyugyItBWdg3lumvFXmVM1iZWJhszwVilhiRPD3TcsfIV3D0iRACzLSNjdBF/m9O7PcORVz+EKmZhePBYlrVVmFLhBnjNhor2HwPdBm4i8bgVK1gCc6v6Dgob0H1i1seqy67Z0M/eVPU78RdQ1GFm6VCKoqmGDYDmwdw3+SdiMKwXBJG+dfJW6VN1Rw+uqfj8NIvIj38kX9c+GDcLqOpTi4V9tDSEVKJKjpjKGYEEahamExTtSABMSOCgNFS0m7joApqTAxuDY/vfTesrHUogRbd6LRdWLXQNCYg/k6KHE1A4W+fJUmUiJcHtDDZKjhFpn1VUU10G3aHfB4gj0P7rNFPksTL0RX4QMwzi0ugwCBPM7p8ijs+StNop4pLPJeKtTpwRaYOnFKKStikpBRUmyxVUfQc0wRBCFc7FCnJeLg8qXKpg1KGL7/ABfl4sja3d57/tvOic1qkDE9rFeLcWRhqlazcE9rFIxicXStjGsV/AUAHMLhMuGVvG+p/wBP1Pmq7WK9gyTVaTcyL+EQFmau8S6Ou2TOukpAzer4oSAVFTpHSFwdalo7loUhf5oq1OmVcwbL3WJh0XHUiR4K5gHSeG7gFNSpty+AUNJl9bfP3XORqUqQkQrOJpARdU6YMapHkrCfqptTatDDtDq9anTadC94bJ4CTc8goMJjKVdualUbUYbBzHBwMaiQvnbp9tOtiMZUNZzczD2eVhcWMygAtbmv+qZO8yper7aGNo4mcHS7Z+U5qVyHNloJIBFwct1lI8mS+nMFQAiABKtPoB4NtN6zNmVavZsdVaGVC0F7QZDXEXaDvgrXwxJ1UatM/aPD4SBoosVTOhHJaQKjqsnVGYtOuarUi2yi7AnQ/ZdE7CA6qlicMBoVmYdq3iWdSwMgnnAUFfDlgK2mN7sKLFUbaSstRb5c3VpFMZShaVSknU8ON6xrrsY5Xb1GzTz+37LI7FdVtqj3fMfdYvYrla3y7+P/ACpCgntpW18vurwpkCECksTZvFUUlI2irjKKe2kpNxSFBC0OwQs8h5nkShisCmnBpX63H4qLK+RPFM8PZWAzklFNXHSLIBTUjaalaxSBiY61lG1qs4MQ9v8A5D6pGMUrGLEw9FbO3wbZA8lDXo5Tb4FLs6oIHOFPiqUmV45+3piVRglWGGLhMpi6kylSXWGjRq89RopGHcqTBZWqJ0XOWlitimUqbqj3BrGtLnONsoGpPkvHelnW/iKrizBgUaYMB7g1z3RvhwIYOVzzWh12bfcxtPBNt2jRVqH+5uYhrP8Ac0k+Dea8fXK0uV7fkLL6zq1TNVqHM90ve7M4y43c6JJ48V9H9XHQSjgA+tSrdv2zW5andy5Ne6Wkggm88gvmddH0a6b4/ABzcPXLWOnuODXtB/uDXSGnmNd8rLETj6uNAHgfsq+0drYfCtz161Ok0D+t7Wz4AmSeQXzaOtbbEEfxeu/sqFvA5LKHYnRbaW2a5rEOdnLe0xFSzY/TINs8BsQ3gBZGpvr6h2XWdUpMqOABe0PAG5ru80TJBIaQCRYkGFZeFBg6Ypsaxtmsa1jRrZogX32CsAqH0Q6QqVbDSZWgSkc1JWtsZQZA0Tg4HVOxOsKOi4X8FydvzVSrhp3qu5kStCqbfVQOp2lYl0iZYG12SB4/lZnYra2k2SB4lUxSXlvPy9lP8qXYpwoq4KSc2ksa2qCipRSVptJSNpIKnYoWgKSEZ15R2aUU1bFJKKS/Ya/EKzaad2asdmnBicnWFcU04MVgNS5E11qgDVI1qkDU5oUmXoo6DYFSWgb229LhbOGpnvTpMjzXL7HrZXxud9V1mHdZeTyRkvTWVSrQIKe0H5vWhUotc3mmGnpxhcpl2rKGi0qakYVigwAyElWkJgTpI5lYmW3lvXrs1rmUMXmAeD2BH9ze89pB/wBJz/7gvH17X120f/xUXTpiAI4TTf8AheKLlLjeMkoKJlIt3oh0ZrbQrilTENEGpUItTbxPFxvDd55SRGWGvpDqp6f0sbTbhnNZRr0mQ1jBlZUY200x/SQNW+YtpH0j6rsLi8NTp0YoVqLAym+JD2j+moBd0mTm1BJ10Xjm3eiW0dlVW1KjHMyOBZXpEuZmEQQ8fpM7nAHkjWTWX1dHFOLl4v0d68afY5cbQearQO9RDSKnMtcRkPmR4aLpMJ1y7KcBmdWZpZ1ImJEn9Bdpoouw9ElGZc10R6bYTaZrDDF/8ktDs7csh05XNubHKdYNtF0gUVDVYoDTG5W3FQuCxZ0rKBzFDVFlaIVLGOgFcrzkOtI2WRiBLio+zVkMS5F45l7o+EAppwpKwGJ7aayartpKRtNWBTUgpqszZX7JCuBiRVjk+c3dNASYYQLRzOl/WfJM/wCNnBv/ACwXcZPwrjUL7fuv2+H6PH07X/jjT+V4yeWgjmkwnTcye0YIgRGsz+FxaE91+19NOnanpnYw282H/sXa+BjyS1OnBAEUwTabmOfzxXEoV99+19VOncnpyLRT4zJ9AI+XS0em4/qZwm/qdPkLhUJ779r66u+f03p3ytIgW5mPa62KPWuxrRNAudae8AI3wY1j66rylClvLaftqIx7J/8AbtAQBQebXMgSZ0A4b9dyrjrfbnE0CWXm4m+kDQ6DhqV5GhY5S1r2Gt1vsh+Sk8GXZJjQhoBnc4EE7x3uSy8d1u13RlpNtGsxreOFo46leZJVNleUu16XdYD8dhxQNFrACHE5iTmB19CR5lcShCiTOnNib6Lvei/WL/BtFKnh2to94nKZe5x0c5x/U6w8rCwhcAhCJmPp62euN0vIpOE5ssEb2tAm9iC2ZH9xTcX1113MgUKZcRBzSWndBbPeEE+NrBeTIQm0ysY/ECpUc8MazMZysENHgNwULQN6ahEep9GOs+ls+mKGHw/8oCTnID3vknO4t36WvYQIha2G69nS7tMKIk5Q126LBxPAxccSvFkJi69erdeFckZcOwfpzd46gy6PEWV7FdddNzm5aLwIIJsblzSLTcQ2OPePn4mhZ4wvKXszOuwiZoZhm7t4MTv8t3uqzeucuac+H714yutJNiZvYT8NvIkKT46z9tV8tq/UvXKfW/cTQAFp7xN9Tu03e6uDrgoZB/JeHyJFiIved82svGEix/P4+m/6PJ29ob1wUWuM0XObaCIBNgCIPOTqnUuuejlJdhnh39LQ4Qb2l0Wty3LxVCfz+PpPfft7TW65aZ/TRLbH9RmTYbtOPlCV/XNSIZ/Je03zxBDZYR3eMOOa/wDavFUK+inSe6/b1zFdcLi4ljHBtouBuE2LTvSryJCvpp0z7LdhCELowEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQg//Z"
                  className="rounded-lg w-full object-cover"
                />
                <h4>title</h4>
                <p>contents</p>
              </div>
            </section>
            <section className="bg-gray-200 w-[910px] h-[320px] rounded-lg px-5 py-4">
              진행도 ( Progress Tracker )
            </section>
          </article>
        </main>
        <aside className="flex flex-col gap-y-7">
          <section className="bg-gray-200 w-[350px] h-[320px] rounded-lg px-5 py-4">
            알림 ( Reminder ) & 일정
          </section>
          <section className="bg-gray-200 w-[350px] h-[320px] rounded-lg px-5 py-4">
            메모 ( Memo )
          </section>
        </aside>
      </div>
    </Page>
  );
}
