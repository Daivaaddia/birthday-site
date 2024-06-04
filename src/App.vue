<template>
    <div class="main-container">
        <routerView/>
        <div class="nav-box-container">
            <div class="nav-box">
                <router-link to="/gallery" custom v-slot="{ navigate }">
                <button @click="navigate" role="link">Gallery</button>
                </router-link>
                <router-link to="/">
                    <HouseIcon id="icon"></HouseIcon>
                </router-link>
                <router-link to="/messageboard" custom v-slot="{ navigate }">
                <button @click="navigate" role="link">Messageboard</button>
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
import HouseIcon from './components/HouseIcon.vue';

export default {
    components: {
        HouseIcon
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');


* {
    font-family: "Rubik Doodle Shadow", sans-serif;
}

.nav-box-container {
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    left: 50%;
    bottom: 30px;
    transform: translate(-50%, 0);
}

.nav-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    
    background-color: #A87363;
    border-radius: 50px;
    padding: 10px;

    z-index: 9;
}

#icon {
    width: 55px;
    height: auto;

    transition: 0.3s;
    &:hover {
        cursor: pointer;
        transform: translateY(-3px);
    }
}

button {
    text-decoration: none;
    color: black;
    background-color: #EBDDD7;
    font-family: "Space Mono", monospace;
    font-weight: 400;
    font-size: 1rem;

    width: 180px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 50px;
    border-style: none;

    transition: 0.3s;
    &:hover {
        cursor: pointer;
        background-color: #DAB9B2;
    }
}

@media (max-width: 475px) {
  .nav-box {
    transform: scale(0.8);
  }
}

@media (max-width: 385px) {
  .nav-box {
    transform: scale(0.7);
  }
}

@media (max-width: 330px) {
  .nav-box {
    transform: scale(0.6);
  }
}

@media (max-width: 280px) {
  .nav-box {
    transform: scale(0.55);
  }
}

@media (max-height: 650px) {
  .nav-box {
    transform: scale(0.65);
  }
}

@media (max-height: 650px) and (max-width: 315px) {
  .nav-box {
    transform: scale(0.55);
  }
}


</style>

<style lang="scss">
body {
    margin: 0;
    background-image: url('./assets/bg.png');
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-size: cover;
}
</style>
