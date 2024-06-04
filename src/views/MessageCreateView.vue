<template>
<div class="main-container">
    <form @submit="handleSubmit" action="/url">
        <input v-model="author" class="name-input" type="text" maxlength="20" placeholder="Your name...">
        <textarea v-model="message" maxlength="150" placeholder="Your message..."></textarea>
        <button class="submit" type="submit">Submit!</button>
    </form>
    <div class="error-div" v-if="invalidInput">
        Please input both your name and a message!!
    </div>
</div>
</template>

<script>
import { generateClient } from 'aws-amplify/api';
import { createMessage } from '../graphql/mutations';

const client = generateClient(); 

export default {
    name: 'MessageCreateView',
    data() {
        return {
            author: '',
            message: '',
            invalidInput: false
        };
    },
    computed: {
        isValid() {
            return this.author.length != 0 && this.message.length != 0
        }   
    },
    methods: {
        async handleSubmit(e) {
            e.preventDefault()

            if (!this.isValid) {
                this.invalidInput = true
                return
            }

            await client.graphql({
                query: createMessage,
                variables: { input: {content: this.message, author: this.author} }
            })

            this.$router.push({name: 'messageboard'})
        },
        handleClick() {
            if (!this.isValid()) {
                this.invalidInput = true;
            }
        }
    }
}
</script>

<style scoped lang="scss">

* {
    margin: 0;
    font-family: "Space Mono", monospace;
}

.main-container {
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.error-div {
    margin-top: 50px;
    font-size: 1.5rem;
}

input, textarea, button {
    border-style: none;
    color: #EFE6E0;
    background-color: #7B5946;
    border-radius: 20px;
    width: 400px;
    padding: 20px;
    font-size: 1.5rem;
}

textarea {
    height: 300px;
    resize: none;
}

.submit {
    width: 440px;
    transition: 0.3s;
    &:hover{
        cursor: pointer;
        background-color: #A87363;
        transform: translateY(-2px);
    }
 }

.name-input {
    height: 60px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

::placeholder {
    color: #EFE6E0;
}

@media (max-width: 550px) {
  .main-container {
    transform: scale(0.8);
  }
}

@media (max-width: 380px) {
  .main-container {
    transform: scale(0.7);
  }
}

@media (max-width: 340px) {
  .main-container {
    transform: scale(0.6);
  }
}

@media (max-height: 760px) {
  .main-container {
    transform: scale(0.75);
  }
}

@media (max-height: 700px) {
  .main-container {
    transform: scale(0.7);
  }
}


</style>