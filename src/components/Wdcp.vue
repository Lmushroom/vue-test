<template>
	<div class="wrp">
		<div class="wdcp">网贷产品</div>
		<button @click="usrFun">点击</button>
		<jf-footer></jf-footer>
	</div>	
</template>

<script type="text/javascript">
	import Vue from 'vue'
	import Footer from './Footer'
	export default{
		name:'Wdcp',
		data(){
			return {

			}
		},
		methods:{
			usrFun:function(){		
				var _this = this;
				this.$ajax.get('/api/course')
				.then(function(res){
					if(res.data){
						console.log(res);
					};												
				});				
			}
		},
		components:{
			'jf-footer':Footer
		}
	}
</script>