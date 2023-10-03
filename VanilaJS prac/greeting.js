const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    resetName();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}


function deleteName() {
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = ``;
    input.value = ``;
}

function resetName() {  //name 재설정 버튼
    const resetNameBtn = document.createElement("button");
    resetNameBtn.innerHTML = "🔄";
    resetNameBtn.classList.add("resetNameBtn");
    greeting.append(resetNameBtn);
    resetNameBtn.addEventListener("click", deleteName);
}