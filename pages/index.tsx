export default function Home() {
  const changeTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <main className="flex w-full h-full items-center justify-center">
      <div>
        <button className="btn" onClick={() => changeTheme()}>
          Change Theme
        </button>
      </div>
    </main>
  );
}
