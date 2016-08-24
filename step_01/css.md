# css 기본이해하기
>css란 html문서의 구조형태를 디자인으로 변화시키는것(꾸며주는것)

1. 선택자
 -type 선택자 : 'p{}', 'div{}'
 -id 선택자 : '#box{}', #test'
 -class 선택자 : '.box{}' , '.test{}'
 -자손 선택자 : 'div p{}' , '.container ul a{}'
 -자식 선택자 : 'div>ul>li{}' , '.container>ul>lia{}'
 -속성 선택자 : 'a[href="#"]{}' , 'a[taget="_blank'] , 'a[herf^="http"]{}'
 -연결/인접 선택자('+') : 직접적인 요소를 선택하기보다 선택된 요소의 바로뒤(형제)요소를 선택하는 기능
  '''html
  <style>
  h1:hover + nav{}
  dd{display:none;}
  dt:hover + dd{display:block;}
  h1:active ~ dl{display:none;}
  </style>
  <body>
     <h1>logo</h1>
     <nav>
         <p>h1에 마우스를 올리면 nav에서 반응을 일으킨다</p>
     </nav> 
     <dl>
        <dt>제목</dt>
        <dd>내용</dd>        
        <dt>제목</dt>
        <dd>내용</dd>        
        <dt>제목</dt>
        <dd>내용</dd>
     </dl>
  </body>
  '''
 -형제 선택자(~) : 인접 선택자와 유사하지만 바로 뒤에오는 요소가 아니라 형제는 누구나 선택할 수 있는 기능
 -가상 선택자 : 기존 요소에 추가로 어떠한 기능을 하는것들
  + :hover{} :'a:hover{}' a 요소에 마우스를 올렸을때
  + :active{} :'a:active{}' a요소에 마우스를 누르고 있을때
  + :linked{} : 'a:linked{}' a 요소에 링크가 되었을때
  + :visited{} :'a:visited{}' 해당하는 것을 방문했을때 (챈:다녀온 페이지가 보라색으로 바뀐거)
  + :before{} : 'a:before{}' a요소의 이전에 해당하는 부분(실제 존재하는 요소가 아니고, 시각적효과)
  + :after{} : 'a:after{}' a요소의 이후에 해당하는 부분(실제 존재하는 요소가 아니고, 시각적 효과 )
  + :focus{} : 'a:fouse{}' focus가 가능한 요소중(a, button,input... 챈:클릭시 키보드 깜빡깜빡하는 부분)
  + :blur{} : 'a:blur{}' focus가 가능한 요소 중, focus처리가 되어 있지 않는 것
  + :checked{} : 'input:checked{}' input 요소중 type속성이 radio, checkbox 처럼 선택을 할수 있는 것들중 선택했다면 처리되는 기능
                (챈:개인정보 이용약관 동의하는 체크박스)
                
2. 공간의 이해
 - margin : 자신의 주변의 공간을 주는것
 - padding : 자신이 커지는것(커지는 크기에는 어떠한 요소를 담을 수 없다.)
 - border : 외곽선을 주는것(부피ㅇ, 크기ㅇ)
 - outline : 외곽선을 주는것(크기만 존재, 부분을 바꿀 수 없다. -접근성 사용시 포커스처리될때 사용)
 
3. RGBA, webRGB, HSLA
 - RGB : red, green, blue 컬러를 이용한 빛의 3원색(3색이 모두 모이면, 흰색)
   + rgb: 0~255(256단계) 0은 색이 없다, 255는 색이 꽉 찼다.    
   + rgba: red, green, blue, alpha(투명도 0 ~ 1)
   + rgba(red, green, blue, alpha)
 - webRGB: #으로 시작해서 총 6자리의 숫자로 표기(압축시에는 3자리로 표현 가능)
   + 숫자: 0~9, a~f f=16
   + 기본 2자리씩 끊어서 사용: #ff(red)ff(green)ff(blue)
   + f(16)f(16) = ff(256)
   + #000(#000000), #00ff33(#0f4), #fff677(3자리 변경 불가)
   + #000(검정), #fff(흰색), #aaa(회색), #777(회색), #555(회색)
   + 빨간색, 붉으스름한색, 벌건색, 밝가므리한색
   + #faa(밝은 빨강), #afc(녹색이 들어있는 밝은색)
 - HSLA: hue(색상), saturation(채도), light(명도), alpha(투명도)
   + 먼셀 색입체
   + hue(360deg)를 표현: 360 = 0, 0(빨강), 360(빨강)
   + saturation(0~100%): 0%(무채색), 100%(유채색, 순색) 
   + light(0~100%): 0%(검정), 100%(흰색)
   + hsla(hue, saturation, light, alpha) => hsla(30, 50%, 50%, 1)
   + 색상 읽는 순서 : a-l-s-h 순으로 읽는다
     - a : 1 투명도 머저
     - l : 밝기 0: 검정, 100%:흰색 50%(순색)
     - s : 채도 100: 순수한색
     - h
     
 4. float기능 이해     
   - float:left | right;
   - clear
   
 5. display 기능(<display_vbisible.html>참조)
   - display:block| inline | inline-block | none
    + block : 요소를 블럭화 처리(사이즈ㅇ,줄바꿈처리되는)
    + inline : 요소를 인라인화 처리(사이즈x, 옆으로 나열)
    + inline-block : inline + block (사이즈를 가지며, 옆으로 나열)
    + none : 시각적으로 완전하게 사라지는 현상 (스크린 리더기에서도 말해주지 않는다.)
    
 6. visibility 기능(<display_vbisible.html>참조)
   - visibility: hidden | viskble
    + hidden : display:none; 과 같은 기능, 존재하던 자리의 크기는 남아있다.
    
 7. font 설명
   - 속성값중에 inherif 기능은 부모태그가 어떠한 기능을 했다면 그 속성을 이어받다 라는 뜻(css에는 모두 사용) 
   - color : 글씨 색상
   - font-size: 글씨 크기
   - font-weight: 굵기 thin | light | normal | bold | bolder | 100~900 => 
      +400=normal, 600=bold
      +모든 폰트에서 굵기를 다 가지는 것이 아니다.
   - fo nt-style: 기울기 italic | normal (italic만 생각하면 됨 )
   - line-height: 줄간격 한줄일경우에는 해당하는 요소의 세로가운데 위치하기위해서 사용하기도 한다.(박스의 크기를 입력하면 가운데 배치)
   - text-indent: 들여쓰기 +값으로 사용하면 오른쪽으로, -값으로 사용하면 왼쪽으로 들여쓰기, 첫줄 들여쓰기 기능(ir기법에도 쓰기도한다.)
   - letter-spacing: 자간(글자와 글자사이)
   - word-spacing: 어간(단어와 단어사이)
   - text-align:  좌우 정렬 left | right | center | justfy (justify는 2줄 이상일경우 가능)
   - font-family: 
     + 서체 띄어쓰기가 있는 서체는 ""로 감싼다("myriad pro")
     + 한글명의 서체도 ""로 감싸는 것이 좋다(단, 영문명으로 사용하는 것이 더 좋다.)
     + 하나의 서체만 쓰는것이 아니라 해당서체가 다른컴퓨터에 없을 가능성이 높으면, 다른 대체 폰트를 겸해서 사용("myriad pro,arial)
     + 한글이나 별도의 외국어(영어제외) 폰트가 있다면, 영문폰트를 먼저 작성
     ("myriad pro", arial,NanumGothic, dotum, sans-serif)
     + sans-serif: 어떠한 폰트도 존재하지 않는다면, 최종적으로 해당하는 서체형태를 기입( serif(명조), sans-serif(고딕))
   - text-transform : uppcase | lowercase | capitalize
   - text-overflow:clip | ellipsise 부모태크에서 hidden 처리될 경우 말줄임표   
  8. table 기능
   - border-spacing: 선과 선 사이의 간격(table의 경우 tr,td,th 등 ㅇ서로간의 간격이 떨어져 있기 때문에 둘을 붙이는 역할, 값은 0)
   - border-collapse: 선과 선 사이를 완전하게 붙이는 역할(값 collapes) 
   
  9. position 기능
   - position: static | fixed | relative | absolute
     +static: 기본상태
     +fixed: 브라우저 화면에 고정(챈: 스크롤해도 가만히있는 배너들...)
     +relative: 엄마(absolute의 기준/단, fixed or absolute도 기준이 될 수 있다.)(챈:위치가 되는 박스)
     +absolute: relative를 기준으로 위치를 이동하고 설정하는 형태(챈:박스안에 변하지않는 번호, 베스트상품 123)
   - top, right, bottom, left: 일종의 margin과 같이 공간을 만드는 기능, margin은 공간을 주는것. 
                              Top,right...떨어지는것.(position만 사용이 가능(staic제외))
   - z-index: 앞과 뒤의 위치 배치하기(기준이 되는 형태에 z-index를 주면, 해당요소가 기준
   ![img/position_base-01.jpg]