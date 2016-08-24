  $(function(){
    $('#products').slidesjs({
      width:780,height:358
    });
    var flag=true;
    $('#header_list').click(function(){
      if(flag==true){
        $('.gnb-m').slideDown();
        flag=false;
      }
      else{
        $('.gnb-m').slideUp();
        flag=true;
      }
    });
    
    $(window).resize(function(){
     if( $(window).width()>768){
       $('.gnb-m').hide();
     }
    });
    
  })