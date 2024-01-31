<template>
    <div class="lrcContainer">
      <div class="lrc" ref="lrc">
          <p class="lrc-p" :class="{ 'isactive': currentTime > allKeys[index] && currentTime < allKeys[index+1] }" v-for="(item,key,index) in lrcData" :key="index">
              <span>{{ item }}{{ scrollLRC(index) }}</span>
          </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name:"LRC",
      data(){
          return{
              lrcData:"",
              allKeys:[]
          }
      },
      props:{
          id:{
              type:[String,Number],
              required:true
          },
          currentTime:{
              type:Number,
              default:0
          },

      },
      mounted(){
          this.$api.getLRC({
              id:this.id
          }).then(res =>{
              this.lrcData = res.lrc.lyric
              this.filterLRC(res.lrc.lyric)
          })
      },
      methods:{
          
          filterLRC(values){
              if(!values) return;
              var lrc = {};
              var lyrics = values.split("\n"); // 有问题，有的是 \n 有的是 空格
              var reg = /\[\d*:\d*(\.|:)\d*]/g;
              for(var i = 0;i<lyrics.length;i++){
                  var timeRegArr = lyrics[i].match(reg);
                  if(!timeRegArr) continue;
                  // 获取歌词
                  var content = lyrics[i].replace(timeRegArr,"");
                  // 获取时间
                  var t = timeRegArr[0];
                  var min = parseInt(t.match(/\[\d*/i).toString().slice(1));
                  var sec = parseInt(t.match(/\:\d*/i).toString().slice(1));
                  var time = min * 60 + sec;
                  lrc[time] = content;
              }
              this.lrcData = lrc;
              this.getAllKeys(lrc)
          },
          getAllKeys(lrcArr){
              for(var key in lrcArr){
                  this.allKeys.push(key)
              }
          },
          scrollLRC(index){
              if(this.currentTime > this.allKeys[index] && this.currentTime < this.allKeys[index+1]){
                  this.$refs.lrc.style.top = -(30 * (index - 2)) +"px"
              }
          }
      }
  }
  </script>
  
  <style>
  .isactive {
      color: red;
  }
  
  .lrcContainer {
      width: 100%;
      height: 150px;
      overflow: scroll;
      position: relative;
  }
  
  .lrc {
      width: 100%;
      position: absolute;
      top: 0;
  }
  
  .lrc-p {
      height: 30px;
      line-height: 30px;
  }
  
  .up30 {
      margin-top: -30px;
  }
  
  </style>