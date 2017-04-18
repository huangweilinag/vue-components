/*
	props:
		current		当前页码	Number	1
		total		数据总数	Number	0
		page-size	每页条数	Number	10
	events:
		on-change				页码改变的回调，返回改变后的页码			页码
		on-page-size-change		切换每页条数时的回调，返回切换后的每页条数	page-size
*/
<template>
	<div class="hello">
		<Page 
			:current="current" 
			:total="total"
			@on-change = "change"
			@on-page-size-change = "pageSizeChange"
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
		components: { Page },
		methods:{
	       change(page){
			   console.log("页面发生了改变page=" + page);
		   },
		   pageSizeChange(size){
			   console.log("每页条数发生了改变当前page-size=" + size );
		   }
        }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>