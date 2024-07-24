<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b" :collapse-transition="false">
    <AsideItems :menu="menu" router/>
  </el-menu>
</template>
<script>
  import AsideItems from "./AsideItems.vue";
  export default {
    name: 'treeMenu',
    props: {
      isCollapse: {
        type: Boolean
      }
    },
    components: {
      AsideItems,
    },
    data() {
      return {
        menu: this.$router.options.routes[2].children,
      };
    },
    mounted(){
    },
    methods: {}
  }
</script>
<style>
  .el-menu {
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
  }
</style>