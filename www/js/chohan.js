// 名前取得用js
// APIキー
var applicationKey = "518d2dcf0793d7e878024bfae55edca66fe98d07f37cef22ea14080c5174b485";
var clientKey = "0986546d9a7a03b1d7e1c25222ba6694e149405b9b92864d6b263ac8895be0ab";

var bet = 0;

function Bet(ibet,obj){
  var bt1 = document.getElementById("bt1");
  var bt2 = document.getElementById("bt2");
  var bt3 = document.getElementById("bt3"); 
  bet = ibet;    
  bt1.disabled = false;
  bt2.disabled = false;
  bt3.disabled = false;
  obj.disabled = true;
}

function Play(chohan){
  var text = "";
    // データを取得
  var moneybank = Number(localStorage.getItem("moneybank"));
  if(bet != 1 && bet !=10 && bet != 100){
    alert("掛け金を選択してください。")
  }
  else if(moneybank < bet){
    alert("現金が足りません");
  }
  else{
    var dice1 = Math.floor( Math.random() * 6 ) + 1;
    var dice2 = Math.floor( Math.random() * 6 ) + 1;
    var gm = 0;
    switch(bet){
      case 1:
        for(var i = 0;i<4;i++){
          gm +=  Math.floor( Math.random() * 2 ) +1;
        }
        break;
      case 10:
        for(var i = 0;i<4;i++){
          gm +=  Math.floor( Math.random() * 11) + 5;
        }
        break;
      case 100:
         for(var i = 0;i<4;i++){
          gm +=  Math.floor( Math.random() * 101) + 50;
        }
        break;
    }
    var dicesum = dice1 + dice2;
    if(dicesum % 2 == 0){
      if(chohan == true){
        moneybank = moneybank + gm;
        text = "かけたのは丁！結果は丁！" + gm +"円獲得！"
      }
      else{
        moneybank = moneybank - bet;
        text = "かけたのは半！結果は丁！残念！"
      }
    }
    else if(dicesum % 2 == 1){
      if(chohan == true){
        moneybank = moneybank - bet;
        text ="かけたのは丁！結果は半！残念！"
      }
      else{
        moneybank = moneybank + gm;
        text = "かけたのは半！結果は半！" + gm + "円獲得！"
      }
    }
    localStorage.setItem("moneybank", moneybank);
    alert(text);
    var ac = Math.floor( Math.random() * 100) + 1;
    if(ac < 10){
      alert("スリにあった！所持金0円！");
      moneybank = 0;
      localStorage.setItem("moneybank", moneybank);
    }
    document.getElementById("money").innerText = "お金：" + moneybank + "円";
    bet = 0;
    var bt1 = document.getElementById("bt1");
    var bt2 = document.getElementById("bt2");
    var bt3 = document.getElementById("bt3"); 
    bt1.disabled = bt2.disabled = bt3.disabled = false;
  }
}