document.addEventListener("DOMContentLoaded", function() {
    const projectsContainer = document.getElementById("projects-list");
    const projects = [
        { name: "E-Commerce Website", description: "A full-featured e-commerce platform with a user-friendly interface." },
        { name: "Portfolio Website", description: "A professional portfolio showcasing skills and projects." },
        { name: "Task Management App", description: "A web application for managing daily tasks efficiently." },
        { name: "Social Media Dashboard", description: "An analytics dashboard for tracking social media engagement." },
        { name: "Blog Platform", description: "A simple and elegant blog platform for content creators." },
        { name: "Weather App", description: "A real-time weather application with location-based forecasts." }
    ];

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project", "p-6", "border", "rounded-lg", "shadow-md", "transition-all", "hover:shadow-lg");
        projectElement.innerHTML = `<h3 class='text-2xl font-bold text-blue-600'>${project.name}</h3><p class='text-gray-700 mt-2'>${project.description}</p>`;
        projectsContainer.appendChild(projectElement);
    });
});
