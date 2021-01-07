// ニフクラ初期設定用js
// APIキー
var applicationKey = "518d2dcf0793d7e878024bfae55edca66fe98d07f37cef22ea14080c5174b485";
var clientKey = "0986546d9a7a03b1d7e1c25222ba6694e149405b9b92864d6b263ac8895be0ab";
// SDKの初期化
var ncmb = new NCMB(applicationKey, clientKey);

// 初期設定
window.addEventListener('load', (event) => {
  var username = localStorage.getItem("username");
  var money = localStorage.getItem("money");
  var moneybank = localStorage.getItem("moneybank");
  if (username === null || username === "") {
    // 名前登録
    username = prompt("ユーザ名を指定してください");
    // タップ時の金額設定
    money = 1;
    // 貯金設定
    moneybank = 0;
    
    localStorage.setItem("username", username);
    localStorage.setItem("money", money);
    localStorage.setItem("moneybank", moneybank);
  }
  
  /** mobile backend に保存する **/
  // スコアのインスタンスを生成
  var nameData = new Name({username: username});
  var moneyData = new Money({money: money});
  var moneybankData = new Moneybank({moneybank: moneybank});
  // 送信処理実行
  nameData.save();
  moneyDate.save();
  moneybankDate.save();
});