<template>
    <div>
        <MusicListView1 type="1" title="推荐歌曲" :musiclist="newMusic"/>
        <MusicListView2 type="2" title="推荐歌单" :musiclist="recommend"/>
        <!-- <MusicListView2 type="2" title="热歌榜" :musiclist="hotMusic"/>
        <MusicListView2 type="3" title="摇滚榜" :musiclist="rockMusic"/> -->
    </div>
</template>
  
<script>
import MusicListView1 from './MusicListView1.vue';
import MusicListView2 from './MusicListView2.vue';

export default {
    name:"MusicList",
    data(){
        return{
            newMusic:[],
            recommend:[]

        }
    },
    mounted(){
        this.$api.getnewsong().then(res => {
            console.log(res);
            this.newMusic=res.result
         });
        this.$api.getRecommend().then(res => {
            console.log(res);
            this.recommend=res.result
         });
    },
    components: { MusicListView1,
              MusicListView2 }
}
</script>