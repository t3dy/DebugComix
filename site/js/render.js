document.addEventListener("DOMContentLoaded", async () => {
  const comicsContainer = document.getElementById("comics");
  const processContainer = document.getElementById("process");

  // Load and render comics lessons
  try {
    const lessonsRes = await fetch("data/lessons.json");
    const lessons = await lessonsRes.json();

    lessons.forEach((lesson) => {
      const div = document.createElement("div");
      div.className = "lesson";

      const explanationParagraphs = lesson.explanation
        .split("\n\n")
        .map((p) => `<p>${p}</p>`)
        .join("");

      div.innerHTML = `
        <img src="images/${lesson.image}" alt="${lesson.title}">
        <h2>${lesson.title}</h2>
        ${explanationParagraphs}
        <div class="project-lesson">
          <h3>What problem this prevents</h3>
          <p>${lesson.project_lesson}</p>
        </div>
      `;

      comicsContainer.appendChild(div);
    });
  } catch (err) {
    comicsContainer.innerHTML = `<p style="color:red;">Failed to load lessons: ${err.message}</p>`;
  }

  // Load and render process narrative
  try {
    const processRes = await fetch("data/process.json");
    const entries = await processRes.json();

    const intro = document.createElement("div");
    intro.className = "process-intro";
    intro.innerHTML = `
      <h2>Blow by Blow</h2>
      <p class="intro-text">This section narrates the prompt engineering foibles, critique building, and image design process behind this project. It documents what I learned about vibe coding with AI agents &mdash; and how following better engineering practices could have prevented the crashes, token waste, and instability I encountered while building a large AI-assisted dictionary site.</p>
    `;
    processContainer.appendChild(intro);

    entries.forEach((entry) => {
      const div = document.createElement("div");
      div.className = "lesson process-entry";
      div.id = entry.section;

      const narrativeParagraphs = entry.narrative
        .split("\n\n")
        .map((p) => `<p>${p}</p>`)
        .join("");

      div.innerHTML = `
        <h2>${entry.title}</h2>
        ${narrativeParagraphs}
        <div class="project-lesson">
          <h3>The takeaway</h3>
          <p>${entry.lesson}</p>
        </div>
      `;

      processContainer.appendChild(div);
    });
  } catch (err) {
    processContainer.innerHTML += `<p style="color:red;">Failed to load process: ${err.message}</p>`;
  }

  // Tab navigation
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.dataset.section;

      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      document.querySelectorAll(".content-section").forEach((s) => s.classList.remove("active"));
      document.getElementById(target).classList.add("active");

      window.scrollTo(0, 0);
    });
  });
});
