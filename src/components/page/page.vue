<template>
	<div class="Page">
		<span>共{{ total }}条{{allPages}}页</span>
		<span>|</span>
		<span>当前第 {{currentPage}} 页</span>
		<span>|</span>
		<span>每页</span>
		<input class="input" type="text" v-model="currentPageSize" @blur = "totalBlur"/>
		<span>条</span>
		<span>|</span>
		<a href="javascript:;" @click="start" :class="{operability:startClass}">首页</a>
		<span>|</span>
		<a href="javascript:;" @click="prev" :class="{operability:prevClass}">上一页 </a>
		<span>|</span>
		<a href="javascript:;" @click="next" :class="{operability:nextClass}">下一页</a>
		<span>|</span>
		<a href="javascript:;" @click="end" :class="{operability:endClass}">尾页</a>
		<span>|</span>
		<span>跳到第</span>
		<input class="input" type="text" v-model="gopage" @blur = "pageBlur"/>
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
                this.startClass = false;
                this.prevClass = false;
                this.nextClass = false;
                this.endClass = false;
                if(num>1){
                    if(this.currentPage > 1){
                        this.startClass = true;
                        this.prevClass = true;
                    }
                    if(num > this.currentPage){
                        this.nextClass = true;
                        this.endClass = true;
                    }
                }
				return num;
			}
		},
		data() {
			return {
				currentPage:this.current,
				currentPageSize:this.pageSize,
                startClass:false,
                prevClass:false,
                nextClass:true,
                endClass:true,
                gopage:1
			}
		},
        methods:{
            changePage (page) {
                this.startClass = false;
                this.prevClass = false;
                this.nextClass = false;
                this.endClass = false;
                if(this.allPages>1){
                    if(page > 1){
                        this.startClass = true;
                        this.prevClass = true;
                    }
                    if(this.allPages > page){
                        this.nextClass = true;
                        this.endClass = true;
                    }
                }

                if (this.currentPage != page) {
                    this.currentPage = page;
                    this.$emit('on-change', page);
                }
            },
            prev () {
                if(!this.prevClass){
                    return false;
                }
                const current = this.currentPage;
                if (current <= 1) {
                    return false;
                }
                this.changePage(current - 1);
            },
            next () {
                if(!this.nextClass){
                    return false;
                }
                const current = this.currentPage;
                if (current >= this.allPages) {
                    return false;
                }
                this.changePage(current + 1);
            },
            start () {
                if(!this.startClass) {
                    return false;
                }
            	this.changePage(1);
            },
            end () {
                if(!this.endClass){
                    return false;
                }
            	this.changePage(this.allPages);
            },
            totalBlur(){
                console.log( this.currentPageSize )
            },
            pageBlur(){
                console.log( this.gopage )
            }

        }
    };	
</script>

<style lang="less" scoped>
	@import "../../style/components/page.less";
</style>