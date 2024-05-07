function result(){
    let a = parseFloat(document.querySelectorAll(".input1")[0].value);
    let b = parseFloat(document.querySelectorAll(".input2")[0].value);
    if(a == NaN || b == NaN){
        alert("Ви нічого не ввели або це не числа.");
        document.querySelectorAll(".input1")[0].value = "";
        document.querySelectorAll(".input2")[0].value = "";
    }else{
        if(a >= b){
            document.querySelectorAll(".result")[0].innerHTML = a;
        }else{
            document.querySelectorAll(".result")[0].innerHTML = b;
        }
        document.querySelectorAll(".input1")[0].value = "";
        document.querySelectorAll(".input2")[0].value = "";
    }
}
function result2(){
    let a = document.querySelectorAll(".input3")[0].value;
    if(a.length >= 8 && a.length <= 16){
        document.querySelectorAll(".result2")[0].innerHTML = "Пароль відповідає вимогам.";
    }else{
        document.querySelectorAll(".result2")[0].innerHTML = "Пароль не відповідає вимогам. Введіть ще раз.";
        document.querySelectorAll(".input3")[0].value = "";
    }
}
function result3(){
    let a = document.querySelectorAll(".input4")[0].value;
    if(a % 2 == 0){
        document.querySelectorAll(".result3")[0].innerHTML = "Число парне.";
    }else{
        document.querySelectorAll(".result3")[0].innerHTML = "Число не парне.";
    }
}
function result4(){
    let a = document.querySelectorAll(".input5")[0].value;
    if((a % 4 == 0 && a % 100 != 0) || a % 400 == 0){
        document.querySelectorAll(".result4")[0].innerHTML = "Рік високосний.";
    }else{
        document.querySelectorAll(".result4")[0].innerHTML = "Рік не високосний.";
    }
}