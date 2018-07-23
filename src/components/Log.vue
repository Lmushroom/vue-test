<template>
	<div id="logVue">
		<header>登录/注册</header>
		<el-tabs class="log_tabs" v-model="activeName" @tab-click="handleClick">
			<el-tab-pane class="log_tab" label="登录" name="first">登录</el-tab-pane>
			<el-tab-pane class="log_tab" label="注册" name="second">注册</el-tab-pane>
		</el-tabs>
		<!-- <form id="logForm">
			<div class="logbox" id="phone">
				<input type="tel" placeholder="请输入手机号" name="">
			</div>
			<div class="logbox" id="pwd">
				<input type="password" placeholder="请输入密码" name="">
			</div>
			
		</form> -->
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item label="密码" prop="pass">
			    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPass">
			    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="年龄" prop="age">
			    <el-input v-model.number="ruleForm2.age"></el-input>
			</el-form-item>
			<el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
			    <el-button @click="resetForm('ruleForm2')">重置</el-button>
			</el-form-item>
		</el-form>
		<jf-footer></jf-footer>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	import Footer from './Footer'
	import {Tabs,TabPane,Form,Input,FormItem} from 'element-ui'

	Vue.use(Tabs)
	Vue.use(TabPane)
	Vue.use(Form)
	Vue.use(Input)
	Vue.use(FormItem)

	export default{
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
		          if (this.ruleForm2.checkPass !== '') {
		            this.$refs.ruleForm2.validateField('checkPass');
		          }
		          callback();
		        }
		      };
		      var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入密码'));
		        } else if (value !== this.ruleForm2.pass) {
		          callback(new Error('两次输入密码不一致!'));
		        } else {
		          callback();
		        }
		      };
	      	return {
	        	activeName: 'first',
	        	ruleForm2: {
			        pass: '',
			        checkPass: '',
			        age: ''
			    },
			    rules2: {
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
	      	handleClick(tab, event) {
	        	// console.log(tab, event);
	      	},
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
	    },
		components:{
			'jf-footer':Footer
		}
	}
</script>