<template>
	<div class="holiday">
		<div class="gifts_box">
			<p class="gift_tle">如果活动结束前不再追加认购,以下礼包供您选择</p>
			<ul class="gifts_lists">
				<li v-for="(lbData, index) in lbDatas" :class="staFun(lbData.status)[1]">
					<p class="lb_num">{{lbData.lbName}}</p>
					<p class="lb_btn" @click="clickBtn(index)" v-text="staFun(lbData.status)[0]"></p>
				</li>
			</ul>
		</div>
		<el-dialog
			title="请选择查看账户" 
			:visible.sync="dialogproVisible"
			width="90%"
			custom-class="selUsrsssTip"
			:data="popUpData">
			<span slot="footer" class="dialog-footer">
			    <el-button type="primary" @click="getClick">确 定</el-button>
			</span>
			<p class="gift_tip">您当前选择礼包{{popUpData[0].num}}，点击 确认 即可获得相应奖品。选择后不可退换哦！请谨慎选择！</p>
			<p>{{popUpData[1].name}}</p>
		</el-dialog>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	import {Dialog,Button} from 'element-ui'

	Vue.use(Dialog)
	Vue.use(Button)

	export default{
		name:'Holiday',
		data(){
			return {
				current:0,
				lbDatas:[
					// {'lbName':'礼包1','status':0},//可选择
					// {'lbName':'礼包2','status':1},//已选择
					// {'lbName':'礼包3','status':2}//不可选
					{'lbName':'礼包1','status':0},
					{'lbName':'礼包2','status':0},
					{'lbName':'礼包3','status':0},
					{'lbName':'礼包4','status':0}
				],
				popUpData:[
					{'num':0},
					{'name':'蚕丝被'}
				],
				popUpData1:[
					{'num':1},
					{'name':'蚕丝被'}
				],
				popUpData2:[
					{'num':2},
					{'name':'机器人'}
				],
				popUpData3:[
					{'num':3},
					{'name':'电饭煲'}
				],
				popUpData4:[
					{'num':4},
					{'name':'平衡车'}
				],
				dialogproVisible:false
			}
		},
		methods:{
			staFun:function(status){
				var aFun = [];
				if(status == 0){
					aFun = ['选择','init_gift'];
					return aFun;
				}else if(status == 1){
					aFun = ['已选择','did_gift'];
					return aFun;
				}else{
					aFun = ['选择','not_gift'];
					return aFun;
				}
			},
			getClick:function(){
				var _that = this;
				// console.log(132);
				_that.dialogproVisible=false;
			},
			clickBtn:function(index){
				var _this = this;
				_this.dialogproVisible=true;
				// console.log(index);
				if(index == 0){
					_this.popUpData = _this.popUpData1;
				}else if(index == 1){
					_this.popUpData = _this.popUpData2;
				}else if(index == 2){
					_this.popUpData = _this.popUpData3;
				}else if(index == 3){
					_this.popUpData = _this.popUpData4
				}

				// console.log(_this.popUpData);
			}
		},
		computed:{

		}
	}
</script>