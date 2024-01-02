  // btnというidを持つHTML要素を取得し、定数に代入する
  const btn = document.getElementById('btn');
 
  // textというidを持つHTML要素を取得し、定数に代入する 
  const text = document.getElementById('text');
  
  // ボタンをクリック後テキストの内容が変更
  btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
  });

  
  