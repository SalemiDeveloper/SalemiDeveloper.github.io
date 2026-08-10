import { MoonIcon } from "../../icons/moon-icon.js";
import { SunIcon } from "../../icons/sun-icon.js";

export function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");
    document.documentElement.dataset.theme = savedTheme || "dark";
}

export function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
    updateThemeButton();
}

export function initializeThemeToggle() {
    const button = document.getElementById("theme-toggle");

    if (!button) {
        return;
    }

    button.addEventListener("click", toggleTheme);
    updateThemeButton();
}

function updateThemeButton() {
    const button = document.getElementById("theme-toggle");

    if (!button) {
        return;
    }

    button.innerHTML =
    document.documentElement.dataset.theme === "dark" ? SunIcon() : MoonIcon();
}