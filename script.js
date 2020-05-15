// 材料用意した
var submit = document.getElementById("submit");
var input_text = document.getElementById("input_text");
var input_name = document.getElementById("input_name");
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

//文字の出力位置を指定する
target = document.getElementById("output");

// inputフォームの入力された値を取得
var inputDetail_name = input_name.value;
var inputDetail_text = input_text.value;


// textareaでテキストが空の場合のアラート処理
  if(inputDetail_text === ""){
    alert("入力してください"); 
    return false; 
  }
// textareaでテキストが140文字越えたアラート処理
// var txt_limit = 140;//最大文字数
// var check_limit = inputDetail.length; 
//   if(check_limit > txt_limit){
//     alert('入力文字数が '+txt_limit+'文字を越えました');
//     return false; 
// }

  // 必要なタグを生成する・li・p・p
  var item = document.createElement('li');
  var current_time = document.createElement('p');
  var output_name = document.createElement('p');
  var output_text = document.createElement('p');
  // var index = document.createElement('span');
  // var myMess = document.createElement('span');


  // 作ったliタグをulの子要素として出力
  list.appendChild(item);

  // 作ったliタグをulの子要素として出力
  // item.appendChild(color_name);
  item.appendChild(current_time);
  item.appendChild(output_text);

  // color_name.innerHTML = inputDetail_name;
// current_timeに対してindex・myMessを入れ込む
// output_nameに対してinputDetailを入れ込む
// output_textに対してinputDetailを入れ込む

output_name.innerHTML = inputDetail_name;

var name = output_name.innerHTML;

  current_time.innerHTML = index + "."  + "名前：" + name +" "+ myMess;
  // color_name.innerHTML = inputDetail_name;
  output_text.innerHTML = inputDetail_text;
  
  // 連番を作る
  index++;

  // 入力後にテキストエリア内の文字をリセットさせる
  document.sample_form.input_text.value = "";
  document.samples_form.input_name.value = "";
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
