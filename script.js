//Задача 1.1
function getType(a){
    return (typeof a)
}

//TEST 1.1
// let input1=`hhdsafhksd`;
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
function isNumberInRange(n,min,max){
    if ((isNaN(min)==true)||(min===``)||(min==null)) min=-Infinity;
    if ((isNaN(max)==true)||(max===``)||(max==null)) max=Infinity;
    if ((isNaN(n)==false)&&(n!==``)&&(n!==null)){
        switch(min<max){
            case true:{
                if ((n>=min) && (n<=max)) return true
                else return false;
            }
                break;
            case false:{
                if ((n>=max) && (n<=min)) return true
                else return false;
            }
                break;
        }
    }
    else return false;
    }

// //TEST 1.3
// let number3=prompt(`Введите число, в отношении которого будет выполняться проверка`, );
// let beginning3=prompt(`Введите начало диапазона`,``);
// let ending3=prompt(`Введите окончание диапазона`,``);
// console.log(`Задача 1.3`);
// console.log(isNumberInRange(number3,beginning3,ending3));

// //Задача 1.4
function isArrayLength (arr,min,max){
    if ((isNaN(min)==true)||(min===``)||(min==null)) min=0;
    if ((isNaN(max)==true)||(max===``)||(max==null)) max=Infinity;
    if (arr){
        switch(min<max){
            case true:{
                if ((arr.length>=min)&&(arr.length<=max)) return true
                else return false;
                break;
            }
            case false:{
                if ((arr.length>=max)&&(arr.length<=min)) return true
                else return false;
                break; 
            }
        } 
    }
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
    if ((isNaN(min)==true)||(min===``)||(min==null)) min=0;
    if ((isNaN(max)==true)||(max===``)||(max==null)) max=Infinity;
    if (str){
        switch(min<max){
            case true:{
                if ((str.length>=min)&&(str.length<=max)) return true
                else return false;
                break;
            }
            case false:{
                if ((str.length>=max)&&(str.length<=min)) return true
                else return false;
                break; 
            }
        } 
    }
    else return false;
    }

// //TEST 1.5
// let str5=prompt(`Введите строку`,``);
// let beginning5=prompt(`Введите начало диапазона`,``);
// let ending5=prompt(`Введите окончание диапазона`,``);
// console.log(`Задача 1.5`);
// console.log(isStringLength(str5,beginning5,ending5),` длина строки ${str5.length}`);

// Задача 1.6
function isInRange(input,dataType,min,max){
    if (typeof(input)==dataType){
        switch (typeof(input)){
            case `number`:{
            return isNumberInRange(input,min,max);
            break;
            }
            case `object`:{
            return isArrayLength(input,min,max);
            break;
            }
            case `string`:{
            return isStringLength(input,min,max);
            break;
            }
            default:{ 
            return false;
            break;
            }
        }
    }
    else return false;
}

// //TEST 1.6
// let inp6=true;
// let type6=`boolean`;
// console.log(`Задача 1.6`);
// console.log(isInRange(inp6,type6,5,10));
