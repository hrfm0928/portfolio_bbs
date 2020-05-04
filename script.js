// 材料用意した
var submit = document.getElementById("submit");
var input_text = document.getElementById("input_text");
var list = document.getElementById("list");
var index = 1;

function addElement() {

// myMess = 日付・時間・曜日など
myTbl     = new Array("(日)","(月)","(火)","(水)","(木)","(金)","(土)");
myD       = new Date();
myYear    = myD.getFullYear();
myMonth   = myD.getMonth() + 1;
myDate    = myD.getDate();
myDay     = myD.getDay();
myHours   = myD.getHours();
myMinutes = myD.getMinutes();
mySeconds = myD.getSeconds();
myMess1   = myYear + "年" + myMonth + "月" + myDate + "日";
myMess2   = myTbl[myDay] ;
myMess3   = myHours + "時" + myMinutes + "分" + mySeconds + "秒";

myMess    = myMess1 + " " + myMess2 + " " + myMess3;

// textareaでテキストが空の場合のアラート処理
  if(input_text.value === ""){
    alert("入力してください"); 
    return false; 
}

  // inputフォームの入力された値を取得
  var inputDetail = input_text.value;
  console.log(inputDetail);

  // 必要なタグを生成する・li・p・p
  var item = document.createElement('li');
  var current_time = document.createElement('p');
  var output_text = document.createElement('p');

  console.log(item);
  console.log(current_time);
  console.log(output_text);

  // 作ったliタグをulの子要素として出力
  list.appendChild(item);

  // 作ったliタグをulの子要素として出力
  item.appendChild(current_time);
  item.appendChild(output_text);


  // current_timeに対してindex・myMessを入れ込む
  current_time.innerHTML = (index + ". " + myMess);
  // output_textに対してinputDetailを入れ込む
  output_text.innerHTML = (inputDetail);
  // 連番を作る
  index++;
}

// ulの中(子要素)としてliタグを作ってinputの値を出力する
// 関数(メソッド,function) とは何らかの処理を行うもの
// > ボタンを押した処理



// ボタンを押せば 対象のbuttonを取得
// inputに入力した値が 対象のinput の値を取得
// 出力される  どこに？ > ul内に取得

// ボタン押下の処理は出来たから
// ・inputの値を取得
// ・その値をul内に出力する
