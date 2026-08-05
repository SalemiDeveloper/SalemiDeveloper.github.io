import { getCase } from "./services/cases.js";
import { CasePage } from "./components/case-page.js";

async function render() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("project");
    const project = await getCase(slug);
    console.log(project);
    app.innerHTML = CasePage(project);
}

render();