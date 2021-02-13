const title = document.getElementById("title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
    if (currentClass === CLICKED_CLASS) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();