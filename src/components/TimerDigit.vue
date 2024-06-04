<template>
<div class="container">
    <p>{{ digit }}</p>
</div>
</template>

<script>
export default {
    props: ['digit']
};
</script>

<style scoped lang="scss">

* {
    font-family: "Space Mono", monospace;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;

    background-color: #A87363;
    border-radius: 30px;
    width: 70px;
    height: 100px;
}

</style>