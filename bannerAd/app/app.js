/**
 * Created by toddshelton on 4/13/16.
 */


var tl = new TimelineMax({delay: 1}),
    bg = document.getElementById("background"),
    use = document.getElementById("use"),
    gsap = document.getElementById("gsap"),
    to = document.getElementById("to"),
    animate = document.getElementById("animate"),
    your = document.getElementById("your"),
    web = document.getElementById("web"),
    banners = document.getElementById("banners"),
    slideOneText = [use, gsap, to, animate, your, web, banners],

    //slide Two
    feather = document.getElementById("feather"),
    whiteBG = document.getElementById("whiteAngleBG"),
    staggerText = document.getElementById("staggeringText"),
    fileSize = document.getElementById("fileSize"),
    bannerFun = document.getElementById("bannerFun"),
    sentenceText = [staggerText, fileSize, bannerFun],
    allSlideTwo = [sentenceText, whiteBG, feather],

    //slide Three
    pLogo = document.getElementById("pLogo"),
    toddImg = document.getElementById("toddImg"),
    learnMore = document.getElementById("learnMore"),
    courseName = document.getElementById("courseName");

TweenLite.set([slideOneText], {transformOrigin: "50% 50%"});
TweenLite.set("feather", {immediateRender: true});
//TweenLite.set("#slideThree", {opacity: 0});


tl.from("svg", 0.2, {autoAlpha: 0})
    .staggerFrom(slideOneText, .3, {scale: 0, opacity: 0, ease: Back.easeOut}, .1)
    .staggerTo(slideOneText, .5, {x: 400, scale: .5, opacity: 0, ease: Back.easeIn.config(3)}, 0.05, "+=1.5")
    .add("slideTwo")
    .set("#slideTwo", {y: 0})
    .from(feather, .5, {x: -290, opacity: 0}, "+=1")
    .from(whiteBG, .5, {x: 728, opacity: 0})
    .staggerFrom(sentenceText, .5, {y: 90, opacity: 0}, .2)
    .to(allSlideTwo,.2, {y: -90}, "+=1")
    .add("slideThree")
    .from(learnMore,.3, {y:90, opacity:0}, "+=1")
    .from(courseName,.3, {y:-100, opacity:0}, "-=.3")
    .from(pLogo,.3, {x:-120, opacity:0})
    .from(toddImg,.3, {x:740, opacity:0}, "-=.3")
    .to(toddImg,.3, {borderRadius:"20px"})
    .seek("slideThree");
