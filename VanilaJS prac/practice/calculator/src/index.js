

const commands = {
  display: document.querySelector("#display"),
  reset: document.querySelector("#reset"),
  num: [
    document.querySelector("#n0"),
    document.querySelector("#n1"),
    document.querySelector("#n2"),
    document.querySelector("#n3"),
    document.querySelector("#n4"),
    document.querySelector("#n5"),
    document.querySelector("#n6"),
    document.querySelector("#n7"),
    document.querySelector("#n8"),
    document.querySelector("#n9")
  ],
  operator: [
    document.querySelector("#result"),
    document.querySelector("#divide"),
    document.querySelector("#multiply"),
    document.querySelector("#minus"),
    document.querySelector("#plus")
  ]
};

let displayValue = 0;
let saveValue = "";
let operatorValue = 0;

function addNum() {
  for (let i = 0; i < 10; i++) {
    commands.num[i].addEventListener("click", function () {
      if (displayValue == 0) {
        commands.display.value = commands.num[i].innerText;
        displayValue = commands.display.value;
      } else {
        displayValue = displayValue + commands.num[i].innerText;
        commands.display.value = displayValue;
      }
    });
  }
}

function print() {
  if (saveValue > 0) {
    commands.display.value = saveValue;
  } else {
    commands.display.value = Math.abs(saveValue) + "-";
    console.log(commands.display.value);
  }
}

function calculation() {
  console.log(
    saveValue + "  연산자 " + operatorValue + "  diplay value " + displayValue
  );

  if (operatorValue === 1) {
    if (saveValue === "") {
      saveValue = parseFloat(displayValue, 10);
      displayValue = 0;
    } else {
      saveValue = parseFloat(saveValue, 10) / parseFloat(displayValue, 10);
      displayValue = 0;
      print();
    }
  } else if (operatorValue === 2) {
    if (saveValue === "") {
      saveValue = parseFloat(displayValue, 10);
      displayValue = 0;
    } else {
      saveValue = parseFloat(saveValue, 10) * parseFloat(displayValue, 10);
      displayValue = 0;
      print();
    }
  } else if (operatorValue === 3) {
    if (saveValue === "") {
      saveValue = parseFloat(displayValue, 10);
      displayValue = 0;
    } else {
      saveValue = parseFloat(saveValue, 10) - parseFloat(displayValue, 10);
      displayValue = 0;
      print();
    }
  } else if (operatorValue === 4) {
    if (saveValue === "") {
      saveValue = parseFloat(displayValue, 10);
      displayValue = 0;
    } else {
      saveValue = parseFloat(saveValue, 10) + parseFloat(displayValue, 10);
      displayValue = 0;
      print();
    }
  } else {
    saveValue = saveValue + parseFloat(displayValue, 10);
    displayValue = 0;
    print();
  }
  console.log(
    saveValue + "  연산자 " + operatorValue + "  diplay value " + displayValue
  );
}

function init() {
  commands.reset.addEventListener("click", function () {
    commands.display.value = "";
    displayValue = 0;
    saveValue = "";
  });

  addNum();

  commands.operator[0].addEventListener("click", function () {
    calculation();
    operatorValue = 0;
    //commands.display.value = displayValue;
  });

  commands.operator[1].addEventListener("click", function () {
    calculation();
    operatorValue = 1;
  });

  commands.operator[2].addEventListener("click", function () {
    calculation();
    operatorValue = 2;
  });

  commands.operator[3].addEventListener("click", function () {
    calculation();
    operatorValue = 3;
  });

  commands.operator[4].addEventListener("click", function () {
    calculation();
    operatorValue = 4;
  });
}
init();
