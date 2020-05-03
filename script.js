// 材料用意した
var submit = document.getElementById("submit");
var input_text = document.getElementById("input_text");
var list = document.getElementById("list");
var index = 1;

// var today = new Date();
// console.log(today);


function addElement() {
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

  // inputフォームの入力された値を取得
  var inputDetail = input_text.value;
  console.log(inputDetail);

  // liタグを作る
  var li = document.createElement('li');
  console.log(li);

  var li2 = document.createElement('li');
  console.log(li2);


  // 作ったliタグをulの子要素として出力
  list.appendChild(li);
  list.appendChild(li2);
  // liに対してinputDetailを入れ込む
  // li.innerHTML = "Penguin";
  li.innerHTML = (inputDetail);
  li2.innerHTML = (index + "." + myMess);

  // li.innerHTML = (index + "." + myMess + inputDetail);

  // 連番を作る
  // 連番をli.innerHTMLの先頭にぶっこむ
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
