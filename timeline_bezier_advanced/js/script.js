/**
 * @author Todd Shelton
 */
$('document').ready(function() {
	//all the variables needed.
    //we are using Kinetic to put our assets on the stage.
	var appHeight = 400, appWidth = 1000, appCenterX = appWidth / 2, appCenterY = appHeight / 2, stage = new Kinetic.Stage({
		container : "container",
		width : appWidth,
		height : appHeight,
	}), layer = new Kinetic.Layer(), car = new Image(), tl;

	stage.add(layer);
	car.src = "assets/images/car60.png";

    //this is the animation for the bezier curve
	function getAnimation() {
		
		var logo = new Kinetic.Image({
			image : car,
			width : 60,
			height : 60,
			x : -80,
			y : 131
		});

		//add the bez
        var bezTween = new TweenMax(logo, 3, {
            bezier: {
                type: "thru",
                values: [{
                    setX: -60,
                    setY: 105
                    },{
                    setX: 159,
                    setY: 85
                    }, {
                    setX: 423,
                    setY: 220
                    }, {
                    setX: 701,
                    setY: 180
                    }, {
                    setX: 930,
                    setY: 120
                    },{
                    setX: 1080,
                    setY: 170
                }],
                autoRotate: ["setX", "setY", "setRotationDeg"]
            },
            ease: Linear.easeNone,
            autoCSS: false
        });

        //add the logo
		layer.add(logo);

		//return the bez
        return bezTween;
	}

    //here we are building the timeline that controls the cars.
    function buildTimeline(){
        tl = new TimelineMax({repeat: 4, onUpdate: updateSlider, delay:1});
        tl.add(getAnimation(),.2);
        tl.add(getAnimation(),1);
    }

    //we are drawing the layer.
	function redraw(){
		layer.draw();
	};

    //here we are setting up the slider for control
	$("#slider").slider({
	  range: false,
	  min: 0,
	  max: 100,
	  step:.1,
	  slide: function ( event, ui ) {
	        //add timeline update
          tl.pause();
          //adjust the timeline's progress() based on slider value
          tl.progress( ui.value/100 );
	    }
	});

    //here we are controlling the pause/play button
	(function navigate(){
		
		var toggle = false;
		
		$("#pBtn").button().click(function(){
			
			if(!toggle){
				tl.pause();
				$("#bTag").html("Resume");
				toggle = true;
			}else{
				tl.resume();
				$("#bTag").html("Pause");
				toggle = false;
			}
			
		});
	})();
	
	//this updates the slider position
	function updateSlider() {
	  $("#slider").slider("value", tl.progress() *100);
	} 		
	
	//here we listen for the slider being moved.
	$("#slider, .ui-slider-handle").mousedown(function() {
	  $('html, #slider, .ui-slider-handle').one("mouseup", function(e){
	    tl.resume();
	  });
	});

    //this is the listener for the tick function that gets called every tick so we can redraw.
    TweenLite.ticker.addEventListener("tick", redraw);
	buildTimeline();

});
