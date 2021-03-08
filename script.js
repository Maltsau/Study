//Задача 1.1
function getType(a){
    return (typeof a)
}
//Задача 1.2
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
function isNumberInRange(n,min,max,){
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

//Задача 1.4

        

console.log(isNumberInRange(23,1,100));