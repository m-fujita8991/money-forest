function onDeviceReady() {
    var Fetcher = window.BackgroundFetch;
    var fetchCallback = function() {
      
      // バックグラウンド処理
      moneybank += 10;
      setInterval(function(){
        moneybank += 10;
      },6000);
    }
 
    // 関数を登録
    Fetcher.configure(fetchCallback, failureCallback, {
        stopOnTerminate: false
    });
}
document.addEventListener("deviceready", onDeviceReady, false);