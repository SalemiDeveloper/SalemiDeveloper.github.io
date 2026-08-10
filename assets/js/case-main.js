import { getCase } from "./services/cases.js";
import { CasePage } from "./components/case-page.js";
import { Layout } from "./components/layout.js";
import { Navbar } from "./components/navbar.js";
import { initializeScrollRevel } from "./utils/scroll-reveal.js";
import { initializeTheme, initializeThemeToggle } from "./services/theme.js";

async function render() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("project");
    const project = await getCase(slug);
    app.innerHTML = CasePage(project);
}

render();