$(document).ready(function(){
    startTween();
});

function startTween(){
    TweenMax.staggerFrom(".icons", 1, {onComplete: scrambleText, alpha: 0, y: 200, x: 300, delay: 1.5, ease: Elastic.easeIn.config(1,1.5)},.5);

}

function scrambleText(){
    TweenMax.to(".title", 5, {delay:.5, scrambleText:{text: "Still animating with GSAP", chars: "xo", speed: 1}});
}