// hamburger menu
const button=()=> {
    const burger = document.querySelector('#header.nav.ham');
    burger.addEventListener('click', ()=>{
        burger.classList.toggle('toggle');
    });
}


// header scroll fixed
// 스크롤 반응 헤더
var prevScrollpos = window.pageYOffset;
// 스크롤 내려갈 시 고정될 nav
var header = document.getElementById("#header");
var sticky = navbar.offsetTop;
window.onscroll = function() {
  // 반응형 헤더
  var currentScrollPos = window.pageYOffset;
  // 만약 방금 스크롤이 지금 스크롤보다 크다면 (페이지를 위로 올리는 행위라면)
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    // 만약 방금의 스크롤이 지금 스크롤보다 작다면 (페이지를 아래로 내리는 행위라면)
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  
  // Sticky nav
  // 현재 창에서 스크롤을 얼마나 내렸는지 비교해서 navbar 에 sticky 를 설정하거나 remove 하거나 합니다
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}