class MyHeader extends HTMLElement{
  constructor(){
    super();
    var filepath=location.href;
    var paths=filepath.split('/');
    var nuohka=paths.indexOf('nuohka.github.io');

    var newpaths=paths.slice(nuohka,paths.length);
    console.log(newpaths);
    var kaisou=newpaths.length;
    console.log(kaisou);
    var modori="./";
    for (let i = 2; i < kaisou; i++){
        console.log('jkfjkjk');
        modori=modori+"../";
    }
    console.log(modori);


    var shadow=this.attachShadow({mode:'open'});

    var myheader=document.createElement('header');
    myheader.className="myheader";

    var script1=document.createElement('link');

    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.indexOf("android") !== -1||ua.indexOf("iphone")!==-1 || ua.indexOf("ipad") !== -1){
      script1.href=modori+"myheader/hdrsmpl_m.css";
    }else{
      script1.href=modori+"myheader/hdrsmpl.css";
    }

    
    script1.rel="stylesheet";
    shadow.appendChild(script1);

    var myheader__logo=document.createElement('a');
    myheader__logo.textContent="NuohKA";
    myheader__logo.href=modori+"index.html";
    myheader__logo.className="myheader__logo";

    var myheader__button=document.createElement('button');
    myheader__button.className="myheader__button";

    var myheade__button__div1=document.createElement('div');
    myheade__button__div1.className="myheader__button__div1";
    var myheader__button__div2=document.createElement('div');
    myheader__button__div2.className="myheader__button__div2";
    var myheader__button__div3=document.createElement('div');
    myheader__button__div3.className="myheader__button__div3";
    var myheader__button__batsu=document.createElement('h2');
    myheader__button__batsu.className="myheader__button__batsu";

    myheader__button.appendChild(myheade__button__div1);
    myheader__button.appendChild(myheader__button__div2);
    myheader__button.appendChild(myheader__button__div3);
    myheader__button.appendChild(myheader__button__batsu);
    
    var myheader__wrapper=document.createElement('div');
    myheader__wrapper.className="myheader__wrapper";

    var myheader__wrapper__item1=document.createElement('div');
    myheader__wrapper__item1.className="myheader__wrapper__item";
    var myheader__wrapper__item2=document.createElement('div');
    myheader__wrapper__item2.className="myheader__wrapper__item";

    var myheader__wrapper__item1__a=document.createElement('a');
    myheader__wrapper__item1__a.textContent="Google Play アプリ一覧ページ";
    myheader__wrapper__item1__a.href="https://play.google.com/store/apps/dev?id=5977604081010591889";
    myheader__wrapper__item1.appendChild(myheader__wrapper__item1__a);
    myheader__wrapper.appendChild(myheader__wrapper__item1);

    var myheader__wrapper__item2__a=document.createElement('a');
    myheader__wrapper__item2__a.textContent="App Store アプリ一覧ページ";
    myheader__wrapper__item2.appendChild(myheader__wrapper__item2__a);
    myheader__wrapper.appendChild(myheader__wrapper__item2);

    
    
    
   
    
   
    
    myheader__button.appendChild(myheade__button__div1);
    myheader__button.appendChild(myheader__button__div2);
    myheader__button.appendChild(myheader__button__div3);
    myheader__button.appendChild(myheader__button__batsu);
    
    myheader.appendChild(myheader__logo);
    myheader.appendChild(myheader__button);
    myheader.appendChild(myheader__wrapper);

    shadow.appendChild(myheader);
    
    var isopened=false;

    myheader__button.addEventListener("click", function () {
      if (isopened) {
        myheade__button__div1.style.display="inline-block";
        myheader__button__div2.style.display="inline-block";
        myheader__button__div3.style.display="inline-block";
        myheader__button__batsu.style.display="none";
        
        myheader__wrapper.classList.remove("show");
        myheader__wrapper__item1.classList.remove('show');
        myheader__wrapper__item2.classList.remove('show');
        isopened=false;
      } else {
          myheader__wrapper.classList.add("show");
          myheader__wrapper__item1.classList.add("show");
          myheader__wrapper__item2.classList.add("show");
          myheade__button__div1.style.display="none";
        myheader__button__div2.style.display="none";
        myheader__button__div3.style.display="none";
        myheader__button__batsu.style.display="inline-block";
        myheader__button__batsu.textContent="×";
        isopened=true;
      }
    });
  }


}
customElements.define('my-header', MyHeader);
 

/**
 * 
 * myheader
 *   myheader__logo
 *   myheader__navigation
 *     myheader__button
 *       myheader__button__div1
 *       myheader__button__div2
 *       myheader__button__div3
 *       myheader__button__batsu
 *     myheader__wrapper__item
 *       a
 *     myheader__wrapper__item
 *       a
 * 
 */