// メイン画面用js
// APIキー
var applicationKey = "*****";
var clientKey = "*****";

// 自動back
setTimeout(function(){
  var moneybank = Number(localStorage.getItem("moneybank"));
  moneybank += 100;
  window.location.href = 'main.html';
  localStorage.setItem("moneybank", moneybank);
},12000);