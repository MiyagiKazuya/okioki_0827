// // ツイートボタン
// function twitText() {
// 	var s, url;
// 	s = "JSでツイートしてみる！ %23SUNABACO %23すなぷろ14th";
// 	url = document.location.href;
	
// 	if (s != "") {
// 		if (s.length > 140) {
// 			//文字数制限
// 			alert("テキストが140字を超えています");
// 		} else {
// 			//投稿画面を開く
// 			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
// 			window.open(url,"_blank","width=600,height=300");
// 		}
// 	}
// }

// // ここまでツイートボタン




// console.log("SUNABACO KAZA".split("A"));

// console.log(100%44);

// console.log("1977-03-18");

// var fruit = "リンゴ";

// console.log(fruit);

// fruit = "ばなな";

// console.log(fruit);


// // フルーツジュースを作るよ
// console.log(fruit+"の皮をむいて");
// console.log(fruit+"をざく切りにして");
// console.log(fruit+"をミキサーにかけて");
// console.log(fruit+"ジュースの出来上がり～！");

// fruit = "おれんじ";

// console.log(fruit+"の皮をむいて");
// console.log(fruit+"をざく切りにして");
// console.log(fruit+"をミキサーにかけて");
// console.log(fruit+"ジュースの出来上がり～！");

// fruitJuice("もも",1);
// fruitJuice("イチジク",2);
// fruitJuice("イチゴ",3);

// function fruitJuice(fruit,count) {
//     console.log(fruit+count+"の皮をむいて");
//     console.log(fruit+count+"をざく切りにして");
//     console.log(fruit+count+"をミキサーにかけて");
//     console.log(fruit+count+"ジュースの出来上がり～！");
    
// }

// var students = ["けいこさん","ゆっこさん","宮城さん"];
// console.log(students[0]);
// console.log(students);

// // オブジェクト連想配列
// var teacher = {"hiru":"suzuka","yoru":"aki"};
// console.log(teacher["yoru"]);
// console.log(teacher["hiru"]);



// // 戻り値 return
// // 新しくtotalという名前の関数を作ってみましょう
// // total関数では、２つの数字を引数として受け取れるようにしてください。
// // 引数名は(aとb)
// // 関数の中で
// // ２つの数字を足算する

// function total(a,b){
//     var ab=a+b;
//     return ab
// }

// console.log(total(1,3));

// var a = 1;
// var b = 2;
// console.log(a<b);


// var menkyo = 0;
// var money = 1000;
// if (menkyo == 1){
//     console.log("車の運転していいよ");
// }else if(money>550){
//     console.log("バスでかえってね");
// }else{
//     console.log("歩いて帰ってね");
// }


// // 練習問題
// var time = 10;
// var getup = 8;
// if(time<getup){
//     console.log("遅刻です");
// }else if(time==getup){
//     console.log("ギリギリセーフ！");
// }else{
//     console.log("よくがんばりました");
// }

// // for (var i=1; i<=10 ; i++){
// // console.log("リンゴジュース"+i+"杯目");
// // }

// // for (var i=100; i>=1 ; i--){
// //     console.log(i+"回目");
// //     }
    

// // 
// var btn_node = document.getElementById("btn");
// var i = 0;
// btn_node.addEventListener("click",changeText);

// // addEventListener("どんな時",どんな関数);

// function changeText() {
//     i++;
//     console.log(i+"回目クリック");
//     var text_h1 = document.getElementById("text");
//     text_h1.textContent = i+"回変更したな";
// }












// ここからはjQueryの講義

$(function(){ //jQueryのお約束
    // $("#text").text("変更したよ");

    $("#btn").on("click",function(){
    //     $("#text").text("変更したよ");
        // $("header").css("color","#fff");
        // $("#gallery img").attr("src","./img/joe-caione-qO-PIF84Vxg-unsplash.jpg");
        // $("a").attr("href","http://yahoo.co.jp/");
        // $("header").toggle(); // トグルスイッチ
        // $("body").addClass("red");
        $("body").toggleClass("blue");



    })





}) //jQueryのお約束

// $("どこを（セレクター）").on("どうしたら（イベント）",function(){
    // どうする
    //     $("#text").text("変更したよ");
    // })
