
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const savedTheme = window.localStorage.getItem("vjetrenjaca-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialDark = savedTheme ? savedTheme === "dark" : prefersDark;

document.documentElement.classList.toggle("dark", initialDark);

createRoot(document.getElementById("root")!).render(<App />);
  
