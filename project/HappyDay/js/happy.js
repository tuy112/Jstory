// today
function getTodayLabel() {
  var week = new Array('일','월','화','수','목','금','토');

  var today = new Date().getDay();
  var todayLabel = week[today];

  return todayLabel;
}
console.log(getTodayLabel());e

// 콘솔 값 html 출력
document.getElementById('now').innerHTML = getTodayLabel();

  
// 장미 수령하기 버튼 onclick 이벤트
function rosy() { 
  location.href = "https://jh-healing-place.tistory.com/27";
}

