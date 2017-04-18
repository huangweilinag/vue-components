<template>
	<div class="examples">
        <ul class="ex-list">
            <li><router-link to="/alert">Alert消息提示</router-link></li>
            <li> <router-link to="/modal">Modal对话框</router-link></li>
            <li><router-link to="/page">Page分页器</router-link></li>
            <li><router-link to="/table">Table表格</router-link></li>
            <li><router-link to="/tabs">Tabs切换</router-link></li>
        </ul>
        <div class="ex-content">
            <router-view></router-view>
        </div>

	</div>
</template>


<script>
	export default {

	}
</script>

<style >
    html,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img{margin:0;padding:0;}
    body{font-size:12px;color:#000;font-family:"微软雅黑";}
    ul,ol,li{list-style:none;}
    a,u{text-decoration:none;}
    img{border:0;display:block;}
    h1,h2,h3,h4,h5,h6{font-weight:100;font-size:16px;}
    em,i{font-style:normal;}
    b,strong{font-weight:100;}
    input{outline:none;}

    .clearfix:after{content:".";display:block;clear:both;height:0;overflow:hidden;visibility:hidden;}
    .l{float: left;}
    .r{float: right;}


    html,body,#app{
        width:100%;
        height:100%;
    }

    .examples{
        height:100%;
    }

   li{
       list-style:none;
   };

   .ex-list{
       width:100px;
       height:100%;
       background:#ddd;
       float:left;
   }

   .ex-content{
       width:75%;
       height:100%;
       float:right;
   }
</style>