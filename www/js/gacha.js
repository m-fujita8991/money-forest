// This is a JavaScript file
var applicationKey = "518d2dcf0793d7e878024bfae55edca66fe98d07f37cef22ea14080c5174b485";
var clientKey = "0986546d9a7a03b1d7e1c25222ba6694e149405b9b92864d6b263ac8895be0ab";
// SDKの初期化
var ncmb = new NCMB(applicationKey, clientKey);

var gItem = ["タップ金+1","初期化","景品3","景品4","景品5"];

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
      var rnd = Math.floor( Math.random() * 4 );
      switch(rnd){
        case 0:
        alert(gItem[rnd]+"を入手しました");
        moneyUp();
        break;
        case 1:
        alert(gItem[rnd]+"を入手しました");
        Initialize();
        break;
        case 2:
        alert(gItem[rnd]+"を入手しました");
        break;
        case 3:
        alert(gItem[rnd]+"を入手しました");
        break;
        default:
        alert(gItem[rnd]+"を入手しました");
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
      var item = [];
      for(var i = 0;i<=9;i++){
        var rnd = Math.floor( Math.random() * 4 );
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
        break;
        case 3:
        item.push(gItem[rnd]);
        break;
        default:
        item.push(gItem[rnd]);
      }
      }
      alert(item);
    }else{
      alert("お金が足りません");
    }
  }
}
function moneyUp(){
var money = Number(localStorage.getItem("money"));
        money += 1;
        localStorage.setItem("money", money);
}
function Initialize(){
var money = Number(localStorage.getItem("money"));
        money = 1;
        localStorage.setItem("money", money);
}