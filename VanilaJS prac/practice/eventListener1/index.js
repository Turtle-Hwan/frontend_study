//하위 폴더 안의 html element를 참조할 때 querySelector("#title") 쓰니 안됨.
const title = document.getElementById("title");

//rgb 값을 써야 ===으로 비교 가능!!
const BASE_COLOR = "rgb(39, 166, 175)";
const CHANGE_COLOR = "black";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = CHANGE_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}


function init() {
    title.style.color = CHANGE_COLOR;
    title.addEventListener("click", handleClick);
}
init();