<template>
	<div class="holiday">
		<div class="gifts_box">
			<p class="gift_tle">如果活动结束前不再追加认购,以下礼包供您选择</p>
			<ul class="gifts_lists">
				<li v-for="(lbData, index) in lbDatas" :class="staFun(lbData.status)[1]">
					<p class="lb_num">{{lbData.lbName}}</p>
					<p class="lb_btn" @click="lbClick(index)" v-text="staFun(lbData.status)[0]"></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
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
				]
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
			lbClick:function(index){
				// this.current = index;
				console.log(index);
			}
		},
		computed:{

		}
	}
</script>