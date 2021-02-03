class CountdownTimer { 
    constructor(selector, targetDate) { 
        this.selector = selector;
        this.targetDate = targetDate;
        this.root = document.getElementById(this.selector);
        
        this.markup = `
            <div class="field">
              <span class="value" data-value="days">00</span>
              <span class="label">Days</span>
            </div>

            <div class="field">
              <span class="value" data-value="hours">00</span>
              <span class="label">Hours</span>
            </div>

            <div class="field">
              <span class="value" data-value="mins">00</span>
              <span class="label">Minutes</span>
            </div>

            <div class="field">
              <span class="value" data-value="secs">00</span>
              <span class="label">Seconds</span>
            </div>
            `;

        this.root.insertAdjacentHTML('afterbegin', this.markup);

        this.refs = {
            daysItemRef: this.root.querySelector('[data-value="days"]'),
            hoursItemRef: this.root.querySelector('[data-value="hours"]'),
            minutesItemRef: this.root.querySelector('[data-value="mins"]'),
            secondsItemRef: this.root.querySelector('[data-value="secs"]'),
        };
        
        this.timerId = null;
    }
  
    startTimer() {
      if (this.timerId !== null) { 
            return;
          }
      this.timerId = setInterval(
        () => { 
          const currentDate = Date.now();
          const timeToDeadline = this.targetDate - currentDate;

          if (timeToDeadline <= 0) {
            this.refs.daysItemRef.textContent = '00';
            this.refs.daysItemRef.style.color = 'rgb(255, 7, 58)';
            this.refs.daysItemRef.style.animation = 'neon-red 0.08s ease-in-out infinite alternate';
            this.refs.hoursItemRef.textContent = '00';
            this.refs.hoursItemRef.style.color = 'rgb(255, 7, 58)';
            this.refs.hoursItemRef.style.animation = 'neon-red 0.08s ease-in-out infinite alternate';
            this.refs.minutesItemRef.textContent = '00';
            this.refs.minutesItemRef.style.color = 'rgb(255, 7, 58)';
            this.refs.minutesItemRef.style.animation = 'neon-red 0.08s ease-in-out infinite alternate';
            this.refs.secondsItemRef.textContent = '00';
            this.refs.secondsItemRef.style.color = 'rgb(255, 7, 58)';
            this.refs.secondsItemRef.style.animation = 'neon-red 0.08s ease-in-out infinite alternate';
            clearInterval(this.timerId);
            return;
          }

          const days = Math.floor(timeToDeadline / (1000 * 60 * 60 * 24));
          this.refs.daysItemRef.textContent = String(days).padStart(2, '0');

          const hours = Math.floor((timeToDeadline % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.refs.hoursItemRef.textContent = String(hours).padStart(2, '0');

          const mins = Math.floor((timeToDeadline % (1000 * 60 * 60)) / (1000 * 60));
          this.refs.minutesItemRef.textContent = String(mins).padStart(2, '0');

          const secs = Math.floor((timeToDeadline % (1000 * 60)) / 1000);
          this.refs.secondsItemRef.textContent = String(secs).padStart(2, '0');
        }, 1000) 
    }
    
    stopTimer() { 
      clearInterval(this.timerId);
      this.timerId = null;
      this.refs.daysItemRef.textContent = '00';
      this.refs.daysItemRef.style.color = 'rgb(255, 7, 58)';
      this.refs.daysItemRef.style.animation = 'neon-red 0.08s ease-in-out infinite alternate';
      this.refs.hoursItemRef.textContent = '00';
      this.refs.hoursItemRef.style.color = 'rgb(255, 7, 58)';
      this.refs.hoursItemRef.style.animation = 'neon-red 0.08s ease-in-out infinite alternate';
      this.refs.minutesItemRef.textContent = '00';
      this.refs.minutesItemRef.style.color = 'rgb(255, 7, 58)';
      this.refs.minutesItemRef.style.animation = 'neon-red 0.08s ease-in-out infinite alternate';
      this.refs.secondsItemRef.textContent = '00';
      this.refs.secondsItemRef.style.color = 'rgb(255, 7, 58)';
      this.refs.secondsItemRef.style.animation = 'neon-red 0.08s ease-in-out infinite alternate';
      // this.refs.textContent = '';
    }
}

const createTimer = new CountdownTimer('#timer-1', new Date('Feb 03, 2021 18:40:00'));
// const createTimer2 = new CountdownTimer('#timer-2', new Date('Feb 02, 2021 22:50:00'));

// const startButtonRef = document.querySelector('.start');
// const stopButtonRef = document.querySelector('.stop');
// startButtonRef.addEventListener('click', createTimer.startTimer.bind(createTimer));
// stopButtonRef.addEventListener('click', createTimer.stopTimer.bind(createTimer));

createTimer.startTimer();
// createTimer2.startTimer();
// createTimer.stopTimer();