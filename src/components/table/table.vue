<template>
	<div >
		<table>
            <thead>
                <tr >
                    <th v-for="column in columns">{{column.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data">
                    <template v-if="renderType === 'selection'">
                        <td><input type="checkbox"  @change="change"></td>
                    </template>

                    <td v-for="coData in item">{{coData}}</td>
                    <td><button>删除</button></td>
                </tr>
            </tbody>
        </table>
	</div>
</template>

<script>
	export default {
        name:'mTable',
        props:{
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            columns: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        computed:{
            renderType(){
                return "selection";
            }
       },
       methods:{
           change(){
               console.log("点击了单选")
           }
       }
    };	
</script>

<style lang="less" scoped>
	@import "../../style/components/table.less";
</style>