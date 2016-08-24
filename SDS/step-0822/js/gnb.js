$(function(){
  /* $('.one-depth>a').click(function(){ */
  $('.one-depth>a').on('click',function(e){
    e.preventDefault(); /*링크 무력화 a태그는 어디론가 이동하는 거니깐*/ 
		$('.one-depth>ul:visible').slideUp().parent().removeClass('on'); /* 다른메뉴 클릭시 기존메뉴 업, :visible 같은메뉴 재클릭시 서브메뉴 업, .parent().removeClass('on') 같은메뉴 재클릭시 on효과 빼기 */
		$(this).next(':hidden').slideDown().parent().addClass('on').siblings().removeClass('on'); /*  메뉴 클릭시 서브메뉴 다운, this 클릭되는 자기자신(.one-depth>a), :hidden 다른메뉴 클릭시 클릭한 다른메뉴의 서브메뉴 다운, .parent().addClass('on') 부모메뉴에게 on 효과주기 , .siblings().removeClass('on') 기존메뉴 on효과 그리고 다른메뉴 클릭시 기존메뉴 on효과 빼기, .siblings() 형제 다른메뉴들*/
  });
	/* ↑이 구조는 메뉴만드는공식과 같은 구조니깐 꼭 기억하기*/
	
	
	$('.one-depth>a').on('focus',function(){
    $(this).click(); 
	})/* 웹전근성에 맞는 홈페이지 만들기. 탭키로 이동하기 (e) 이벤트를 안주는것은 이미 click에 이벤트를 줬기때문 */
	
});


// json으로 바꾸기(on이라는 공통요소로)
//$(function(){
//  $('.one-depth>a').on({
//    click:function(e){
//      e.preventDefault();
//      $('.one-depth>ul:visible').slideUp().parent().removeClass('on'); $(this).next(':hidden').slideDown().parent().addClass('on').siblings().removeClass('on');
//    },
//    focus:function(){
//      $(this).click();
//    }
//  })

