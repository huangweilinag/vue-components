<template>
	<div class="Page">
		<span>共{{ total }}条{{allPages}}页</span>
		<span>|</span>
		<span>当前第 {{currentPage}} 页</span>
		<span>|</span>
		<span>每页</span>
		<input class="input" type="text" :value="currentPageSize"/>
		<span>条</span>
		<span>|</span>
		<a href="javascript:;" @click="start">首页</a>
		<span>|</span>
		<a href="javascript:;" @click="prev">上一页 </a>
		<span>|</span>
		<a href="javascript:;" @click="next">下一页</a>
		<span>|</span>
		<a href="javascript:;" @click="end">尾页</a>
		<span>|</span>
		<span>跳到第</span>
		<input class="input" type="text" value="1" />
		<span>页</span>
	</div>
</template>

<script>
	export default {
        name:'Page',
       	props:{
 			//当前页码
       		current: {
                type: Number,
                default: 2
            },
            //数据总数
            total: {
                type: Number,
                default: 40
            },
            //每页条数
            pageSize: {
                type: Number,
                default: 10
            },
        },
        computed:{
			allPages(){
				let num = Math.ceil(this.total/this.pageSize);
				return num;
			}
		},
		data() {
			return {
				currentPage:this.current,
				currentPageSize:this.pageSize
			}
		},
        methods:{
            changePage (page) {
                if (this.currentPage != page) {
                    this.currentPage = page;
                    this.$emit('on-change', page);
                    console.log("页面发生了改变")
                }
            },
            prev () {
                const current = this.currentPage;
                if (current <= 1) {
                    return false;
                }
                this.changePage(current - 1);
                console.log("1111111")
            },
            next () {
                const current = this.currentPage;
                if (current >= this.allPages) {
                    return false;
                }
                this.changePage(current + 1);
            },
            start () {
            	this.changePage(1);
            },
            end () {
            	this.changePage(this.allPages);
            }
        }
    };	
</script>

<style lang="less" scoped>
	@import "../../style/components/page.less";
</style>