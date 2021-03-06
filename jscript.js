"use strict"
//*** ПРОВЕРКА СОВЕРШЕННОЛЕТИЯ, alert, prompt, confirm, ветвление***
// let n1=confirm("Are you over 18")
// if (n1 == false) {
//     alert("Come back later")
// }
// else {
//     let age = prompt("How old are you?", 100)
//     alert(`You're ${age} years old`)
// }

// *** СИЛА ПЕРСОНАЖА,ПРЕОБРАЗОВАНИЕ СТРОКИ В ЧИСЛО ***
// let strenghth=+prompt(`Укажите силу`,25);
// let dextirity=+prompt("Укажите ловкость",25);
// let intellect=+prompt("Укажите интеллект",25);
// let withdom=+prompt("Укажите мудрость",25);
// alert(`Полная сила персонажа ${strenghth+dextirity+intellect+withdom}`)

// *** ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ ***
// let value=prompt("Write any nomber",10);
//  let valueNum=+value;
//  let valueStr=String(valueNum);
//  console.log (typeof value);
//  console.log (typeof valueNum);
//  console.log(typeof value)
// let value = true;
// let valueNum = +value;
// console.log (typeof valueNum + valueNum);
// let a=`1`;
// let b=`2`;
// let c=+a + (b=+a+10);
// console.log(b);
// console.log(c);
// let a=`5`;
// let b=` `;
// let c=``;
// console.log(Boolean (a));
// console.log(Boolean (b));
// console.log(Boolean (c));
// let x=1/`45`;
// let y=+`rt`;
// let z=1/``;
// let a=null+1;
// let b=undefined+1;
// let c=25+`\t \n`;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);
// console.log(b);
// console.log(c);

// *** ПРИСВОЕНИЕ ***//
// let n=3, k=10;
// n++;
// n*=4;
// k/=5;
// k--;
// let s=n++;
// let z=++n + n++
// console.log(s);
// console.log(z);
// console.log(n);
// console.log(k);

// *** СРАВНЕНИЕ, ЛОГИЧЕСКИЕ ОПЕРАТОРЫ ***//
// console.log(1>2);
// console.log(1!=2);
// let a=1<2;
// console.log(a);
// console.log(`слон`>`слот`);
// console.log(`слон`>`slon`);
// console.log(`слон`>`слоножоп`);
// console.log(`01`===1);
// console.log(`01`==1);
// console.log(``==false);
// let ar1=[1,2,3];
// let ar2=[1,2,3];
// console.log(typeof ar1);
// console.log(typeof ar2);
// console.log(5.5%2);
// console.log(true||false);
// console.log(true>false);
// let a=[1,2,3];
// console.log(...a);
// let a=`5`;
// let b=` `;
// let c=``;
// console.log(1||2);
// console.log(1&&2);
// let a=0;
// let b=false;
// let c=1;
// console.log(a||b||c);
// let user1=prompt(`Укажите имя`,`Maltsau`);
// let user2=null;
// console.log(user1||user2||`Никто не пришел на фанвстречу`);

// let x=prompt(`Введите х`, ``);
// let y;
// if (x==false){
//     y=`Успех`;}
// else (y=`Пуделина`);
// console.log(y);
// let x=prompt(`Введите х`, ``);
// let y=`Пуделина`;
// x||(y=`Успех`);
// console.log(y)
// let x=+prompt(`Введите х`,10);
// (x>5)&& console.log(`Больше пяти`);
// let i=+prompt(`Ведите возраст`,`14-90`);
// if (i>=14 && i<=90){
//     console.log(`В диапазоне`);
// }
// else console.log (`За пределами диапазона`);
// // ****ПРОВЕРКА ЛОГИНА И ПАРОЛЯ
// let login=prompt (`Введите логин`);
// if (login !==`admin`) {
//     alert (`Я Вас не знаю`);
// }
// else {
//     let pword=prompt(`Введите пароль`);
//     if (pword==`Я главный`) {
//         alert (`Добро пожаловать`)
//     }
//     else {
//         alert(`Пароль не верный`);
//     }
// }

// let a=0;
// let b=`er`;
// console.log(a??b);
// let a=+prompt(`a`,1);
// let b=+prompt(`b`,2);
// let c=+prompt(`c`,3);
// console.log((a??b)&&c);

// ЦИКЛЫ  //
// let i=1;
// while (i<=3){
//     console.log(i);
//     i++
// }

// ** Жалкая попытка найти простые числа


// let n=+prompt(`Введите начало целочисленного диапазона`, 1);
// let k=+prompt(`Введите окончание целочисленного диапазона`, 100);
// let a,b=1;
// if (k>=n){
// 	comeBack:for (let i=n; i<=k; i++){
// 		if (i==2) console.log(i);
// 		for (let j=2; j<i; j++){
// 			if (i%j!==0) a=true;
// 			else {
// 				a=false;
// 				continue comeBack;
// 			}
// 		}
// 		switch (a) {
// 			case true: {
// 				console.log(i);
// 				b++;
// 			}
// 		}
// 	}
// }
// else console.log(`Поменяйте местами начало и конец диапазона`);
// if (b==1) console.log(`Все числа диапазона составные`);

// for (let i=2;i<=10;i++){
// 	if ((i%2)==0) console.log(i);
// }

// let i=0;
// while (i<3){
// 	alert (`Number ${i}`);
// 	i++;
// }

// /// Бесконечный цикл///
// let input;
// do {
// 	input = prompt("Введите число, большее 100?", 0);
// } while (input <= 100 && input);

// Упражнение на switch в if
// let browser=prompt(`Browser? `,`Opera`);
// if (browser==`Edge`) alert(`You've got the Edge!`);
// else{
// 	if (browser==`Chrome`
// 		||browser==`Firefox`
// 		||browser==`Opera`
// 		||browser==`Safari`) alert(`Okay we support these browsers too`);
// 	else alert (`We hope that this page looks ok!`);
// }

// Упражнение на if в switch
// const number=+prompt(`Введите число между 0 и 3`,` `);
// switch (number){
// 	case 0: {alert(`Вы ввели число 0`);
// 			break;}
// 	case 1: {alert(`Вы ввели число 1`);
// 			break;}
// 	case 2:
// 	case 3: {alert(`Вы ввели число 2, а может и 3`);
// 			break;}
// 	default: {alert(`Вы ввели хрень`);
// 			break;}
// }

// *** ФУНКЦИИ***
function factorialize (n){
    let s=1;
    for (let i=1; i<=n; i++){
        s=s*i;
    }
    return s;
}
let a=+prompt(`Введите число`);
alert(factorialize (a));