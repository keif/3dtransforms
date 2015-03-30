var init,
    getRandomInt;

getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

init = function() {
    var tetrahedon,
        box,
        showCubeButtons,
        panelClassName,
        onButtonClick,
        i,
        len;

    tetrahedon = document.querySelector(".container.pyramid").children[0];
	box = document.querySelector(".container.cube").children[0];
	showCubeButtons = document.querySelectorAll("#show-cube-buttons button");
	panelClassName = "show-front";
	onButtonClick = function(event) {
        var className = event.target.className;

        if (className === "show-random") {
            className = showCubeButtons[getRandomInt(0,5)].className;
        }

		box.removeClassName( panelClassName );
		panelClassName = className;
		box.addClassName( panelClassName );
	};

	for (i = 0, len = showCubeButtons.length; i < len; i++) {
		showCubeButtons[i].addEventListener( "click", onButtonClick, false);
	}
	
	document.getElementById("toggle-backface-visibility").addEventListener( "click", function(){
        var elem;
        if (this.offsetParent.firstElementChild.id.indexOf('cube') > 0) {
            elem = box;
        } else {
            elem = tetrahedon;
        }
        elem.toggleClassName("panels-backface-invisible");
	}, false);
	
};
	
window.addEventListener("DOMContentLoaded", init, false);