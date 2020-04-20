'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(
  `<!DOCTYPE html>
  <html lang="ja">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>あなたのいいところ診断</title>
      <style>body {
        background-color: #04A6EB;
        color: #FDFFFF;
        width: 500px;
        margin-right: auto;
        margin-left : auto;
      }
      button {
        padding: 5px 20px;
        background-color: #337AB7;
        color: #FDFFFF;
        border-color: #2E6DA4;
        border-style: none;
      }
      input {
        height: 20px;
      }
      </style>
  </head>
  <body>
      <h1>あなたのいいところ診断します。</h1>
      <p>診断したい名前を入れてください</p>
      <input type="text" id="user-Name" size="40" maxlength="20">
      <button id="assessment">診断する</button>
      <div id="result-area"></div>
      <div id="tweet-area">
         
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
      <script>
      const userNameInput=document.getElementById('user-Name');
      const assessmentButton=document.getElementById('assessment');
      const resultDivided=document.getElementById('result-area');
      const tweetDivided=document.getElementById('tweet-area');
      
      /**
       * 指定したHTML要素の子要素を全て削除する
       * @param{HTMLElement}element HTMLの要素
       */
      function removeAllChildren(element){
          while(element.firstChild){
              element.removeChild(element.firstChild);
          
          }
      }
      
      assessmentButton.onclick=()=>{
          const userName = userNameInput.value;
          if(userName.length===0){
          return;
          }
      
          removeAllChildren(resultDivided);
      
          //診断結果表示エリアの作成
          const header = document.createElement('h3');
          header.innerText = '診断結果';
          resultDivided.appendChild(header);
      
          const result = assessment(userName);
      
          const paragraph = document.createElement('p');
          paragraph.innerText = result;
          resultDivided.appendChild(paragraph);
      
       removeAllChildren(tweetDivided);
       const anchor = document.createElement('a');
       const hrefvalue = 'https://twitter.com/intent/tweet?button_hashtag='
        + encodeURIComponent('あなたのいいところ')
        +'&ref_src=twsrc%5Etfw';
       
       anchor.setAttribute('href',hrefvalue);
       anchor.className = 'twitter-hashtag-button';
       anchor.setAttribute('data-text',result);
       anchor.innerText = 'Tweet #あなたのいいところ';
      
       tweetDivided.appendChild(anchor);
       twttr.widgets.load();
      }
      　userNameInput.onkeydown=(event)=>{
          if(event.key==='Enter'){
              assessmentButton.onclick();
          }
      };
      
      
      
      const answers = [
          '{userName}のいいところは声です。声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
          '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
          '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
          '{userName}のいいところは厳しさです。厳しさです。{userName}の厳しさが物事をいつも成功に導きます。',
          '{userName}のいいところは知識です。知識です。{userName}を多くの人が頼りにしています。',
          '{userName}のいいところはユニークさです。{userName}だけのその特徴がみんなを楽しくさせます。',
          '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
          '{userName}のいいところは見た目です。{userName}の良さに皆が気を惹かれます。',
          '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
          '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
          '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかり合うことができます。',
          '{userName}のいいところは節度です。{userName}の考えに皆が感謝しています。',
          '{userName}のいいところは好奇心です。{userName}の心構えが多くの人に魅力的に映ります。',
          '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
          '{userName}のいいところはその全てです。{userName}自身がいいところなのです。',
          '{userName}のいいところは自制心です。{userName}は皆から評価されています。',
           '{userName}のいいところは優しさです。あなたの優しい雰囲気や立ち振る舞いに多くの人が癒やされています。'
      ];
      
      /**
       * 名前の文字列を渡すと診断結果を返す
       * @param　{string} userName ユーザーの名前
       * @return {string} 診断結果
       */
      
       function assessment(userName){
           let sumOfCharCode=0;
           for(let i =0;i <userName.length;i++){
            sumOfCharCode=sumOfCharCode+userName.charCodeAt(i);
           }
           const index = sumOfCharCode%answers.length;
           let result = answers[index];
           result = result.replace(/\{userName\}/g,userName);
          return result;
       }
      
       console.assert(
           assessment('太郎')===assessment('太郎'),
           '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
       );
      </script>
  </body>
  </html>
  `
  );
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
