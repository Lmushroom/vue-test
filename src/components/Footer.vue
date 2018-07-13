<template>
	<footer>
		<ul>
			<li v-for="nav in navs">
				<router-link :class="nav.class" v-bind:to="nav.path">{{nav.name}}</router-link>
			</li>
		</ul>
	</footer>
</template>

<script type="text/javascript">
	import Vue from 'vue';
	import '../../static/css/footer.css';

	export default{
		name:'Footer',
		data(){
			return {
				navs:[
					{'name':'首页','path':'/','class':'index'},
					{'name':'财行优选','path':'Chyx','class':'chyx'},
					{'name':'网贷产品','path':'Wdcp','class':'wdcp'},
					{'name':'账户中心','path':'Own','class':'own'}
				]
			}
		}
	}
	
</script>
<style footer>
</style>