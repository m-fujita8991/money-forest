// 名前取得用js
// APIキー
var applicationKey = "*****";
var clientKey = "*****";

// 名前取得
window.addEventListener('load', (event) => {
  var username = localStorage.getItem("username");
  document.getElementById("name").innerText = "名前：" + username;
  var moneybank = localStorage.getItem("moneybank");
  document.getElementById("money").innerText = "お金：" + moneybank + "円";
});