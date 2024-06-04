<template>

  <div class="main-container">
    <p class="title">COUNTDOWN TO MS. RETNO’S NEXT BIRTHDAY</p>
    <div class="timer-container">

      <div class="days-container outer-container">
        <div class="days inner-container">
          <TimerDigit :digit="day1"/>
          <TimerDigit :digit="day2"/>
          <TimerDigit :digit="day3"/>
        </div>
        <p class="label">Days</p>
      </div>
      
      <div class="hours-container outer-container">
        <div class="hours inner-container">
          <TimerDigit :digit="hour1"/>
          <TimerDigit :digit="hour2"/>
        </div>
        <p class="label">Hours</p>
      </div>
      
      <div class="mins-containwer outer-container">
        <div class="mins inner-container">
          <TimerDigit :digit="min1"/>
          <TimerDigit :digit="min2"/>
        </div>  
        <p class="label">Minutes</p>
      </div>
      
      <div class="secs-container outer-container">
        <div class="secs inner-container">
          <TimerDigit :digit="sec1"/>
          <TimerDigit :digit="sec2"/>
        </div>
        <p class="label">Seconds</p>
      </div>

    </div>
  </div>

</template>

<script>
import TimerDigit from './TimerDigit.vue';

export default {
  components: {
      TimerDigit
  },
  data() {
    return {
      day1: '',
      day2: '',
      day3: '',
      hour1: '',
      hour2: '',
      min1: '',
      min2: '',
      sec1: '',
      sec2: ''
    };
  },
  created() {
    const targetTime = new Date('2025-03-29T00:00:00').getTime();

    setInterval(() => {
      const currTime = new Date().getTime();
      const timeDiff = targetTime - currTime;
      
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins= Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((timeDiff % (1000 * 60)) / 1000);

      this.day1 = Math.floor((days % 1000) / 100);
      this.day2 = Math.floor((days % 100) / 10);
      this.day3 = Math.floor(days % 10);

      this.hour1 = Math.floor((hours % 100) / 10);
      this.hour2 = Math.floor(hours % 10);

      this.min1 = Math.floor((mins % 100) / 10);
      this.min2 = Math.floor(mins % 10);

      this.sec1 = Math.floor((secs % 100) / 10);
      this.sec2 = Math.floor(secs % 10);
    }, 1000);
  }
}
</script>

<style scoped lang="scss">

* {
  font-family: "Space Mono", monospace;
  color: #EFE6E0;
}

.main-container {
  background-color: #7B5946;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.title {
  text-align: center;
  font-size: 2rem;
}

.timer-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
}

.inner-container {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.outer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>