var bet = 0;
function Bet(ibet,obj){
  bt1 = document.getElementById("bt1");
  bt2 = document.getElementById("bt2");
  bt3 = document.getElementById("bt3");
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
  if(moneybank < bet || bet == 0){
    alert("現金が足りません");
  }
  else{
    var dice1 = Math.floor( Math.random() * 6 ) + 1;
    var dice2 = Math.floor( Math.random() * 6 ) + 1
    var dicesum = dice1 + dice2;
    if(dicesum % 2 == 0){
      if(chohan == true){
        moneybank = moneybank + bet * 4;
        text = "かけたのは丁！結果は丁！" + bet * 4 +"円獲得！"
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
        moneybank = moneybank + bet * 4;
        text = "かけたのは半！結果は半！" + bet * 4 + "円獲得！"
      }
    }
    alert(text);
     localStorage.setItem("moneybank", moneybank);
    document.getElementById("money").innerText = "お金：" + moneybank + "円";
  }
}