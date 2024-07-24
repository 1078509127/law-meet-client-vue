<template>
    <div>
        <div :class="collapseBtnClass"
             style="cursor:pointer;font-size:30px;float:left;line-height:60px"
             ></div>
    </div>
</template>
<script>
    export default {
        props: ['collapseBtnClass'],
        data() {
            return {}
        },
    }
</script>
<style>
</style>