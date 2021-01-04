var applicationKey = "89a435ad7bd29469d2354d179fb078e1865dba3aae9fc730b88390301d4ed2ee";
var clientKey = "756caca44a56dbbf0a60808da7978480274e81b8ebbf5a2720ae05085c1c34af";

window.addEventListener('load', function(){

  // オフラインになったら実行
	window.addEventListener('offline', function(){
		checkOnline();
	});
});

function checkOnline() {
	if( navigator.offLine ) {
		setInterval("showNowDate()", 1000);
	} 
}

function showNowDate(){
  if(rank == 1){
    money += 1;
    document.write(money);
  }
  if(rank == 2){
    money += 10;
    document.write(money);
  }
  if(rank == 3){
    money += 100;
    document.write(money);
  }
  if(rank == 4){
    money += 1000;
    document.write(money);
  }
}

