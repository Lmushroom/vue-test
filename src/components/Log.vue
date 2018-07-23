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
		<jf-footer></jf-footer>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	import Footer from './Footer'
	import {Tabs,TabPane} from 'element-ui'

	Vue.use(Tabs)
	Vue.use(TabPane)

	export default{
		data() {
	      	return {
	        	activeName: 'first'
	      	};
	    },
	    methods: {
	      	handleClick(tab, event) {
	        	// console.log(tab, event);
	      	}
	    },
		components:{
			'jf-footer':Footer
		}
	}
</script>