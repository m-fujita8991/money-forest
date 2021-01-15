// 名前取得用js
// APIキー
var applicationKey = "518d2dcf0793d7e878024bfae55edca66fe98d07f37cef22ea14080c5174b485";
var clientKey = "0986546d9a7a03b1d7e1c25222ba6694e149405b9b92864d6b263ac8895be0ab";

document.addEventListener('DOMContentLoaded',function(){
    var startBtn = document.getElementById('startbtn');
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var rell1 = document.getElementById('rell1');
    var rell1 = document.getElementById('rell1');
    var rell1 = document.getElementById('rell1');
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var push = 0;
    var moneybank = Number(localStorage.getItem("moneybank"));
    var startbgm = new Audio();
    startbgm.src = "sound/pachi/start.mp3";
    var stopbgm1 = new Audio();
    stopbgm1.src = "sound/pachi/stop.mp3";
    var stopbgm2 = new Audio();
    stopbgm2.src = "sound/pachi/stop.mp3";
    var stopbgm3 = new Audio();
    stopbgm3.src = "sound/pachi/stop.mp3";
    var hitse = new Audio();
    hitse.src = "sound/pachi/hitse.mp3";
    var timer1,timer2,timer3;
    var rellImg = ["cherry.jpg","jack.jpg","seven.jpg","bell.jpg"];
    var rellImg2 = ["jack.jpg","bell.jpg","seven.jpg","cherry.jpg"];
    var rellImg3 = ["cherry.jpg","bell.jpg","seven.jpg","jack.jpg"];

    startBtn.addEventListener("click",function(){ 
      moneybank = Number(localStorage.getItem("moneybank"));
      if(moneybank < 3){
        alert("所持金が不足しています");
      }
      else{
        push = 3;   
        startBtn.disabled = true;
        btn1.disabled = btn2.disabled = btn3.disabled = false;
        startbgm.play();
        moneybank -= 3;
        localStorage.setItem("moneybank", moneybank);
        document.getElementById("money").innerText = "お金：" + moneybank + "円";
        timer1 = setInterval(function(){
            count1++;
            if(count1 > 3){
                count1 = 0;
            }
            rell1.src = "img/pachi/" + rellImg[count1];
        },80);
        timer2 = setInterval(function(){
            count2++;
            if(count2 > 3){
                count2 = 0;
            }
            rell2.src = "img/pachi/" + rellImg2[count2];
        },80);
        timer3 = setInterval(function(){
            count3++;
            if(count3 > 3){
                count3 = 0;
            }
            rell3.src = "img/pachi/" + rellImg3[count3];
        },80);
      }
    });

    btn1.addEventListener("mousedown",function(){
        Stop(timer1,btn1,stopbgm1);
    });

    btn2.addEventListener("mousedown",function(){
        Stop(timer2,btn2,stopbgm2);
    });

    btn3.addEventListener("mousedown",function(){
        Stop(timer3,btn3,stopbgm3);
    });

    function Stop(timer,stopbtn,stopbgm){
      stopbgm.play();
      clearInterval(timer);
      push--;
      stopbtn.disabled = true;
      if(push < 1){
        startBtn.disabled = false; 
        Result();
      }
    }

    function Result(){
      moneybank = Number(localStorage.getItem("moneybank"));
        if(count1 == 2 && count2 == 2 && count3 == 2){
            moneybank += 1000;
            hitse.play();
        }
        else if(count1 == 3 && count2 == 1 && count3 == 1){
           moneybank += 100;
            hitse.play();
        }
        else if(count1 == 1 && count2 == 0 && count3 == 3){
            moneybank += 50;
            hitse.play();
        }
        else if(count1 == 0){
            moneybank += 3;
        }
        localStorage.setItem("moneybank", moneybank);
        document.getElementById("money").innerText = "お金：" + moneybank + "円";
        startBtn.disabled = false;
    }
});