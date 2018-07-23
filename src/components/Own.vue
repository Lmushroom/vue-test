<template>
	<div class="wrp">
		<div class="ownBox">
			<div class="own_top">
				<p class="own_top_p">
					<span class="top_grade">会员等级：普通会员</span>
					<span class="top_usr">158****4567</span>
				</p>
				<p class="own_top_sum">总资产(元)</p>
				<p class="own_top_num">{{money.all}}</p>
				<div class="own_top_money">
					<div class="money_addto">
						<p class="addto_txt">累计收益(元)</p>
						<p class="addto_num">{{money.sum}}</p>
					</div>
					<div class="money_odd">
						<p class="odd_txt">账户余额(元)</p>
						<p class="odd_num">{{money.odd}}</p>
					</div>
				</div>
			</div>
			<div class="own_items">
				<router-link class="item_link" to="/">
					<span class="item_name">财行账户</span>
					<span class="arr_ri"></span>
				</router-link>
				<router-link class="item_link" to="/">
					<span class="item_name">网贷账户</span>
					<span class="arr_ri"></span>
				</router-link>
				<p class="item_link" @click="dialogUserVisible=true">
					<span class="item_name">我的奖励</span>
					<span class="jxq">加息券：{{award[0].chjxq}}张</span>
					<span class="packet">红包：{{award[0].chred}}个</span>
					<span class="arr_ri"></span>
				</p>
				<router-link class="item_link" to="/">
					<span class="item_name">帮助中心</span>
					<span class="arr_ri"></span>
				</router-link>
				<router-link class="item_link" to="/">
					<span class="item_name">在线客服</span>
					<span class="arr_ri"></span>
				</router-link>
				<router-link class="logout_link" to="/">退出</router-link>
			</div>
		</div>
		<el-dialog 
			title="请选择查看账户" 
			:visible.sync="dialogUserVisible"
			width="90%"
			custom-class="selUsrTip"
			@open="usrFun"
			:data="award">
				<router-link class="ch_usr_bg" to="/">
					<div class="award_box">
						<span class="redpacket">红包：{{award[0].chred}}个</span>
						<span class="ch_jxq">加息券：{{award[0].chjxq}}张</span>
					</div>
				</router-link>
				<router-link class="wd_usr_bg" to="/">
					<div class="award_box">
						<span class="redpacket">红包：{{award[1].wdred}}个</span>
						<span class="ch_jxq">加息券：{{award[1].wdjxq}}张</span>
					</div>
				</router-link>
		</el-dialog>
		<jf-footer></jf-footer>
	</div>	
</template>

<script type="text/javascript">
	import Vue from 'vue'
	import {Dialog} from 'element-ui'
	import Footer from './Footer'

	Vue.use(Dialog)

	export default{
		name:'Own',
		data(){
			return {
				money:{all:'1200.00',sum:'1000.00',odd:'200.00'},
				award:[
					{"chjxq":0,"chred":0},
					{"wdjxq":0,"wdred":0}
				],
				dialogUserVisible:false
			}
		},
		methods:{
			usrFun:function(){		
				var _this = this;
				this.$ajax.get('/api/ownmoney')
				.then(function(res){
					if(res.data){
						// console.log(_this.award);
						_this.award = res.data;
						// console.log(_this.award);
					};												
				});				
			}
		},
		components:{
			'jf-footer':Footer
		}
	}
	
</script>