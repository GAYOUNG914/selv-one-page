$(function(){
  const addTop = 150;
  //script 입력영역
  $("nav ul li a,.back_to_top a,a.button,.footer_top a").click(function(){
    console.log($(this.hash))
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    console.log(offsetElem.top)
    $("html,body").stop();
    $("html,body").animate({scrollTop : offsetElem.top},1500);
  });

  //scroll 시 하단 이동버튼 노출/비노출
  $(window).scroll(function(){
    // console.log($(this).scrollTop())
    if( $(this).scrollTop() == 0 ){
      $(".back_to_top").removeClass("on");
    }else{
      $(".back_to_top").addClass("on");
    }
  });

  //section offset top 값으로 class 추가
  let wHeight = $(window).innerHeight();
  console.log("window height: "+wHeight)
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();
    $("section").each(function(){
      let thisOffset = $(this).offset();
      if( thisOffset.top <= thisScrollTop + addTop && thisScrollTop < thisOffset.top + wHeight ){
        $(this).addClass("active");
      }
    });
  });;

  const a = document.querySelectorAll("#gnb ul li a");

  const headerHeight = header.getBoundingClientRect().height;
   

  window.addEventListener("scroll", () => {
        if (window.scrollY > headerHeight && window.innerWidth >= 767 ) {
            let i;
            for( i = 0 ; i < 7 ; i++){
            a[i].setAttribute("style", "color: #444;");
            }
        // a.setAttribute("style", "color: #444;");
     } else {
        
  // a.setAttribute("style", "color: #fff;");
   let i;
  for( i = 0 ; i < 7 ; i++){
    a[i].setAttribute("style", "color: #fff;");
    }
     }
     console.log( "<p>screen.width : " + window.innerWidth + "</p>" );
  });

  });