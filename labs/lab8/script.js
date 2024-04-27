function toggleTheme() {
    let pageDark = document.querySelector('body');
    pageDark.classList.toggle("dark-mode");
}
let tbtn = document.getElementById("toggleButton");
tbtn.onclick = toggleTheme;