function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    const isOpen = sidebar.classList.toggle("open");

    if (isOpen) {
        mainContent.style.marginLeft = "250px";  // Adjust main content margin
    } else {
        mainContent.style.marginLeft = "0";  // Reset main content margin
    }
}
