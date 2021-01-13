document.addEventListener('DOMContentLoaded',function(){
  //スタートボタン
  var startBtn = document.getElementById('startbtn');
  //ストップbutton
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  var btn3 = document.getElementById('btn3');
  //レール
  var rell = document.getElementsByTagName('img');
  //所持金
  var moneybank;
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = count1 + 1;
    var count5 = count2 + 1;
    var count6 = count3 + 1;
    var count7 = count4 + 1;
    var count8 = count5 + 1;
    var count9 = count6 + 1;
    var push = 0;
    var startbgm = document.getElementById("startbgm");
    var stopbgm1 = document.getElementById("stopbgm1");
    var stopbgm2 = document.getElementById("stopbgm2");
    var stopbgm3 = document.getElementById("stopbgm3");
    var hitse = document.getElementById("hitse");
    var timer1,timer2,timer3;
    var rellImg1 = ["cherry.jpg","jack.jpg","seven.jpg","bell.jpg"];
    var rellImg2 = ["jack.jpg","bell.jpg","seven.jpg","cherry.jpg"];
    var rellImg3 = ["cherry.jpg","bell.jpg","seven.jpg","jack.jpg"];
    startBtn.addEventListener("click",function(){
      if(moneybank < 3){
        alert("所持金が足りません");
      }
      else{
        push = 3;
        moneybank = Number(localStorage.getItem("moneybank"));
        moneybank -= 3;
        localStorage.setItem("moneybank", moneybank);document.getElementById("money").innerText = "お金：" + moneybank + "円";
        startBtn.disabled = true;
        btn1.disabled = btn2.disabled = btn3.disabled = false;
        startbgm.play();
         timer1 = setInterval(function(){
            count1--;
            if(count1 < 0){
                count1 = 3;
            }
            count4 = count1 + 1;
            if(count4 > 3){
                count4 = 0;
            }
            count7 = count4 + 1;
            if(count7 > 3){
                count7 = 0;
            }
            rell.item(0).src = "img/pachi/" + rellImg[count1];
            rell.item(3).src = "img/pachi/" + rellImg[count4];
            rell.item(6).src = "img/pachi/" + rellImg[count7];
        },37);
        timer2 = setInterval(function(){
            count2--;
            if(count2 < 0){
                count2 = 3;
            }
            count5 = count2 + 1;
            if(count5 > 3){
                count5 = 0;
            }
            count8 = count5 + 1;
            if(count8 > 3){
                count8 = 0;
            }
            rell.item(1).src = "img/pachi/" + rellImg2[count2];
            rell.item(4).src = "img/pachi/" + rellImg2[count5];
            rell.item(7).src = "img/pachi/" + rellImg2[count8];
        },37);
        timer3 = setInterval(function(){
            count3--;
            if(count3 < 0){
                count3 = 3;
            }
            count6 = count3 + 1;
            if(count6 > 3){
                count6 = 0;
            }
            count9 = count6 + 1;
            if(count9 > 3){
                count9 = 0;
            }
            rell.item(2).src = "img/pachi/" + rellImg3[count3];
            rell.item(5).src = "img/pachi/" + rellImg3[count6];
            rell.item(8).src = "img/pachi/" + rellImg3[count9];
        },37);
      }
    });


    btn1.addEventListener("mouseup",function(){
        Stop(timer1,stopbgm1,btn1);
    });

    btn2.addEventListener("mouseup",function(){
        Stop(timer2,stopbgm2,btn2);
    });

    btn3.addEventListener("mouseup",function(){
        Stop(timer3,stopbgm3,btn3);
    });

    function Stop(timer,stopbgm,stopbtn){
        setTimeout(function(){
            clearInterval(timer.time);
            stopbgm.play();
        stopbtn.disabled = true;
        push--;
        if(push <= 0){
            Result();
        }
        },190);   
    }

    function Result(){
        if(count1 == 2 && count2 == 2 && count3 == 2||count4 == 2 && count5 == 2 && count6 == 2
            || count7 == 2 && count8 == 2 && count9 == 2 || count1 == 2 && count5 == 2 && count9 == 2
            || count7 == 2 && count5 == 2 && count3 == 2){
            moneybank += 50;
            hitse.play();
        }
        else if(count1 == 3 && count2 == 1 && count3 == 1||count4 == 3 && count5 == 1 && count6 == 1
            || count7 == 3 && count8 == 1 && count9 == 1 || count1 == 3 && count5 == 1 && count9 == 1
            || count7 == 3 && count5 == 1 && count3 == 1){
            moneybank += 10;
            hitse.play();
        }
        else if(count1 == 1 && count2 == 0 && count3 == 3||count4 == 1 && count5 == 0 && count6 == 3
            || count7 == 1 && count8 == 0 && count9 == 3 || count1 == 1 && count5 == 0 && count9 == 3
            || count7 == 1 && count5 == 0 && count3 == 3){
            moneybank += 20;
            hitse.play();
        }
        else if(count1 == 0 || count4 == 0 || count7 == 0){
            moneybank++;
        }
        localStorage.setItem("moneybank", moneybank);document.getElementById("money").innerText = "お金：" + moneybank + "円";
        startBtn.disabled = false;
    }
});