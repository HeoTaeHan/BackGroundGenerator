var css     = document.querySelector("h3"); // 빈태그 h3
var color1  = document.querySelector(".color1"); // 컬러입력창1
var color2  = document.querySelector(".color2"); // 컬러입력창2
var body    = document.getElementById("gradient"); // 바디태그

/*for(i = 0; i < 2; i++){
    document.querySelectorAll('input')[i].addEventListener("input", function (){
        body.style.background = "linear-gradient(to right, " + document.querySelectorAll('input')[0].value + "," + document.querySelectorAll('input')[1].value + ")";    
        css.textContent = body.style.background + ";";
    });
}*/

// 이벤트 연결
color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}
