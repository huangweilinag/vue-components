<template>
	<div class="modal">
        <div class="modal-header">
            <h4>{{modalTitle}}</h4>
        </div>
        <div class="modal-content">
            <div>
                <slot name="modal-content">在这里添加内容</slot>
            </div>
        </div>
        <div class="modal-footer">
            <slot name="modal-footer">
                <input class="btn blue" type="button" value="确定" @click="okHandle" />
                <input class="btn" type="button" value="取消" @click="cancelHandle" />
            </slot>  
        </div>
    </div>
</template>

<script>
	export default {
		name:'Modal',
       	props:{
            modalTitle:{
                type:String,
                default:'这是一个模态框'
            }
        },
        methods:{
            okHandle(){
                //通知父组件 点了确定
                alert("我触发了")
                this.$emit("on-ok");
            },
            cancelHandle(){
                alert('取消了');
                this.$emit('on-cancel')
            }
        }
    };
</script>

<style lang="less" scoped>
	@import "../../style/components/modal.less";
</style>