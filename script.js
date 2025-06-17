// Projects data
const projects = [
  { title: "Weather App", desc: "Ek simple weather app jo live weather dikhata hai." },
  { title: "To-Do List", desc: "Task management ke liye ek to-do list app." },
  { title: "Portfolio Website", desc: "Yeh khud ka portfolio website!" }
];

// Render projects
const projectsList = document.getElementById('projects-list');
projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project';
  div.innerHTML = `<span class="project-title">${project.title}</span>: ${project.desc}`;
  projectsList.appendChild(div);
});

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const showMsg = `Thank you, ${name}! Aapka message: "${message}"`;
  document.getElementById('formStatus').textContent = showMsg;
  this.reset();
});