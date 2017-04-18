<template>
	<div class="hello">
		<Page 
		:current="current" 
		:total="total"
		@on-change = "change"
		></Page>	
	</div>
	
</template>


<script>
	import Page from '../components/page';
	export default {
		data() {
			return {
				current:1,
				total:86
			}
		},
		components: {Page},
		methods:{
	       change(page){
			   console.log("页面发生了改变page=" + page);
		   }
        }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>