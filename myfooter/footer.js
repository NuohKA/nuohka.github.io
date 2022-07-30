

class MyFooter extends HTMLElement {
    constructor() {
      super();
  
      var filepath=location.href;
      var paths=filepath.split('/');
     var nuohka=paths.indexOf('nuohka.github.io');

      var newpaths=paths.slice(nuohka,paths.length);
      var kaisou=newpaths.length;
      var modori="./";
      for (let i = 2; i < kaisou; i++){
        modori=modori+"../";
      }

      // シャドウルートを生成
      var shadow = this.attachShadow({mode: 'open'});

      var script1=document.createElement('link');
      script1.href=modori+"myfooter/style.css";
      script1.rel="stylesheet";

      var footer=document.createElement('div');
      footer.className="footer";

      var Rs=document.createElement('p');
      Rs.className="copyright"
      Rs.textContent="Apple、Appleロゴ、は米国および他の国々で登録されたApple Inc.の商標です。App Storeは、Apple Inc.のサービスマークです。Google 、Android、Google Playは、Google Inc.の商標です。";
      var pp=document.createElement('div');
      pp.className="copyright";
      pp.textContent="このサイトは個人情報を収集しません。";
      var ghp=document.createElement('a');
      ghp.style.color="#797979";
      ghp.textContent="Github プライバシーポリシー";
      ghp.href="https://docs.github.com/ja/site-policy/privacy-policies/github-privacy-statement";
      var ghpdiv=document.createElement('div');
      ghpdiv.className="copyright";
      var copyright=document.createElement('div');
      copyright.className="myr";
      copyright.textContent="© 2022 NuohKA";
      
      footer.appendChild(pp);
      ghpdiv.appendChild(ghp);
      footer.appendChild(ghpdiv);
      footer.appendChild(Rs);
      footer.appendChild(copyright);
      shadow.appendChild(script1);
      shadow.appendChild(footer);

      
    }
  }
  
  // 新しい要素を定義
  customElements.define('my-footer', MyFooter);