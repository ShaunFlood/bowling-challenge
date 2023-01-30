class BowlingScoreCard {
    constructor() {
      this.rolls = [];  // array to store all rolls
      this.frames = [];  // array to store all frames, where each frame is an array of rolls
      this.frameIndex = 0;  /* index of the current frame - this keeps track of what the roll is in conduction
      in the current frame, which is what it helps with.
      */
      this.score = 0;  // total score
    }
  
    setRoll(pins) {
      this.rolls.push(pins);  // add roll to the rolls array
  
      // create a new frame if it doesn't exist
      if (this.frames[this.frameIndex] === undefined) {
        this.frames[this.frameIndex] = [];
      }
  
      this.frames[this.frameIndex].push(pins);  // add roll to the current frame
  
      // move to the next frame if the current frame has 2 rolls or a strike (10 pins in one roll)
      if (this.frames[this.frameIndex].length === 2 || pins === 10) {
        this.frameIndex++;
      }

      /*  SetRoll uses the function of frame index property to add the current roll to the correct frame as stated above
      it also updates the frame to the next one based on if the roll length is equal to 2 or 10 pins have been knocked down.
      */
    }
  
    calculateScore() {
      // loop through all frames
      for (let i = 0; i < this.frames.length; i++) {
        let frameScore = 0;
        let frame = this.frames[i];
  
        // sum up the rolls in the current frame
        frameScore = frame.reduce((a, b) => a + b, 0);
  
        // add bonus for strike or spare
        if (frame.length === 1) {
          // strike: add the next two rolls as bonus
          frameScore += this.frames[i + 1][0] + this.frames[i + 1][1];
        } else if (frameScore === 10) {
          // spare: add the next roll as bonus
          frameScore += this.frames[i + 1][0];
        }
  
        this.score += frameScore;  // add frame score to the total score
      }
  
      return this.score;  // return the total score
    }

    /* This method initalises a frame score by 
    */
  }
module.exports = BowlingScoreCard;