
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const topbar = document.querySelector(".topbar");

    sidebar.classList.toggle("closed");
    content.classList.toggle("shift");
    topbar.classList.toggle("shift");
}