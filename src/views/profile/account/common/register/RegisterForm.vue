<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="10vh"
      class="flex-father">

      <el-form-item label="手机号码" prop="phone" class="flex-item">
        <el-input
          maxlength="11"
          v-model="ruleForm.phone"
          show-word-limit
          autocomplete="off"></el-input>
        <el-button type="info" @click="sendACode" class="flex-button" size="mini" :disabled="isTruePhone">{{btMessage}}</el-button>
      </el-form-item>

      <el-form-item label="验证码" prop="verificationCode" class="flex-item" >
        <el-input
          maxlength="6"
          v-model="ruleForm.verificationCode"
          show-word-limit
          autocomplete="off"
          :disabled="isTruePhone"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pass" class="flex-item">
        <el-input type="password"
                  maxlength="16"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  :show-password="isShowPWD"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass" class="flex-item ">
        <el-input type="password"
                  maxlength="16"
                  v-model="ruleForm.checkPass"
                  autocomplete="off"
                  :show-password="isShowPWD"></el-input>
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
    name: "RegisterForm",
    data() {
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          this.isTruePhone = true
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          if(value.length < 11){
            this.isTruePhone = true
            callback(new Error('长度不能小于11'))

          }
          else if (!/^1\d{10}$/.test(value)) {
            this.isTruePhone = true
            callback(new Error('请输入正确的手机号码'));
          }
          else{
            this.isTruePhone = false
            callback();
          }
        }, 10);
      };

      var checkVerificationCode = (rule, value, callback) => {
        console.log("进来了")
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        setTimeout(() => {
          if(value.length < 6){
            callback(new Error('长度不能小于6位'))
          }
          else if (this.Acode !== value) {
            callback(new Error('请输入正确的验证码'));
          }
          else{
            callback();
          }
        }, 1000);
      };

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(value.length < 6) {
          callback(new Error('长度不能小于6位'))
        }
        else {
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
        isTruePhone: true,
        isShowPWD: true,
        btMessage: "发送验证码",
        Acode: "",
        ruleForm: {
          pass: '',
          checkPass: '',
          phone: '',
          verificationCode: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ],
          verificationCode: [
            { validator: checkVerificationCode, trigger: 'blur' }
          ]
        }
      };
    },
    computed: {
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
      },
      sendACode(){
        // 在此处发送服务
        console.log("发送验证码")

        //回收验证码到数据位置
        console.log("收到123456")
        this.Acode = "123456"

        this.btMessage = '点击重新发送'
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
  }
  .flex-father-line{
    width: 50%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .flex-item{
    width: 75%;
    height: 100%;
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
