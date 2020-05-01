class Hangman {
  constructor(word) {
    this.startAgain(word);
  }
  startAgain(word) {
    this.word = word;
    this.errorAmount = 0;
    this.maxError = 6;
    this.wrongSymbols = [];
    this.guessedString = '_'.repeat(word.length);
    return this;
  }
  guess(letter) {
    if (this.word.includes(letter)) {
      for (let i = 0; i < this.word.length; i++) {
        if (letter === this.word[i]) {
          this.guessedString = this.guessedString.slice(0, i) + letter + this.guessedString.slice(i + 1);
        }
      }
      if (!this.guessedString.includes('_')) {
        console.log(this.guessedString + " | You won!");
      } else {
        console.log(this.guessedString);
      }
    } else {
      this.errorAmount++;
      this.wrongSymbols.push(letter);
      if (this.errorAmount >= this.maxError) {
        console.log(this.guessedString + " | no errors left | You lose!");
      } else {
        console.log("wrong letter, errors left " + (this.maxError - this.errorAmount) + " | " + this.wrongSymbols);
      }
    }
    return this;
  }
  getGuessedString() {
    console.log(this.guessedString);
    return this;
  }
  getErrorsLeft() {
    if (this.maxError - this.errorAmount < 1) {
      console.log("no errors left");
    } else {
      console.log(this.maxError - this.errorAmount);
    }
    return this;
  }
  getWrongSymbols() {
    console.log(this.wrongSymbols);
    return this;
  }
  getStatus() {
    if (this.errorAmount >= this.maxError) {
      console.log(this.guessedString + " | no errors left | You lose!");
    } else {
      console.log(this.guessedString + " | errors left " + (this.maxError - this.errorAmount));
    }
    return this;
  }
}
module.exports = new Hangman();