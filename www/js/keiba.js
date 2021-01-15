// 名前取得用js
// APIキー
var applicationKey = "518d2dcf0793d7e878024bfae55edca66fe98d07f37cef22ea14080c5174b485";
var clientKey = "0986546d9a7a03b1d7e1c25222ba6694e149405b9b92864d6b263ac8895be0ab";

document.addEventListener("DOMContentLoaded",function(){
  var fan = new Audio();
  var rb = -1;
  var rank = [0,1,2,3,4];
  var betmoney = 0;
  var horsename = ["ジモトダケサラブレッド","タダノウマ","デオチインパクト","クサッタミカン","クロワッサン"];
  fan.src = "sound/keiba/fan.mp3";
  fan.play();
  document.getElementById("sub").addEventListener("click",function(){
    betmoney = document.getElementById("betmoney");
    rb = document.getElementById("hb").uma.value;
    var first = document.getElementById("first");
    var firstbtn = document.getElementById("firstbtn");
    if(!Val(betmoney.value)){
      first.hidden = firstbtn.hidden = true;
      Second();
    }
  });

  function Second(){
    moneybank = Number(localStorage.getItem("moneybank"));
    moneybank -= Number(betmoney.value);
    localStorage.setItem("moneybank",moneybank);
    document.getElementById("money").innerText = "お金：" + moneybank + "円";
    rank = shuffle(rank);
    Show();
  }

  function Show(){
    var run = new Audio();
    run.src = "sound/keiba/horserun.mp3";
    run.play();
    var timer = setTimeout(function(){
      document.getElementById("second").hidden = false;
      var i = 4;
      fff();
      function fff(){
        var timer2 = setTimeout(function(){
          var change = document.getElementsByClassName("seclab").item(i);
          change.innerHTML = (i + 1) + "着" + horsename[rank[i]];
          if(Number(rb) == rank[i]){
            change.style.borderColor = 'red';
          }
          i--;
          if(i > -1){
            var stop = new Audio();
            stop.src = "sound/pachi/stop.mp3";
            stop.play();
            fff();
          }
          else{
            Result();
          }
        },1000);
      }
    },5000);
  }

  function Result(){
    var kb = document.getElementById("kb");
    kb.hidden = false;
    moneybank = Number(localStorage.getItem("moneybank"));
    var fanfal = new Audio();
    if(Number(rb) == rank[0]){
      fanfal.src = "sound/keiba/suc.mp3";
      moneybank += betmoney.value * 10;
    }
    else{
      fanfal.src = "sound/keiba/miss.mp3";
    }
    fanfal.play();
    localStorage.setItem("moneybank",moneybank);
    document.getElementById("money").innerText = "お金：" + moneybank + "円";
  }

  function Val(betmoney){
    var reg = new RegExp("^[1-9][0-9]{0,}$");
    if(!reg.test(betmoney)){
      alert("賭金を正しく入力してください");
      return true;
    }
    else{
      var bbb = Number(betmoney);
      moneybank = Number(localStorage.getItem("moneybank"));
      if(bbb < 5000){
        alert("賭金が少なすぎます");
        return true;
      }
      else if(moneybank < bbb){
        alert("所持金が不足しています");
        return true;
      }
      return false;
    }
  }

  const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
});



