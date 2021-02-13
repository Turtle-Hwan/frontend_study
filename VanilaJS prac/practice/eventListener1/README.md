### addEventListener 를 이용해 mouse click 이벤트가 발생하면 element 글자의 색깔 변화 (JS 파일 내에서 CSS도 처리)

<마주친 문제점>
* 내부 폴더의 HTML element를 JS에서 참조할 때, document.querySelector("#title"); 를 쓰니 못 찾음..   
-> document.getElementById("title"); 으로 써서 해결.   

* 현재 element의 색깔을 const currentColor = title.style.color; 이렇게 받아오면, '===' 연산자로 비교를 할 때 rgb(39, 166, 175) 이러한 rgb 값을 써야 제대로 비교가 된다.   
