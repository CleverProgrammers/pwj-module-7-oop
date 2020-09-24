/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called
 */
class Beat {
	constructor(audioSrc) {
		this.audio = new Audio(audioSrc);
	}

	play = () => {
		this.audio.currentTime = 0;
		this.audio.play();
	};
}

/**
 * Button class that keeps track of the button color based on a press
 */

class Button {
	constructor(color, keyCode) {
		this.color = color;
		this.keyCode = keyCode;
		this.element = document.getElementById(keyCode);
		this.setButtonColorInHTML();
		this.setTransitionEndListener();
	}

	// Solution 1: Remove style on keyup
	// Solution 2: Wait a certain amount of time before removing transition
	// Solution 3: React on transition complete
	// We're going with solution option 3 here

	setTransitionEndListener = () => {
		this.element.addEventListener("transitionend", () => {
			this.deselect();
		});
	};

	/**
	 * Set the button color based on color specified
	 */
	setButtonColorInHTML = () => {
		this.element.style.borderColor = this.color;
	};

	/**
	 * Select function to set the background color and boxShadow
	 */
	select = () => {
		this.element.style.backgroundColor = this.color;
		this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
	};

	/**
	 * Deselect function to reset background color and boxShadow
	 */
	deselect = () => {
		this.element.style.backgroundColor = "transparent";
		this.element.style.boxShadow = "none";
	};
}
