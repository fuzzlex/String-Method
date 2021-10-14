// var str1  = "Hello";
// var str2 = "Hello word\f"
// var str3 = new String("Hello wowr")

// console.log(str1);
// console.log(str2.length)
// console.log(typeof str3) //--Object

// var complate = str1.concat(str2);
// console.log(complate);


//charAt()

// var a = "ey edip\n adanada pide ye"

// console.log(a);
// console.log(a.charAt()); // ilk eleman getirdi.
// console.log(a.charAt(a.length - 1)) //son elamno getirir.
// console.log(a.charAt(9))
// console.log(a.charAt(7))


// var str = "Lorem ipsum is simply dummy text of the printing and typesetting"
// var n = str.includes("simply");
// var n1 = str.includes("sf")

// console.log(n);
// console.log(n1)

// var str = "Lorem ipsum is simply dummy text of the printing and typesetting"
// var n = str.indexOf("simply");
// console.log(n);


//text içinde tüm aranan karakterlerin (kaç tane varsa çıkarsın)

// var str = "Lorem ipsum is simply dummy text of the printing and typesetting"
// var n = str.indexOf(/simply/i);

// regular epression ===> /fsf/g i... bakılacak



// var str = "Lorem ipsum is simply dummy text of the printing and typesetting"
// var n = str.replace("simply", "");
// console.log(n);

// var str = "Lorem ipsum is simply dummy text of the printing and typesetting"
// var n = str.search("simply");
// console.log(n)

// var str = "Lorem ipsum is simply dummy text of the printing and typesetting"
// var n = str.slice(0,5);
// console.log(n)

//Termometre çevirme programı
// 1.fonk c>f f>c
// 2 c>f
// 3.fonk f>c


// let count = 0;
// const setLetter = new Set();
// function counter(Text) {
//     let str1 = Text.toLowerCase().split(" ")
//     for(i of str1){
//         count = 0;
//         if (i == " ") continue;
//         for(j of str1){
//             if(i === j) count++;    
//     }setLetter.add(`${i}:${count}`) 
//     }
// }
// counter("emr kaya bir gün")
// console.log(setLetter);

// ----split-----

// var s = "lorem ipsum stra is simply vs vs"
// console.log(s.split(""));

//----substr---
// var s = "lerem ipsum dolar is smpley"
// console.log(s.substr(19,2))
// ----'dan başla şu kadar al'


//-----substring()------
// var s = "lorem ipsum stra is simply vs vs"
// console.log(s.substring(1,-1))  
// // --den başla şuna kadar al

//--uppercase ---lowercase

//---trim---
// var s = "         lorem ipsum stra is simply vs vs"
// console.log(s.trimLeft)