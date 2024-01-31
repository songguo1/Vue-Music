<template>
    <div>
      <div>
        <div class="header">
            <router-link tag="span" to="/">&lt;</router-link>
            <h3>更多歌曲</h3>
        </div>
      </div>
    <div class="list clearfix">
        <div class="item" v-for="(item,index) in moreDatas" :key="index" :class="{'clear-padding':index%3!==1}">
            <div class="img-warpper">
                <img :src="item.picUrl" alt />
            </div>
            <div class="main">
                {{cutString(item.name)}}
            </div>
            <div class="gray">
                {{ cutString(item.song.artists[0].name) }}
            </div>
        </div>
    </div>
    <div ref="loadmore">加载更多</div>
</div>
</template>
  
<script>
export default {
      name:"More",
      data(){
        return{
            moreDatas:[],
            limit:0
        };
      },
      mounted(){
        
        this.http(this.limit);
        var timer = null;
        // 触底加载更多的事件
        const winHeight = document.documentElement.clientHeight;
        window.addEventListener("scroll", () => {
            if (this.$refs.loadmore) {
                let currentHeight = this.$refs.loadmore.getBoundingClientRect()
                    .top;
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    if (winHeight > currentHeight) {
                        this.http(this.limit);
                    }
                }, 300);
            }
        });
    },
     
      methods:{
        http(limit) {
            this.$api.getnewsongmore({limit:limit}).then(res => {
                    if (res.result) {
                        // concat:视图不会更新
                        this.moreDatas.push(...res.result);
                        this.limit += 15;
                        console.log(res)
                    } else {
                        this.$refs.loadmore.innerHTML = "别拽了，没有数据了";
                    }
                });
        },
        cutString(str){
            if(str.length >8){
                return str.substring(0,8)+"..."
            }
            return str;
        }}
}
</script>

<style>
.header{
    width:100%;
    background:#fff;
    text-align:center;
    overflow:hidden;
    clear:both;
}
.header span{
    display:block;
    float:left;
    line-height:40px;
}
.header h3{
    line-height:40px;
    display:inline-block
}
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