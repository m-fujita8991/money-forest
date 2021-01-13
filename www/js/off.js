var applicationKey = "518d2dcf0793d7e878024bfae55edca66fe98d07f37cef22ea14080c5174b485";

var clientKey = "0986546d9a7a03b1d7e1c25222ba6694e149405b9b92864d6b263ac8895be0ab";

var moneybank = Number(localStorage.getItem("moneybank"));
var money = Number(localStorage.getItem("money"));
var online = false;

// オフライン
document.addEventListener("offline", onOffline, false);
function onOffline() {
  // イベントの処理
  setInterval(function(){
    moneybank += 10;
    localStorage.setItem("moneybank", moneybank);
  },6000);
  online = false;
}

// オンライン
document.addEventListener("online", onOnline, false);
function onOnline() {
  // イベントの処理
  online = true;
}