<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="item.path" v-for="(item, index) in breadcrumbList" :key="index">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
    export default {
        name: 'Breadcrumb',
        props: {

        },
        components: {

        },
        data() {
            return {
                breadcrumbList:[],
            };
        },
        mounted() {
        },
        methods: {
            generateBreadcrumb() {
                // 获取当前路由信息
                const matched = this.$router.options.routes[2].children
                // 初始化面包屑导航数据
                const breadcrumbList = []
                // 遍历路由信息，生成面包屑导航数据
                matched.forEach(item => {
                    const { meta, name, path } = item
                    if (meta.title) {
                        breadcrumbList.push({
                            name,
                            path
                        })
                    }
                })
                // 保存面包屑导航数据
                this.breadcrumbList = breadcrumbList
            }
        }
    }
</script>
<style>
    .el-breadcrumb {
        height: 60px;
        line-height: 60px;
        width: 100%;
        margin-left: 15px;
    }

    .el-breadcrumb__separator {
        margin: 0 3px !important;
        color: #c0c4cc;
    }
</style>