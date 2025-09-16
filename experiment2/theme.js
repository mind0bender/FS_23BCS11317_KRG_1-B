// theme.js

// ========== THEME HANDLING ==========
const userTheme = localStorage.getItem("theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (userTheme === "dark" || (!userTheme && systemDark)) {
  document.documentElement.classList.add("dark");
}

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
});

// ========== SIDEBAR TOGGLE ==========
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("w-20"); // collapse
  const navLinks = document.getElementById("navLinks").querySelectorAll("a");
  navLinks.forEach(link => {
    link.classList.toggle("text-sm");
  });
});

// ========== ACTIVE NAV LINK ==========
const navLinks = document.querySelectorAll("#navLinks a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("text-blue-600", "font-bold", "active-link"));
    link.classList.add("text-blue-600", "font-bold", "active-link");
  });
});

// ========== FETCH MOCK API DATA ==========
async function loadUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    const tbody = document.getElementById("userTable");
    tbody.innerHTML = users.slice(0, 5).map(user => `
      <tr class="hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="border px-4 py-2 dark:border-gray-500">${user.id}</td>
        <td class="border px-4 py-2 dark:border-gray-500">${user.name}</td>
        <td class="border px-4 py-2 dark:border-gray-500">${user.email}</td>
      </tr>
    `).join("");
  } catch (err) {
    console.error("Failed to fetch users:", err);
  }
}
loadUsers();
