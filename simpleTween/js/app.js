$(document).ready(function(){
    startTween();
});

function startTween(){
    TweenMax.staggerTo(".icons", 1, {alpha: 0, y: 200, x: 300, delay: 1.5, ease: Elastic.easeIn.config(1,1.5)},.5);
    //TweenMax.from("#toolBox", 1, {left: "-200px"});
}

function alertTween(){
    TweenMax.to("#toolBox", 1, {alpha: 1, y: 0, x: 0});
}