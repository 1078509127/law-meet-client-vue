<template>
    <div>
        <!-- 一定要加template遍历  递归调用 不然无效 -->
        <template v-for="(item, i) in menu">
            <el-submenu v-if="item.children && item.meta.hidden" :key="i" :index="item.name">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{ item.meta.title }}</span>
                </template>
                <aside-item :menu="item.children"></aside-item>
            </el-submenu>
            <el-menu-item v-else-if="item.meta.hidden" :index="item.name" @click="$router.push({ path: item.path })">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{ item.meta.title }}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
    export default {
        name: "AsideItem",
        props: {
            menu: { type: Array },
        },
    };
</script>
<style>
 /*隐藏文字*/
 .el-menu--collapse  .el-submenu__title span{
    display: none;
  }
  /*隐藏 > */
  .el-menu--collapse  .el-submenu__title .el-submenu__icon-arrow{
    display: none;
  }
</style>