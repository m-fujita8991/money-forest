// メイン画面用js
// APIキー
var applicationKey = "518d2dcf0793d7e878024bfae55edca66fe98d07f37cef22ea14080c5174b485";
var clientKey = "0986546d9a7a03b1d7e1c25222ba6694e149405b9b92864d6b263ac8895be0ab";

// 自動back
setTimeout(function(){
  var moneybank = Number(localStorage.getItem("moneybank"));
  moneybank += 100;
  window.location.href = 'main.html';
  localStorage.setItem("moneybank", moneybank);
},12000);