// Text Scramble
window.onload = function() {
    class TextScramble {
      constructor(previous) {
        this.previous = previous;
        this.chars = '<>-_[]{}—\\/=+*^?!________';
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.previous.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * 80);
          const end = start + Math.floor(Math.random() * 100);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
      update() {
        let output = '';
        let complete = 0;
        console.log(this.queue.length);
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          //length of give text
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            //Output of charecters
            output += `<span class="random_char">${char}</span>`;
          } else {
            output += from;
          }
        }
        //Animate Transition
        this.previous.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }}
    
    //Constant phrase to replace old text
    const phrases = ["HACKER SPACE"];
    const previous = document.querySelector('.text');
    const fx = new TextScramble(previous);
    
    let counter = 0;
    const next = () => {
      if (counter < phrases.length) {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 1);
        });
        counter = counter + 1; //% phrases.length
      }
    };
    
    next();
    }