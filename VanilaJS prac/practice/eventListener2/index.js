const title = document.getElementById("title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
    if (currentClass === CLICKED_CLASS) {
        title.className = "";
    } else {
        title.className = CLICKED_CLASS;
    }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();