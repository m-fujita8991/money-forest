// メイン画面用js
// gif
var gifurl = ["gif/money.gif","gif/bee.gif"];
// jpg
var imgurl = ["img/tree/spring.jpg","img/tree/summer.jpg","img/tree/autumn.jpg","img/tree/winter.jpg"];
// gg
var ggurl = ["img/gg/gg1.jpg","img/gg/gg2.jpg","img/gg/gg3.jpg","img/gg/gg4.jpg"];
// uma
var umaurl = ["img/uma/uma1.jpg","img/uma/uma2.jpg","img/uma/uma3.jpg","img/uma/uma4.jpg","img/uma/uma5.jpg"];
// 背景
var haikei = ["gif/season/spring.gif","gif/season/summer.gif","gif/season/autumn.gif","gif/season/winter.gif"]

// 四季実装
var now = new Date();
var month = now.getMonth()+1;
var x = 0;
var season = 0;

//month = 3;
//month = 6;
//month = 9;
//month = 12;

switch(month){
  case 3:
  case 4:
  case 5:
  // 春
  document.body.style.backgroundImage='url(' + haikei[0] + ')';
  x = 0;
  season = 0;
  while(x < 4){
    document.getElementById("btn" + x++).src=imgurl[season];
  }
  break;

  case 6:
  case 7:
  case 8:
  // 夏
  document.body.style.backgroundImage='url(' + haikei[1] + ')';
  x = 0;
  season = 1;
  while(x < 4){
    document.getElementById("btn" + x++).src=imgurl[season];
  }
  break;

  case 9:
  case 10:
  case 11: 
  // 秋
  document.body.style.backgroundImage='url(' + haikei[2] + ')';
  x = 0;
  season = 2;
  while(x < 4){
    document.getElementById("btn" + x++).src=imgurl[season];
  }
  break;

  default:
  // 冬
  document.body.style.backgroundImage='url(' + haikei[3] + ')';
  x = 0;
  season = 3;
  while(x < 4){
    document.getElementById("btn" + x++).src=imgurl[season];
  }
}

// クリックしたときの処理
function fMouseUp(num) {
  // 天国か地獄か
  var rnd = Math.floor( Math.random() * 20 );
  switch(rnd){
    case 0:
    document.getElementById('btn' + num).src=gifurl[1];
    break;
    default:
    document.getElementById('btn' + num).src=gifurl[0];
  }
  // 2秒表示後、木に戻る
  setTimeout(function(){
    document.getElementById('btn' + num).src=imgurl[season];
  },2000);
}

// ガチャ画像自動
var i = 0
setInterval(function(){
  document.getElementById('gg').src=ggurl[i++];
  if(i == 4){
    i = 0;
  }
},1000);

// 賭博画像自動
var n = 0
setInterval(function(){
  document.getElementById('bet').src=umaurl[n++];
  if(n == 5){
    n = 0;
  }
},1000);