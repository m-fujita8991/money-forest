// This is a JavaScript file
var applicationKey = "518d2dcf0793d7e878024bfae55edca66fe98d07f37cef22ea14080c5174b485";
var clientKey = "0986546d9a7a03b1d7e1c25222ba6694e149405b9b92864d6b263ac8895be0ab";
// SDKの初期化
var ncmb = new NCMB(applicationKey, clientKey);

//ガチャ景品

var gItem = ["タップ金+1","初期化","ハチ-1","掛け金割引","タップ金+2"];

var gItem = ["タップ金+1","初期化","ハチ-1"];



//結果ボタン挿入
var btn = function(){
  document.getElementById("rslt").innerHTML='<input type="button" value="結果を見る" onmouseup="result()">';
}


var r;
var item;

function gacha(type){
  // データを取得
  var moneybank = Number(localStorage.getItem("moneybank"));
  var money = Number(localStorage.getItem("money"));
  switch(type){
    case 1:  //単発
    if(moneybank >= 5){
      moneybank -= 5;
      document.getElementById("money").innerText = "お金：" + moneybank + "円";
      localStorage.setItem("moneybank", moneybank);
      PlaySound();
      setTimeout(btn,6000);//6秒後にボタン表示
      var gatya1 = document.getElementById("gatya1");
      var gatya2 = document.getElementById("gatya2");
      gatya1.disabled = true;
      gatya2.disabled = true;
      var rnd = Math.floor( Math.random() * 3 );//乱数生成
      switch(rnd){
        case 0:
        r = gItem[rnd];
        moneyUp();
        break;
        case 1:
        r = gItem[rnd];
        Initialize();
        break;
        case 2:
        r = gItem[rnd];
        honey();
        break;

        case 3:
        r = gItem[rnd];
        break;
        default:
        r = gItem[rnd];
        moneyup2();

      }
      break;
    }else{
      alert("お金が足りません");
      break;
    }
    default:  //10連
    if(moneybank >= 50){
      moneybank -= 50;
      document.getElementById("money").innerText = "お金：" + moneybank + "円";
      localStorage.setItem("moneybank", moneybank);
      var gatya1 = document.getElementById("gatya1");
      var gatya2 = document.getElementById("gatya2");
      gatya1.disabled = true;
      gatya2.disabled = true;
      PlaySound();
      setTimeout(btn,6000);//6秒後にボタン表示
      item = [];
      for(var i = 0;i<=9;i++){
        var rnd = Math.floor( Math.random() * 3 );//乱数生成
        switch(rnd){
        case 0:
        item.push(gItem[rnd]);
        moneyUp();
        break;
        case 1:
        item.push(gItem[rnd]);
        Initialize();
        break;
        case 2:
        item.push(gItem[rnd]);
        honey();
        break;

        case 3:
        item.push(gItem[rnd]);
        break;
        default:
        item.push(gItem[rnd]);
        moneyup2();

      }
      }
      r = item;
    }else{
      alert("お金が足りません");
    }
  }
}
//タップ金＋１
function moneyUp(){
var money = Number(localStorage.getItem("money"));
        money += 1;
        localStorage.setItem("money", money);
}
//初期化
function Initialize(){
var money = Number(localStorage.getItem("money"));
var hachi = Number(localStorage.getItem("hachi"));
        money = 1;
        hachi = 10;
        localStorage.setItem("money", money);
        localStorage.setItem("hachi",hachi);
}
//ハチ－１
function honey(){
var hachi = Number(localStorage.getItem("hachi"));
if(hachi>0){
  hachi -= 1;
  localStorage.setItem("hachi",hachi);
}
}
//タップ金＋2
function moneyup2(){
var money = Number(localStorage.getItem("money"));
        money += 1;
        localStorage.setItem("money", money);
  
}
//ガチャ音
function PlaySound() {
      audioElem = new Audio();
      audioElem.src = "mp3/spo_ge_gatyagatya01.mp3";
      audioElem.play();
    }
//ガチャ結果
function result(){
  alert(r+"を入手しました");
  document.getElementById("rslt").innerHTML="";//ボタン消す
  var gatya1 = document.getElementById("gatya1");
  var gatya2 = document.getElementById("gatya2");
  gatya1.disabled = false;
  gatya2.disabled = false;
}
