<template>
<div class="pic-main" id="id">
    <div class="pic">
        <img src="img">
    </div>
</div>
</template>

<script>
export default {
    props: ['img', 'id']
};
</script>

<style scoped lang="scss">
.pic-main {
    margin-left: 100px;

    background-color: white;
    width: 300px;
    height: 350px;
    display: flex;
    justify-content: center;
}

.pic {
    margin-top: 20px;
    background-color: black;
    width: 250px;
    height: 250px;
}

.pic img {
    width: 100%;
    height: 100%;
}
</style>