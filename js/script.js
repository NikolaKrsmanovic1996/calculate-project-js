let btns = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let equalBtn = document.querySelector(".btn-equal");
let clearBtn = document.querySelector(".btn-clear");


btns.forEach(function(btn){
    btn.addEventListener('click',function(){
        let number = btn.getAttribute("data-num");//targasted data-number = "what is here also"
        screen.value += number ; // this means don't ovveride number just add it
    })
})
equalBtn.addEventListener('click',function(){
    //if on screen is nothing when you press equal btns it will show you please enter a value screen is property from html value is what you are entering
    if(screen.value === ''){
        screen.value = "please enter a value"
    }else{
        let value = eval(screen.value)// PROCENI!! //EVAL IS A FUNCTION IN JAVASCRIPT
        screen.value = value;//THAT SCREEN VALUE is EQUAL to your value you are entering
    }
})
//clear
clearBtn.addEventListener('click',function(){
    screen.value = "";
})