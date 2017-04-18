<template>
	<div v-show="visible">
		<div v-if = "maskClosable" class="jnq-modal-mask"></div>
		<div class="jnq-modal" :class="[classes]" :style="styles"  ref="box">
			<div class="jnq-modal-h" @mousedown="mDown" >
				<slot name="header">
					<h3>{{title}}</h3>
					<button @click="closeHandle">X</button>
				</slot>
			</div>
			<div class="jnq-modal-c">
				<slot name="content">
					<p class="jnq-modal-message">{{content}}</p>
				</slot>
			</div>
			<div class="jnq-modal-f">
				<slot name="footer">
					<button @click="okBtn">{{okText}}</button>	
					<button @click="closeBtn">{{cancelText}}</button>
				</slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Modal',
		data () {
			return {
				visible: this.value
			}
		},
       	props:{
           type:{
				type:String,
				default:"info"
			},
			title:{
				type:String,
				default:'温馨提示'
			},
			okText:{
				type:String,
				default:'确定'
			},
			cancelText:{
				type:String,
				default:'取消'
			},
			width:{
				type:String,
				default:"300"
			},
			content:{
				type:String,
				default:'这里有一个消息要提示'
			},
			closeable:{
				type:Boolean,
				default:true
			},
			showicon:{
				type:Boolean,
				default:false
			},
			style:String,
			//是否允许点击遮罩层关闭
			maskClosable:{
				type:Boolean,
				default:true
			},
            //是否显示
            value:{
                type:Boolean,
                default:true
            }
        },
        computed:{
			classes(){
				return `m-modal-${this.type}`
			},
			iconClass(){
				return `m-icon-${this.type}`
			},
			styles(){
				let style = {};
				style.marginLeft = `${-this.width/2}px`;
                // if (this.height) {
                //     const height = (this.isLeftFixed || this.isRightFixed) ? parseInt(this.height) + this.scrollBarWidth : parseInt(this.height);
                //     style.height = `${height}px`;
                // }
                if (this.width) style.width = `${this.width}px`;
                return style;

			}
		},
        methods:{
            closeHandle(e){
				e.stopPropagation();
                this.visible = false;
				this.$emit("close-click");
			},
			okBtn(){
				this.$emit("on-ok");
			},
			closeBtn(){
				this.$emit("on-cancel");
			},
			//窗口拖拽事件
			mDown(e){
				let disX = e.offsetX;
				let disY = e.offsetY;
				let oBox = this.$refs.box;
				let self = this;
				document.onmousemove = function(e){
					oBox.style.left = e.clientX - disX + self.width/2 + "px";
					oBox.style.top = e.clientY - disY + "px";
				}
				document.onmouseup = function(){
					document.onmousemove = null;
					document.onmouseup = null;
				}
			}
	
        }
    };
</script>

<style lang="less" scoped>
	@import "../../style/components/modal.less";
</style>