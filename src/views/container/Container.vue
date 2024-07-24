<template>
    <el-container>
        <el-aside  width="collapse">
            <tree-menu :isCollapse="flag"/>
        </el-aside>
        <el-container>
            <el-header>
                <header-btn :collapseBtnClass="iconClass"  @click.native="collapse()"/>
                <Bread-crumb></Bread-crumb>
                <header-user/>
            </el-header>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import treeMenu from "@/views/components/TreeMenu.vue";
import headerBtn from "@/views/components/HeaderBtn.vue";
import BreadCrumb from "@/views/components/BreadCrumb.vue";
import headerUser from "@/views/components/HeaderUser.vue";
export default {
    components: {
        treeMenu,
        headerBtn,
        BreadCrumb,
        headerUser
    },
    data() {
        return {
            sideWidth: "230",
            flag: false,
            iconClass:"el-icon-s-fold",
        };
    },
    methods: {
        collapse() {
            //collapse为false时展开，为true时折叠。
            this.flag = !this.flag
            //折叠时
            if (this.flag) {
                //折叠时宽度为64
                this.sideWidth = 64
                //变换图标样式
                this.iconClass = 'el-icon-s-unfold'
                //折叠时不展示名称“ML后台管理系统”
                this.logoTextShow = false
                //展开时
            } else {
                //展开时宽度为200
                this.sideWidth = 230
                //变换图标样式
                this.iconClass = 'el-icon-s-fold'
                //展开时展示名称“ML后台管理系统”
                this.logoTextShow = true
            }
        }
    }
}
</script>
<style scoped>
.el-container {
    height: 100%;
}

.el-header {
    text-align: center;
    line-height: 60px;
    display: flex;
    width: auto;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1)
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    height: 100%;
    transition: width 0.15s;
    -webkit-transition: width 0.15s;
    -moz-transition: width 0.15s;
    -webkit-transition: width 0.1s;
    -o-transition: width 0.15s;
}


.el-card__body, .el-main{
    padding: 10px;
}
</style>