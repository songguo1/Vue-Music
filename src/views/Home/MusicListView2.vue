<template>
    <div class="collection-block">
        <div class="block-padding">
            <div class="title">
                <h3>{{title}}</h3>
                <router-link :to="`/more/${type}`">更多</router-link>
                <!-- <router-link>: 这是 Vue Router 提供的组件，用于用户导航。它渲染成一个 <a> 标签，但与普通的 HTML 锚标签相比，它有一些额外的功能，如正确的 href 属性处理和激活时的高亮显示。
                :to="/more${type}": 这是 <router-link> 的 to 属性，它指定了当用户点击这个链接时应该导航到的路径。
                : 是 Vue 的语法糖，代表我们正在绑定一个属性。这意味着 to 的值是一个 JavaScript 表达式，而不是一个静态字符串。
                "/more${type}": 这里使用了模板字符串（由反引号 ``` 包围）。${type} 会被替换为变量 type 的实际值。这意味着你可以动态地构建 URL，取决于 type 的值。例如，如果 type 是 "books", 那么链接会指向 /morebooks。 -->
            </div>
            <div class="list clearfix">
                <router-link tag="div" :to="`/details/${item.id}`" class="item" v-for="(item,index) in musiclist" :key="index" :class="{'clear-padding':index%3!==1}">
                    <div class="img-warpper">
                        <img :src="item.picUrl" alt />
                    </div>
                    <div class="main">
                        {{cutString(item.name)}}
                    </div>
                    <div class="gray">
                     {{ cutString(item.copywriter) }}
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
      name:"MusicListView",
      data(){
        return{

        }
      },
      props:{
        musiclist:{
            type:Array,
            default:function(){
                
            }
        },
        title:{
            type:String,
            default:""
        },
        type:{
            type:String,
            default:1
        }
      },
      methods:{
        cutString(str){
            if(str.length >8){
                return str.substring(0,8)+"..."
            }
            return str;
        }
    }
}
</script>

<style scoped>
.collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
}

.block-padding {
    padding: 10px 17px;
    background-color: #fff;
}

.title {
    display: flex;
    margin: 14px 0 18px;
}

.title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
}

.list {
    width: 100%;
}

.list .item {
    float: left;
    width: 31.33%;
    padding: 0 10px;
    margin-bottom: 10px;
}

.clear-padding {
    padding: 0 !important;
}

.main {
    margin-top: 4px;
    font-size: 12px;
}

.gray {
    font-size: 12px;
    color: #999;
}

.btn-more {
    font-size: 12px;
    text-align: right;
    color: #333;
}
</style>