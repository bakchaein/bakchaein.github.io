$(function(){
  $('.one-depth>a').on('mouseover',function(){
    $(this).parent().addClass('on').siblings().removeClass('on');
    $('.one-depth ul').hide(); //ul은 안보이게
    $(this).next().show(); //next는 보이게 
  }).parent().on('mouseleave',function(){
     $(this).find('ul').hide();
     $(this).removeClass('on');
  })
	});
	
//$(function(){
//  $('.one-depth>a').mouseover(function(){
//    var n=$('.one-depth>a').index($(this));
//    $('.one-depth ul').hide();/* 다른메뉴 선택시 빼기*/
//    $('.one-depth').eq(n).find('ul').show();/* 마우스 오버하는 순간 보여주는 인덱스를 찾아서 보여준다*/
//		  $(this).parent().addClass('on').siblings().removeClass('on')/*마우스 올리고 서브메뉴이동시 색상 계속 유지하기*/
//  })
//  $('.one-depth').mouseleave(function(){/*원데스에서 나갔을때*/
//   $(this).find('ul').hide();/* 디스인 원데스의 ul 안보이게 하기*/
//	 $(this).removeClass('on');/*마우스리브할때 색상 빼기*/
//  })
//});
