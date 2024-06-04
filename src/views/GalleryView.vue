<template>
  <div class="title">
    <p>OUR MEMORIES WITH</p>
    <p>MS. RETNO</p>
  </div>
  
  <div class="outer-pic-container">
    <div class="pic-container">
      <img class="pic" id="pic1" src="../assets/pic1.jpg">
      <img class="pic" id="pic2" src="../assets/pic2.jpg">
      <img class="pic" id="pic3" src="../assets/pic3.jpg">
      <img class="pic" id="pic12" src="../assets/pic12.jpg">
      <img class="pic" id="pic4" src="../assets/pic4.jpg">
      <img class="pic" id="pic5" src="../assets/pic5.jpg">
      <img class="pic" id="pic15" src="../assets/pic15.jpg">
      <img class="pic" id="pic6" src="../assets/pic6.jpg">
      <img class="pic" id="pic11" src="../assets/pic11.jpg">
      <img class="pic" id="pic7" src="../assets/pic7.jpg">
      <img class="pic" id="pic14" src="../assets/pic14.jpg">
      <img class="pic" id="pic8" src="../assets/pic8.jpg">
      <img class="pic" id="pic9" src="../assets/pic9.jpg">
      <img class="pic" id="pic13" src="../assets/pic13.jpg">
      <img class="pic" id="pic10" src="../assets/pic10.jpg">
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'GalleryView'
}
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}

.title {
  font-weight: 400;
  color: #7B5946;
  text-align: center;
  font-size: 5rem;
  padding-top: 20px; 
} 

.outer-pic-container {
  display: flex;
  justify-content: center
}

.pic-container {
  max-width: 1500px;
  padding-bottom: 150px;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  overflow-x: hidden;   
}

.pic-container img {
  max-width: 250px;
  height: auto;
  transition: 0.4s;
}

#pic1 {
  transform: rotate(5deg);
  &:hover {
    transform: scale(1.2);
  }
}

#pic2 {
  transform: rotate(-3deg);
  &:hover {
    transform: scale(1.2);
  }
}

#pic3 {
  transform: rotate(-4deg);
  &:hover {
    transform: scale(1.2);
  }
}

#pic4 {
  transform: rotate(5deg);
  &:hover {
    transform: scale(1.2);
  }
}

#pic5 {
  transform: rotate(-6deg);
  &:hover {
    transform: scale(1.2);
  }
}

#pic6 {
  transform: rotate(7deg);
  &:hover {
    transform: scale(1.2);
  }
}

#pic7 {
  transform: rotate(4deg);
  &:hover {
    transform: scale(1.2);
  }
}

#pic8 {
  transform: rotate(3deg);
  &:hover {
    transform: scale(1.2);
  }
}

#pic9 {
  transform: rotate(-7deg);
  &:hover {
    transform: scale(1.2);
  }
}

#pic10 {
  transform: rotate(7deg);
  &:hover {
    transform: scale(1.2);
  }
}

#pic11 {
  transform: rotate(-4deg);
  &:hover {
    transform: scale(1.2);
  }
}

#pic12 {
  transform: rotate(6deg);
  &:hover {
    transform: scale(1.2);
  }
}

#pic13 {
  transform: rotate(3deg);
  &:hover {
    transform: scale(1.2);
  }
}

#pic14 {
  transform: rotate(-6deg);
  &:hover {
    transform: scale(1.2);
  }
}


#pic15 {
  transform: rotate(5deg);
  &:hover {
    transform: scale(1.2);
  }
}


@media (max-width: 535px) {
  .title {
    font-size: 3.5rem;
  }
}

</style>