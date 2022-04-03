const preload = document.getElementById('preload');

window.addEventListener('load', function(){
    preload.style.display = "none"
})

var x = document.getElementById("header");
window.addEventListener('scroll', function(){
    x.style.height = "10vh"
})


var EFFECT = document.getElementById('podcon')
window.addEventListener('scroll', function(){
    if(window.scrollY>=500){
        EFFECT.style.opacity = '1'
        EFFECT.style.transform = "translateX(0px)"
        EFFECT.style.transition = "1s ease"
        EFFECT_1.style.opacity = '1'
        EFFECT_1.style.transform = "translateX(0px)"
        EFFECT_1.style.transition = "1s ease"
        EFFECT_2.style.opacity = '1'
        EFFECT_2.style.transform = "translateX(0px)"
        EFFECT_2.style.transition = "1s ease"
    }
    else{
        EFFECT.style.opacity = '0'
        EFFECT.style.transform = 'translateX(-50)'
    }
})

function openFun(){
    document.getElementById("absto").style.transition = "0.5s ease"
    document.getElementById("absto").style.display = "Block"
}
function closeFun(){
    document.getElementById("absto").style.transition = "0.5s ease"
    document.getElementById('absto').style.display = "none"
}

function ourwork(){
    document.getElementById("wok").style.display = "block"
}
function noWork(){
    document.getElementById("wok").style.display = "none"
}