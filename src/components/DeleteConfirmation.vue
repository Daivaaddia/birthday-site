<template>
<div class="main-container">
    <div class="main">
        <div class="text">
            Are you sure you want to delete {{ author }}'s message?
        </div>
        <div class="buttons-container">
            <button @click="cancelFunction" >Cancel</button>
            <button @click="deleteFunction" >Delete!</button>
        </div>
    </div>
</div>

</template>

<script>
export default {
    props: ['author', 'deleteFunction', 'cancelFunction']
}
</script>

<style scoped lang="scss">

* {
    font-family: "Space Mono", monospace;
}

.main-container {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.main {
    font-size: 2rem;
    text-align: center;
    gap: 50px;
    z-index: 99;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    background-color: #7B5946;
    width: 600px;
    height: 400px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.text {
    color: #EFE6E0;
}

.buttons-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
}

button {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    border-style: none;
    width: 200px;
    height: 60px;
    background-color: #EBDDD7;

    &:hover {
        cursor: pointer;
        background-color: #A87363;
    }
}
</style>