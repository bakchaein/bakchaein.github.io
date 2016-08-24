##반응형웹 기초
디바이스 크기에 따라 달라지는 표현
- html

```html
<meta name="viewport" >


- css

```css
@media screen and (max-width:480px){}
@media screen and (min-width:481px) and (max-width:640px){}
@media screen and (min-width:641px) and (max-width:768px){}
@media screen and (min-width:769px) and (max-width:1024px){}
@media screen and (min-width:1025px) and (max-width:1280px){}
@media screen and (max-width:1281px){}
```

->

```css
@media screen and (max-width:640px){}
@media screen and (min-width:641px) and (max-width:1024px){}
@media screen and (max-width:1025px){}
```

mobile-v ~480px
mobile-h ~640px
mobile-v ~768px
mobile-h ~1024px
pc ~1280px~
pcAll ~1920px~

##css => sass/scss

>sass/scss(이하 sass)는 단순히 브라우저에서 바로 사용할 수 없다!!
compile(css로 변환)해야함!!

1단계:
	- prepros.io
	- compass-style.org

2단계:
	- cli를 활용!!! 직접 명령어로 사용!!
	- sass --watch -E UTF-8 scss:css
3단계:
	- gulp
	- grunt
___
sass사용시 설정하는 폴더
	-sass 폴더
	-css 폴더
___
<!-- prepros.io 사이트 download trial - window 설치하고 세번째(무료) 클릭 +project 폴더 찾아서 드래그
 서브라임에서  tools - command palette - ip - scss 설치 
 서브라임에 sass파일 만들고 저장하면 css파일도 자동 생김. 그리고 저장할때마다 자동 css도 변환 저장됨.
 자동 저장이 안될때는 prepros에서 프로젝트  우클릭  refresh -> 파일 클릭 오른쪽 process file 클릭 
 process file 위에 compresessd compact nested는 css파일 형식선택
 만약 css파일에서 수정하면 scss파일은 버려야함
 파일명 앞에 _처리하면 변환이 안된다 암묵적으로  -->

