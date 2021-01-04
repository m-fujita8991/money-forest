// ニフクラ初期設定用js
// APIキー
var applicationKey = "518d2dcf0793d7e878024bfae55edca66fe98d07f37cef22ea14080c5174b485";
var clientKey = "0986546d9a7a03b1d7e1c25222ba6694e149405b9b92864d6b263ac8895be0ab";
// SDKの初期化
var ncmb = new NCMB(applicationKey, clientKey);

// 名前登録
window.addEventListener('load', (event) => {
  var username = localStorage.getItem("username");
  if (username === null || username === "") {
    username = prompt("ユーザ名を指定してください");
    localStorage.setItem("username", username);
  }
  /** mobile backend に保存する **/
  // スコアのインスタンスを生成
  var nameData = new Name({username: username});
  // 送信処理実行
  nameData.save()
});