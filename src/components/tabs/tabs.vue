<template>
    <div class="tabs">
        <div class="tabsHead">
            <div class="tabsHeadSub">
               <div class="tabs-tab" :class="tabCls(item)" v-for='(item,index) in navList'   @click="handleChange(index)">
                    {{item.label}}
                    <i></i>
                </div> 
            </div>
        </div>

        <div class="tabs-content" >
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Icon from '../icon/icon.vue';

    const prefixCls = 'ivu-tabs';

    export default {
        name: 'Tabs',
        components: { Icon },
        methods: {
            getTabs () {
                return this.$children.filter(item => item.$options.name === 'TabPane');
            },
            updateNav () {
                this.navList = [];
                this.getTabs().forEach((pane, index) => {
                    this.navList.push({
                        label: pane.label,
                        icon: pane.icon || '',
                        name: pane.currentName || index,
                        disabled: pane.disabled,
                        closable: pane.closable
                    });
                    if (!pane.currentName) pane.currentName = index;
                    if (index === 0) {
                        if (!this.activeKey) this.activeKey = pane.currentName || index;
                    }
                });
                this.updateStatus();
                this.updateBar();
            },
            updateBar () {
                // this.$nextTick(() => {
                //     const index = this.navList.findIndex((nav) => nav.name === this.activeKey);
                //     const prevTabs = this.$refs.nav.querySelectorAll(`.${prefixCls}-tab`);
                //     const tab = prevTabs[index];
                //     this.barWidth = parseFloat(getStyle(tab, 'width'));

                //     if (index > 0) {
                //         let offset = 0;
                //         const gutter = this.size === 'small' ? 0 : 16;
                //         for (let i = 0; i < index; i++) {
                //             offset += parseFloat(getStyle(prevTabs[i], 'width')) + gutter;
                //         }

                //         this.barOffset = offset;
                //     } else {
                //         this.barOffset = 0;
                //     }
                // });
            },
            updateStatus () {
                const tabs = this.getTabs();
                tabs.forEach(tab => tab.show = (tab.currentName === this.activeKey) || this.animated);
            },
            tabCls (item) {
                return {
                        active:item.name === this.activeKey
                    }
            },
            contentClasses () {
                return [
                    `${prefixCls}-content`,
                    {
                        [`${prefixCls}-content-animated`]: this.animated
                    }
                ];
            },
            handleChange (index) {
                console.log(index);
                const nav = this.navList[index];
                if (nav.disabled) return;
                this.activeKey = nav.name;
                this.$emit('input', nav.name);
                this.$emit('on-click', nav.name);
            }
           
        },
        data() {
            return{
                navList:[],
                activeKey: this.value
            }
        },
        computed:{
        },
        watch:{
             value (val) {
                this.activeKey = val;
            },
            activeKey () {
                this.updateBar();
                this.updateStatus();
                // this.broadcast('Table', 'on-visible-change', true);
            }
        }
    };
</script>


<style lang="less" scoped>
	@import "../../style/components/tabs.less";
</style>
