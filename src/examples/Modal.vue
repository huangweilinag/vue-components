<template>
	<div class="hello">
	
		<Modal modal-title="提醒" @on-ok="ok"></Modal>
		<Modal @on-cancel="cancel"></Modal>
		<Modal>
			<ul slot="modal-content">
				<li v-for="item of list">{{item}}</li>
			</ul>
			<div slot="modal-footer">
				<span>确定</span>
				<span>重置</span>
				<span>返回</span>
			</div>
		</Modal>
	</div>
	
</template>

<script>
	import Modal from '../components/modal';

	var list = [...'组件封装'];
    
	export default {
		name: 'hello',
		data() {
			return {
				list: list
			}
		},
		components: {Modal},
		methods:{
	        ok:function (){
	            alert("改变一个div的样式")    
	        },
	        cancel:function (){
	            alert("取消了，干别的事情")    
	        }
        }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>