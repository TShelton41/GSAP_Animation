$(document).ready(function(){

    function loadImages(){
        var yPos = 0;
        for(var i = 0; i < 12; i++){
            var currentID = (i + 1);
            $("#container").append('<section class="rods" id="rod' + currentID + '"><img src="http://tshelton.com/dropBox/rods/rod' + currentID + '.png" ></section>');

            $("#rod" + currentID).css("top", yPos);

            var dragRod = $("#rod" + currentID);
            Draggable.create(dragRod, {
                bounds: $("#container"),
                edgeResistance:.6,
                type: "x,y",
                throwProps: true
            });

            yPos += $("#rod" + currentID).height() + 20;
        }
    }

    loadImages();
});