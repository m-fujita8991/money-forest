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
  var hachi = localStorage.getItem("hachi");
  if (username === null || username === "") {
    // 名前登録
    username = prompt("ユーザ名を指定してください");
    // タップ時の金額設定
    money = 1;
    // 貯金設定
    moneybank = 0;
    // ハチ
    hachi = 10;
    
    localStorage.setItem("username", username);
    localStorage.setItem("money", money);
    localStorage.setItem("moneybank", moneybank);
    localStorage.setItem("hachi", hachi);
  }

  //オフライン処理
    var moneybank = localStorage.getItem("moneybank");
    var time = Number(localStorage.getItem("time"));
    var start_time = new Date();
    var end_time = time;
    if(end_time.getTime != null){
      var off_time = start_time.getTime() - end_time.getTime();
      var diff_time = Math.floor(off_time / (1000 * 60 * 60));
      alert(diff_time);
      if(diff_time >= 5){
        moneybank += 10;
        localStorage.setItem("moneybank", moneybank);
      }
    }
  
  /** mobile backend に保存する **/
  // スコアのインスタンスを生成
  var nameData = new Name({username: username});
  var moneyData = new Money({money: money});
  var moneybankData = new Moneybank({moneybank: moneybank});
  var hachiData = new Hachi({hachi: hachi});
  var timeDate = new Time({time: time});

  // 送信処理実行
  nameData.save();
  moneyData.save();
  moneybankData.save();
  hachiData.save();
  timeDate.save();
});