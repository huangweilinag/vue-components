<template>
	<div class="hello">

		<Alert 
			@close-click="closeHandle"
			@on-ok="ok"
			@on-cancel="cancel"
			:content="ms"
		></Alert>

		<Alert 
			@close-click="closeHandle"
			@on-ok="ok"
			@on-cancel="cancel"
			:content="ms"
			:title = "title1"
			:width = "width1"
			:okText = "okText1"
		>
			<table slot = "content" class="exa-tlert">
				<thead>
					<tr><th colspan="4">分类信息</th></tr>
				</thead>
				<tbody>
					<tr>
						<td>上级分类编码</td>
						<td><input type="text"></td>
						<td>上级分类名称</td>
						<td><input type="text"></td>
					</tr>
					<tr>
						<td>上级分类编码</td>
						<td><input type="text"></td>
						<td>上级分类名称</td>
						<td><input type="text"></td>
					</tr>
				</tbody>
			</table>
		</Alert>


		<!--<Alert 
			type="warning"  
			:closeable="false" 
			:showicon="true" 
			style="background-color: pink;"
			@close-click="closeHandle"
		>	
		</Alert>

		<Alert>
			<template slot="titleTmp">
				<p>我是定制的提醒信息</p>
				<p>我是定制的提醒信息</p>
				<p>我是定制的提醒信息</p>
				<p>我是定制的提醒信息</p>
				<p>我是定制的提醒信息</p>
				<p>我是定制的提醒信息</p>
			</template>	
		</Alert>-->

	</div>
	
</template>

<script>
	import Alert from '../components/alert';

	export default {
		name: 'hello',
		data() {
			return {
				ms:"请先选中一份合同",
				title1:"新增其他应收款",
				width1:"500",
				okText1:"保存"
			}
		},
		components: {Alert},
		methods:{
	        ok:function (){
	            alert("点击了确定按钮")    
	        },
	        cancel:function (){
	            alert("点击了消取按钮")    
	        },
	        closeHandle:function(){
				alert('点击了关闭按钮');
			}
    	}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.exa-tlert{
		 border-collapse:collapse;
    	text-align:center;
	}

	.exa-tlert th,.exa-tlert td{
		border:1px solid #ddd;	
		height:22px;
		line-height:22px;
	}
</style>