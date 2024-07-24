<template>
    <div>
        <el-form :rules="rules" ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="参与人员" prop="interViewUser">
                <el-input v-model="form.interViewUser"></el-input>
            </el-form-item>
            <el-form-item label="预约地点" prop="place">
                <el-input v-model="form.place"></el-input>
            </el-form-item>
            <el-form-item label="预约时间">
                <el-row>
                    <el-col :span="10">
                        <el-form-item prop="startTime">
                            <el-date-picker v-model="form.startTime" type="datetime" placeholder="选择开始时间"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="1">
                        <span>-</span>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item prop="endTime">
                            <el-date-picker v-model="form.endTime" type="datetime" placeholder="选择结束时间"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="律师证书" prop="file">
                <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-change="handleChange">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="form.file" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="说明" prop="desc">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>    
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    phone: '',
                    interViewUser: '',
                    place:"",
                    startTime: '',
                    endTime: '',
                    file: '',
                    type: [],
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                    ],
                    phone: [
                        { required: true, message: '请输入手机号', trigger: 'blur' }
                    ],
                    interViewUser: [
                        { required: true, message: '请输入参与人员', trigger: 'blur' }
                    ],
                    place: [
                        { required: true, message: '请输入会见地点', trigger: 'blur' }
                    ],
                    startTime: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    endTime: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    imgUrl: [
                        { required: true, message: '请上传图片', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写描述', trigger: 'blur' }
                    ]
                },
                dialogVisible:false,
            }
        },
        methods: {
            /* 提交表单*/
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log('submit!',this.form);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            /* 上传图片*/
            handleChange(file, fileList) {
                console.log(file, fileList);
                this.form.file = file
            },
        }
    }
</script>
<style>
    .el-form {
        width: 40%;
    }
</style>