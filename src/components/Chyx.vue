<template>
	<div id="chyx" class="productWrp">
		<mt-navbar class="page-part" v-model="selected">
	      	<mt-tab-item id="1" class="mint-tab-item">全部</mt-tab-item>
	      	<mt-tab-item id="2" class="mint-tab-item">债权保理</mt-tab-item>
	      	<mt-tab-item id="3" class="mint-tab-item">融资租赁</mt-tab-item>
	      	<mt-tab-item id="4" class="mint-tab-item">供应链金融</mt-tab-item>
	    </mt-navbar>
	    <mt-tab-container v-model="selected">
	    	<mt-tab-container-item id="1">
	    		<ul class="allBox">
			    	<li v-for="allItem in allData">
			    		<p class="all_tle"><span class="all_name">{{allItem.allName}}</span><span class="all_odd">剩余金额{{allItem.allMoney}}</span></p>
			    		<div class="all_info">
			    			<div class="info_per fl">
			    				<p>
			    					<span class="per_num">{{allItem.allPer}}</span>
			    					<span class="per_int">%<i v-if="allItem.addBlean">+{{allItem.allAdd}}%</i></span>
			    				</p>
			    				<p class="info_nh">目标年化利率</p>
			    			</div>
			    			<div class="info_cdon fl">
			    				<div class="cdon_box">
			    					<p class="info_time"><span>{{allItem.allTime}}</span>个月</p>
			    					<p class="info_type"><span>{{allItem.allType}}</span></p>
			    				</div>
			    				<div class="cdon_barbox">
			    					<span class="info_bar"><i v-bind:style="{width:allItem.allBar}"></i></span>
			    					<span class="info_pernum">{{allItem.allBar}}</span>
			    				</div>
			    			</div>
			    			<div class="info_join fr">
			    				<p class="join_box" :class="proStatus(allItem.status)[1]"><span v-text="proStatus(allItem.status)[0]"></span></p>
			    				<p></p>
			    			</div>
			    		</div>
			    	</li>
			    </ul>
	    	</mt-tab-container-item>
	    	<mt-tab-container-item id="2">
	    		<ul class="allBox">
			    	<li v-for="allItem in allData">
			    		<p class="all_tle"><span class="all_name">{{allItem.allName}}</span><span class="all_odd">剩余金额{{allItem.allMoney}}</span></p>
			    		<div class="all_info">
			    			<div class="info_per fl">
			    				<p>
			    					<span class="per_num">{{allItem.allPer}}</span>
			    					<span class="per_int">%<i v-if="allItem.addBlean">+{{allItem.allAdd}}%</i></span>
			    				</p>
			    				<p class="info_nh">目标年化利率</p>
			    			</div>
			    			<div class="info_cdon fl">
			    				<div class="cdon_box">
			    					<p class="info_time"><span>{{allItem.allTime}}</span>个月</p>
			    					<p class="info_type"><span>{{allItem.allType}}</span></p>
			    				</div>
			    				<div class="cdon_barbox">
			    					<span class="info_bar"><i v-bind:style="{width:allItem.allBar}"></i></span>
			    					<span class="info_pernum">{{allItem.allBar}}</span>
			    				</div>
			    			</div>
			    			<div class="info_join fr">
			    				<p class="join_box" :class="proStatus(allItem.status)[1]"><span v-text="proStatus(allItem.status)[0]"></span></p>
			    				<p></p>
			    			</div>
			    		</div>
			    	</li>
			    </ul>
	    	</mt-tab-container-item>
	    </mt-tab-container>
	    
		<jf-footer></jf-footer>
	</div>	
</template>

<script type="text/javascript">
	// import Vue from 'vue';
	import Footer from './Footer';
	import { InfiniteScroll } from 'mint-ui';

	// Vue.use(InfiniteScroll);
	export default{
		name:'Chyx',
		data(){
			return {
				selected:'1',
				allData:[]
			}
		},
		methods:{
			proStatus:function(type){
				var _this = this;
				var aThis = [];
				if(type == 0){
					aThis = ['立即加入',''];
					return aThis;
				}else if(type == 1){
					aThis = ['复审中','fp'];
					return aThis;
				}else if(type == 2){
					aThis = ['已完成','fp'];
					return aThis;
				}
			},
			loadInitData:function(){
				var _that = this;
				this.$ajax.get('/static/json/product.json')
				.then(function(data){
					_that.allData = data.data;
				})
			}
			// loadMore:function(){
			// 	this.loading = true;
			//   	setTimeout(() => {
			//     	let last = this.chItems[this.chItems.length - 1];
			//     	for (let i = 1; i <= 10; i++) {
			//      	 	this.chItems.push(last + i);
			//     	}
			//     	this.loading = false;
			//   	}, 2500);
			// }
		},
		computed:{
			
		},
		components:{
			'jf-footer':Footer
		},
		mounted:function(){
			this.loadInitData();	
		}
	}
</script>