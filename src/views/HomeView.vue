<template>

<div class="title">
  <h1>HAPPY BIRTHDAY</h1>
  <h2>MS. RETNO!</h2>
</div>

<div class="pic-container">
  <img id="pic" src="../assets/main-pic.png">
</div>

<div class="date">
  <h2>29 MARCH 2024</h2>
</div>


<div class="timer-container">
  <CountdownTimer id="timer"></CountdownTimer>
</div>

<div class="msg-outer">
  <div class="msg-subtitle">Messages from Daiva & Sharon</div>
  <div class="msg-container">
    <div class="msg-shar">
      <p>
        Hello miss!! I hope you enjoy this little thing we've made. I think it goes without saying that we truly think you're amazing, 
        both as a teacher and as a person. High school would have been vastly different (in a bad way) without your guidance. 
        I'm sure you play a crucial role in your students' successes. Happy birthday, Ms. Retno! May your future be amazing just as you are!
      </p>
      <p class="author">-Daiva-</p>
    </div>
    <div class="msg-daiva">
      <p>
        To my comfort person, favourite superhuman, and no. 1 support system, thank you for being born 🩷 We're all so lucky to know the warm and amazing person that you are. 
        My life would be so different without your Physics pick up lines, heartfelt DMs, and of course, your typos. 
        Happiest birthday, Ms. Retno! We hope this little gift made you smile.
      </p>
      <p class="author">-Sharon-</p>
    </div>
  </div>
</div>

<div class="padding"></div>

</template>

<script>
import CountdownTimer from '../components/CountdownTimer.vue'

export default {
  name: 'HomeView',
  components: {
    CountdownTimer
  }
}
</script>

<style scoped lang="scss">

* {
  padding: 0;
  margin: 0;
}

.padding{
  height: 300px;
}

h1, h2 {
  text-align: center;
  color: #7B5946;
  font-size: 5rem;
  margin: 0;
  z-index: -1;
  font-weight: 500;
}

h1 {
  margin-top: 30px;
}

.date h2 {
  transform: translateY(-70px);
}

.title, .date {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
}

.timer-container {
  display: flex;
  justify-content: center;
}

#timer {
  width: 70%;
}

.pic-container {
  display: flex;
  justify-content: center;
}

#pic {
  z-index: -2;
  transform: translateY(-35px);
  border-radius: 50%;
  width: auto;
  height: 500px;
}

.msg-outer {
  text-align: center;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.msg-subtitle {
  font-family: "Space Mono", monospace;
  background-color: #BC9286;
  color: #EFE6E0;
  font-size: 2rem;
  border-radius: 30px;
  padding: 10px;
}

.msg-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 50px;
}

.msg-shar, .msg-daiva {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Space Mono", monospace;
  background-color: #7B5946;
  font-size: 1.4rem;
  color: #EFE6E0;
  border-radius: 100px;

  padding: 25px;
  max-width: 500px;
}

.author {
  margin-top: 10px;
}

.timer-container, .msg-shar, .msg-daiva {
  transition: 0.3s;
  &:hover {
    transform: translateY(-8px);
  }
}

@media (max-width: 730px) {
  h1, h2 {
    font-size: 3rem;
  }

  #pic {
    height: 300px;
  }
}

@media (max-width: 625px) {
  .timer-container, .msg-outer {
    transform: scale(0.85);
  }
}

@media (max-width: 455px) {
  .timer-container, .msg-outer {
    transform: scale(0.75);
  }
}

@media (max-width: 400px) {
  .msg-outer {
    transform: scale(0.7);
  }
}

@media (max-width: 380px) {
  .msg-outer {
    transform: scale(0.6);
  }
}



</style>
