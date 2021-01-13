var applicationKey = "89a435ad7bd29469d2354d179fb078e1865dba3aae9fc730b88390301d4ed2ee";

var clientKey = "756caca44a56dbbf0a60808da7978480274e81b8ebbf5a2720ae05085c1c34af";

// オフライン
document.addEventListener("offline", onOffline, false);
function onOffline() {
    // イベントの処理
    moneybank += 10;
    setInterval(function(){
      moneybank += 10;
    },6000);
    onlineFlag = false;
}

// オンライン
document.addEventListener("online", onOnline, false);
function onOnline() {
    // イベントの処理
    onlineFlag = true;
}

localStorage.setItem("moneybank", moneybank);
document.getElementById("money").innerText = "お金：" + moneybank + "円";