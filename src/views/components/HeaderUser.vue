<template>
    <div>
        <el-dropdown>
            <div class="div_circle">
                <el-badge :value="badges" class="item">
                    <i class="el-icon-user-solid"></i>
                </el-badge>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="info">通知</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <el-dialog title="消息通知" :visible.sync="dialogVisible" width="70%" :before-close="handleClose">
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item v-for="(item,index) in msgList" :key="item.id" :title="item.title" @click.native="handleClick(item)">
                    <div>{{item.message}}</div>
                </el-collapse-item>
            </el-collapse>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                badges: 10,
                dialogVisible: false,
                activeName: '',
                msgList:[
                    {id:1,title:"提交预约1",message:"这里是审核结果"},
                    {id:2,title:"提交预约2",message:"这里是审核结果"},
                    {id:3,title:"提交预约3",message:"这里是审核结果"},
                    {id:4,title:"提交预约4",message:"这里是审核结果"},
                    {id:5,title:"提交预约5",message:"这里是审核结果"},
                ]
            }
        },
        methods: {
            info() {
                this.dialogVisible = true
                // 这里要更新dialog中的查看状态
            },
            handleClose(done) {
                this.dialogVisible = false
            },
            handleClick(item){
                //这里更新badges数量 和 改变数据查看状态
                console.log(item)
            },

            logout() {
                console.log("退出")
            },
        }
    }
</script>
<style>
    .div_circle {
        width: 40px;
        height: 40px;
        background-color: aquamarine;
        float: right;
        line-height: 40px;
        margin: 10px 20px 0 0;
        cursor: pointer;
        border-radius: 20%;
    }
    .el-dialog__body{
        padding: 30px 50px;
    }
    .el-collapse-item__header{
        font-weight: 400;
        font-size: 15px;
    }
    .el-collapse-item__wrap{
        text-align: left;
        padding: 0 50px 0 50px;
    }
</style>