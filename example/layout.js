var sidebar = document.getElementById("sidebar")
var content = document.getElementById("content")
var switcher = document.getElementById("switcher")
switcher.addEventListener("click", (e) => {
    if (!sidebar.style.display) {
        sidebar.style.display = 'flex';
    }

    if (sidebar.style.display == 'flex') {
        sidebar.style.display = 'none';
        content.style.width = "100%";
    } else if (sidebar.style.display == 'none') {
        sidebar.style.display = 'flex';
        content.style.width = '75%';
    }
})