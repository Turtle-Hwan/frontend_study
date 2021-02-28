const gamePlay = document.querySelector("#gamePlay");
const redBlueBox = document.getElementById("redBlueBox");
const seletRedBlue = document.getElementsByName("select");
const winLoseMsg = document.querySelector("#winLoseMsg");
const resultTable = document.querySelector("#resultTable");

const totalNum = document.querySelector("#totalNum");
const startNum = document.querySelector("#startNum");
let totalMoney;

function saveTotalNum() {
    totalMoney = parseInt(totalNum.value);

    document.querySelector("#totalNum-div").innerHTML = "총 금액 저장 완료!"
}

function colorChanger() {
    const redOrBlue = Math.floor(Math.random() * 2) + 1;
    if (redOrBlue === 1) {
        redBlueBox.style.backgroundColor = "blue";
        if (seletRedBlue[1].checked) {
            winLoseMsg.innerHTML = "승리!"
        } else {
            winLoseMsg.innerHTML = "패배!"
        }
    } else {
        redBlueBox.style.backgroundColor = "red"; 
        if (seletRedBlue[0].checked) {
            winLoseMsg.innerHTML = "승리!"
        } else {
            winLoseMsg.innerHTML = "패배!"
        }
    }
}

function gameStart() {

    if (typeof totalMoney === "undefined"){
        alert("확인 버튼 눌러주세요");
    } else {

        colorChanger();

        writeResult();
    }
}

let tryNum = 0;
function writeResult() {
    const newLine = document.createElement("tr")
    newLine.innerHTML =
        `<td>${tryNum = tryNum + 1}</td>
        <td>${winLoseMsg.innerHTML === "승리!" ? `${totalMoney = totalMoney + 2 * parseInt(startNum.value)}` : `${totalMoney = totalMoney - parseInt(startNum.value)}`}</td>
        <td>${winLoseMsg.innerHTML}</td>
        <td>${parseInt(startNum.value)}</td>
        <td>${winLoseMsg.innerHTML === "승리!" ? `+ ${2*parseInt(startNum.value)}` : `- ${parseInt(startNum.value)}`}</td>`;
    
    resultTable.appendChild(newLine);
}


function init() {
    gamePlay.addEventListener("click", gameStart);

}
init();