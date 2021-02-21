<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-position="left"
      label-width="auto"
      class="flex-father">



      <el-form-item label="密码" prop="pass" class="flex-item">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass" class="flex-item ">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="年龄" prop="age" class="flex-item">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>

      <div class="flex-item flex-father-line">
        <el-button type="primary" @click="submitForm('ruleForm')" class="flex-button">提交</el-button>
        <div class="flex-button-m"></div>
        <el-button @click="resetForm('ruleForm')" class="flex-button">重置</el-button>
      </div>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: "LoginForm",
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .flex-father{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-end;
    align-content: center;
    overflow: hidden;
  }
  .flex-father-line{
    width:50%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .flex-item{
    flex: 1;
  }
  .flex-button{
    flex: 1;
    align-self: flex-start;
  }
  .flex-button-m{
    flex: 3;
    align-self: flex-start;
  }
</style>
