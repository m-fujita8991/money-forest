function first(){
  moni = document.getElementById("moni");
  moni.src = "/img/races.png";
  se = document.getElementById("bikefirst");
  
  setTimeout(function(){
    moni.src = "/img/bikesecond.png";
  },1000);
  setTimeout(function(){
    var min = 5 ;
    var max = 10 ;
    var per = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    moni.src = "img/races.png";
  },3000);

  // setTimeout(function(){
  //     moni.src = "/img/bikejiko.png";
  //   },2000);
  
  se.play();
}