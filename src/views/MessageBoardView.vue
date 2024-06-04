<template>
  <DeleteConfirmation v-if="showDeleteConfirmation" :author="author" :deleteFunction="handleDelete" :cancelFunction="cancelDelete"></DeleteConfirmation>
  <div class="main-container">
    <div class="title">
      REASONS WHY <br>
      MS. RETNO <br>
      IS {{ adjective }}
    </div>
    <router-link to="/messageboard/create" class="create-button">Add a reason to make Ms. Retno smile!</router-link>
    <div class="msg-container">
      
      <div class="msg-box">
        <p id="content">{{ messages }}</p>
        <p id="author">-{{ author }}-</p>
      </div>

      <div class="page-indicator">
        <div @click="handlePrev" class="left-arrow">&lt;&lt;</div>
        <div class="page">{{ currMsg }}/{{ totalMsg }}</div>
        <div @click="handleNext" class="right-arrow">&gt;&gt;</div>
      </div>

    </div>
  </div>
    
</template>

<script>
import { generateClient } from 'aws-amplify/api';
import { listMessages } from '../graphql/queries';
import { deleteMessage } from '../graphql/mutations';
import DeleteConfirmation from '../components/DeleteConfirmation.vue'

const client = generateClient();

export default {
  name: 'MessageboardView',
  components: {
    DeleteConfirmation
  },
  data() {
    return {
      messages: 'Loading...',
      author: 'Anonymous',
      msgIndex: 0,
      result: '',
      currMsg: 1,
      totalMsg: 0,
      showDeleteConfirmation: false,
      adjectives: ['AMAZING', 'AWESOME', 'COOL', 'FABULOUS', 'WONDERFUL', 'SLAY', 'GIRLBOSS'],
      adjective: ''
    }
  },
  methods: {
    update () {
      this.messages = this.result.data.listMessages.items[this.msgIndex].content
      this.author = this.result.data.listMessages.items[this.msgIndex].author
    },
    handleNext() {
      if (this.msgIndex >= this.result.data.listMessages.items.length - 1) {
        this.msgIndex = 0
        this.currMsg = 1
      } else {
        this.msgIndex++
        this.currMsg++
      }
      
      this.update()
    },
    handlePrev() {
      if (this.msgIndex <= 0) {
        this.msgIndex = this.result.data.listMessages.items.length - 1
        this.currMsg = this.result.data.listMessages.items.length
      } else {
        this.msgIndex--
        this.currMsg--
      }
      
      this.update()
    },
    handleDeleteInitial() {
      this.showDeleteConfirmation = true;
    },
    cancelDelete() {
      this.showDeleteConfirmation = false;
    },
    async handleDelete() {
      await client.graphql({
        query: deleteMessage,
        variables: { input: {id: this.result.data.listMessages.items[this.msgIndex].id} }
      })

      location.reload()
    }
  },
  async mounted() {
    this.result = await client.graphql({ query: listMessages })
    this.messages = this.result.data.listMessages.items[0].content
    this.author = this.result.data.listMessages.items[0].author
    this.totalMsg = this.result.data.listMessages.items.length;
  },
  created() {
    this.adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)]
  }
}

</script>

<style scoped lang="scss">

* {
  font-family: "Space Mono", monospace;
  font-weight: bold;
}

.title {
  font-family: "Rubik Doodle Shadow", sans-serif;
  font-size: 5rem;
  font-weight: 400;
  text-align: center;
  color: #7B5946;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  transition: 0.3s;
}

.msg-container {
  transition: 0.3s;
  max-width: 600px;
  color: #EFE6E0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.msg-box {
  font-size: 1.5rem;
  background-color: #7B5946;
  border-radius: 15px;
  width: 100%;
  word-wrap: break-word;
  min-height: 300px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
}

.create-button {
  text-align: center;
  border-style: none;
  background-color: #BC9286;
  border-radius: 30px;
  padding: 15px;
  font-size: 1.2rem;
  color: #EFE6E0;
  text-decoration: none;
  
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #EFE6E0;
    color: #BC9286;
  }
}

.delete-button {
  font-size: 1.3rem;
  text-align: center;
  position: absolute;
  top: -15px;
  right: -15px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 50px;
  background-color: #A87363;
  border-radius: 50%;

  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #EFE6E0;
    color: #BC9286;
  }
}

#author {
  text-align: end;
}

.page-indicator {
  user-select: none;
  font-size: 1.5rem;
  color: #7B5946;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
}

.right-arrow, .left-arrow {
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.25);
  }
}

@media (max-height: 1000px) {
  .main-container {
    transform: scale(0.9);
  }
} 

@media (max-height: 900px) {
  .main-container {
    transform: scale(0.85);
  }
} 

@media (max-height: 805px) {
  .main-container {
    transform: scale(0.75);
  }
} 

@media (max-height: 770px) {
  .main-container {
    transform: scale(0.7);
  }
} 

@media (max-height: 740px) {
  .main-container {
    transform: scale(0.6);
  }
} 

@media (max-height: 700px) {
  .main-container {
    transform: scale(0.5);
  }
} 

@media (max-width: 700px) {
  .msg-container {
    width: 500px;
  }
}

@media (max-width: 605px) {
  .title {
    font-size: 4rem;
  }
}

@media (max-width: 480px) {
  .msg-container {
    width: 400px;
  }

  .msg-box{
    font-size: 1.2rem;
  }
}

@media (max-width: 445px) {
  .title {
    font-size: 3.5rem;
  }
}

@media (max-width: 425px) {
  .title {
    font-size: 3rem;
  }
}

@media (max-width: 370px) {
  .main-container {
    transform: scale(0.7);
  }
}

@media (max-width: 300px) {
  .main-container {
    transform: scale(0.6);
  }
}

@media (max-height: 650px) {
  .main-container {
    transform: scale(0.65);
  }
}







</style>