// 名前取得用js
// APIキー
var applicationKey = "518d2dcf0793d7e878024bfae55edca66fe98d07f37cef22ea14080c5174b485";
var clientKey = "0986546d9a7a03b1d7e1c25222ba6694e149405b9b92864d6b263ac8895be0ab";

var push = 3;
var bet = 3;
var startbtn = document.getElementById("startbtn");
var count1,count2,count3;
var timer1,timer2,timer3;
var rellImg1 = ["cherry.jpg","jack.jpg","seven.jpg","bell.jpg"];
var rellImg2 = ["jack.jpg","bell.jpg","seven.jpg","cherry.jpg"];
var rellImg3 = ["cherry.jpg","bell.jpg","seven.jpg","jack.jpg"];

window.addEventListener('load', (event) => {
  var timer1,timer2,timer3;
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
});



function Pray(){
  count1 = count2 = count3 = 0;
  var startbtn = document.getElementById("startbtn");
  // var btn1 = document.getElementById("btn1");
  // var btn2 = document.getElementById("btn2");
  // var btn3 = document.getElementById("btn3");
  var moneybank = Number(localStorage.getItem("moneybank"));
  var rell1 = document.getElementById("rell1");
  var rell2 = document.getElementById("rell2");
  var rell3 = document.getElementById("rell3");
  if(moneybank < bet){
    alert("所持金が足りません");
  }
  else{
    moneybank -= bet;
    localStorage.setItem("moneybank",moneybank);
    document.getElementById("money").innerText = "お金：" + moneybank + "円";
    startbtn.disabled = true;
    btn1.disabled = btn2.disabled = btn3.disabled = false;
    timer1 = setInterval(function(){
      count1++;
      if(count1 > 3){
        count1 = 0;
      }
      rell1.src = "img/pachi/" + rellImg1[count1];
    },80);
    timer2 = setInterval(function(){
      count2++;
      if(count2 > 3){
        count2 = 0;
      }
      rell2.src = "img/pachi/" + rellImg2[count1];
    },80);
    timer3 = setInterval(function(){
      count3++;
      if(count3 > 3){
        count3 = 0;
      }
      rell3.src = "img/pachi/" + rellImg3[count1];
    },80);
  }
}

// btn1.addEventListener("mouseup",function(){
//   alert("OK")
//   Stop(timer1,btn1);
// });

// btn2.addEventListener("mouseup",function(){
//   Stop(timer2,btn2);
// });

// btn3.addEventListener("mouseup",function(){
//   Stop(timer3,btn3);
// });
function Stop(timer,stopbtn){
  switch(timer){
    case 1:
    alert(1);
      clearInterval(timer1.time);stopbtn.disabled = true;
      push--;
      break;
    case 2:
    alert(2);
      clearInterval(timer2.time); stopbtn.disabled = true;
      push--;
      break;
    case 3:
    alert(timer3);
      clearInterval(timer3.time);stopbtn.disabled = true;
      push--;
      break;
  }

  if(push <= 0){
    Result();
  }   
}