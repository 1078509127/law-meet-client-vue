<template>
    <div class="tab_row">
        <div class="search_row">
            <el-form :inline="true" :model="formInline">
                <el-form-item label="姓名">
                    <el-input v-model="formInline.user" placeholder="预约人"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="formInline.user" placeholder="预约人手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="tableList" border :header-cell-style="{textAlign: 'center'}" :cell-style="cellStyle">
            <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="status" label="状态" width="180"></el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" :disabled="scope.row.status =='已提交'? false : true" @click="checked(scope.row)">取消提交</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="->, prev, pager, next" :current-page="page.pageNum" :page-size="page.pageSize"
            :total="page.total" @size-change="handleSizeChange" @current-change="handlePageChange">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    status: "已提交"
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    status: "取消提交"
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    status: "通过"
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    status: "未通过"
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    status: "未通过"
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    status: "未通过"
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    status: "未通过"
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    status: "未通过"
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    status: "未通过"
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    status: "未通过"
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    status: "未通过"
                },],

                tableList: [],
                page: {
                    pageNum: 1, // 第几页
                    pageSize: 10, // 每页多少条
                    total: 0 // 总记录数
                },
            };
        },
        mounted() {
            this.search();
        },
        methods: {
            search() {
                let param = {
                    pageNum: this.page.pageNum,
                    pageSize: this.page.pageSize
                }
                this.tableList = this.tableData
                this.page.total = this.tableData.length
            },
            handlePageChange(currentPage) {
                this.page.pageNum = currentPage
                // 在此刷新数据
            },
            handleSizeChange(pageSize) {
                this.page.pageSize = pageSize
                // 在此刷新数据
            },
            checked(data){
                console.log(data)
            },
            cellStyle(row, column, rowIndex, columnIndex) {
                let cellStyles = 'textAlign: center;';
                if (row.columnIndex == 3) {
                    if (row.row.status == "已提交") {
                        return cellStyles + 'color:#E6A23C'
                    } else if (row.row.status == "取消提交") {
                        return cellStyles + 'color:#909399'
                    } else if (row.row.status == "通过") {
                        return cellStyles + 'color:#67C23A'
                    } else if (row.row.status == "未通过") {
                        return cellStyles + 'color:#F56C6C'
                    }
                }
                return cellStyles
            }
        }
    }
</script>
<style>
    .el-form--inline .el-form-item {
        margin: 10px 0 10px 0;
    }

    .el-table {
        width: 100%;
        height: auto !important;
        max-height: 90% !important;
    }

    .el-pagination {
        margin: 5px auto;
    }
    .el-form-item__label{
        font-weight: 1000;
    }
</style>