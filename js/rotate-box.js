var init,
    getRandomInt;

getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

init = function() {
    var tetrahedon,
        showPyramidButtons,
        box,
        showCubeButtons,
        visibilityButtons,
        panelClassName,
        onButtonClick,
        onVisibilityClick,
        i,
        len;

    // tetrahedon variables
    tetrahedon = document.querySelector(".container.pyramid").children[0];
    showPyramidButtons = document.querySelectorAll("#show-pyramid-buttons button");

    // cube variables
	box = document.querySelector(".container.cube").children[0];
	showCubeButtons = document.querySelectorAll("#show-cube-buttons button");

    // all other variables
    visibilityButtons = document.querySelectorAll(".toggle-backface-visibility");
	panelClassName = "show-front";

    // handle the die state change
	onButtonClick = function(event) {
        var className,
            elemId,
            elems,
            buttons;

        className = event.target.className;
        elemId = this.offsetParent.firstElementChild.id;

        if (elemId.indexOf("cube") > 0) {
            elems = box;
            buttons = showCubeButtons;
        } else if (elemId.indexOf("pyramid") > 0) {
            elems = tetrahedon;
            buttons = showPyramidButtons;
        }

        if (className === "show-random") {
            className = buttons[getRandomInt(0,5)].className;
        }

		elems.removeClassName( panelClassName );
		panelClassName = className;
		elems.addClassName( panelClassName );
	};

    // handle the backface visibility
    onVisibilityClick = function(){
        var elemId,
            elem;

        elemId = this.offsetParent.firstElementChild.id;

        if (elemId.indexOf("cube") > 0) {
            elem = box;
        } else if (elemId.indexOf("pyramid") > 0) {
            elem = tetrahedon;
        }

        elem.toggleClassName("panels-backface-invisible");
    };

    // loop through the six-sided die
    for (i = 0, len = showCubeButtons.length; i < len; i++) {
        showCubeButtons[i].addEventListener( "click", onButtonClick, false);
    }

    // loop through the four-sided die
    for (i = 0, len = showPyramidButtons.length; i < len; i++) {
        showPyramidButtons[i].addEventListener( "click", onButtonClick, false);
    }
	
    // loop through the visibility buttons
    for (i = 0, len = visibilityButtons.length; i < len; i++) {
        visibilityButtons[i].addEventListener("click", onVisibilityClick, false);
    }	
};
	
window.addEventListener("DOMContentLoaded", init, false);