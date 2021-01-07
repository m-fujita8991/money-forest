// This is a JavaScript file

function gacha(type){
  // データを取得
  var moneybank = Number(localStorage.getItem("moneybank"));
  var money = Number(localStorage.getItem("money"));
  switch(type){
    case 1:
    if(moneybank >= 5){
      moneybank -= 5;
      document.getElementById("money").innerText = "お金：" + moneybank + "円";
      localStorage.setItem("moneybank", moneybank);
      break;
    }else{
      alert("お金が足りません");
      break;
    }
    default:
    if(moneybank >= 50){
      moneybank -= 50;
      document.getElementById("money").innerText = "お金：" + moneybank + "円";
      localStorage.setItem("moneybank", moneybank);
      break;
    }else{
      alert("お金が足りません");
    }
  }
}