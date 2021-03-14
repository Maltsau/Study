//Задача 1.1
function getType(inp){
    return (typeof inp)
}

//TEST 1.1
// let input1=[1,2,3,4];
// console.log(getType(input1));

// //Задача 1.2
function isExist(a){
    switch (a){
        case null: {return false;
                    break;}
        case undefined: {return false;
                        break;}
        default: {return true;
                  break;}
    }
}

//Задача 1.3
function isNumberInRange (input,min,max){
    if ((isExist(min)==false)||(isNaN(min)==true)) min=-Infinity;
    if ((isExist(max)==false)||(isNaN(max)==true)) max=Infinity;
    if ((isExist(input)==true)&&(isNaN(input)==false)){
      switch (min<=max){
        case true:{
          if ((input>=min) && (input<=max)) return true
          else return false;
        }
        case false:{
          if ((input>=max) && (input<=min)) return true
          else return false;
        }
      }  
    }
    else return false;
  }

//TEST 1.3
// let number3=prompt(`Введите число, в отношении которого будет выполняться проверка`, );
// let beginning3=prompt(`Введите начало диапазона`,``);
// let ending3=prompt(`Введите окончание диапазона`,``);
// console.log(`Задача 1.3`);
// console.log(isNumberInRange(number3,beginning3,ending3));

//Задача 1.4
function isArrayLength (arr,min,max){
    if (Array.isArray(arr)==true) return isNumberInRange(arr.length,min,max)
    else return false;
}

// //TEST 1.4
// let arr4 = [];
// let i=0;
// do{
//     arr4[i]=prompt(`Введите элемент массива`);
//     if (!arr4[i]){
//         arr4.pop();
//         break;}
//     i++;
// } while (true);
// let beginning4=prompt(`Введите начало диапазона`,``);
// let ending4=prompt(`Введите окончание диапазона`,``);
// console.log(`Задача 1.4`);
// console.log((isArrayLength(arr4,beginning4,ending4)),` длина массива ${arr4.length}`);

// //Задача 1.5
function isStringLength (str,min,max){
    if (str) return isNumberInRange(str.length,min,max)
    else return false;
}

//TEST 1.5
// let str5=prompt(`Введите строку`,``);
// let beginning5=prompt(`Введите начало диапазона`,``);
// let ending5=prompt(`Введите окончание диапазона`,``);
// console.log(`Задача 1.5`);
// console.log(isStringLength(str5,beginning5,ending5),` длина строки ${str5.length}`);

// Задача 1.6

function isInRange (input,dataType,min,max){
	switch (dataType){
		case `array`:{
			if (Array.isArray(input)==true){
				return isArrayLength(input,min,max);
				break;
			}
			else{
				return false;
				break;
			}
		}
		case `string`:{
			if (typeof(input)==`string`){
				return isStringLength(input,min,max);
				break;
			}
			else{
				return false;
				break;
			}
		}
		case `number`:{
			if (typeof(input)==`number`){
				return isNumberInRange(input,min,max);
				break;
			}
			else{
				return false;
				break;
			}
		}
		default: return false;
	}
}

// TEST 1.60
// let inp6=`yterfe`;
// let inpType6=`string`;
// let beginning6=false;
// let ending6=false;
// console.log(`Задача 1.6`);
// console.log(isInRange(inp6,inpType6,beginning6,ending6));

