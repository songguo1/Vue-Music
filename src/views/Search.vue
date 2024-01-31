<template>
  <div>
    <input type="text" v-model="search">
    <button @click="searchHandle">搜索</button>
    <ul>
      <router-link tag="li" :to="`/player/${item.id}/${item.name}/${setUrl(item.album.artist.img1v1Url)}`"
        v-for="(item, index) in searchData" :key="index">
        <div class="img-warpper">
          <img :src="item.album.artist.img1v1Url" alt />
        </div>
        <div class="main">
          {{ cutString(item.name) }}
        </div>
      </router-link>
    </ul>
  </div>
</template>
  
<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
      searchData: []
    }
  },
  methods: {
    cutString(str) {
      if (str.length > 8) {
        return str.substring(0, 8) + "..."
      }
      return str;
    },
    searchHandle() {
      this.$api.getSearch({
        keywords: this.search
      }).then(res => {
        this.searchData = res.result.songs
        console.log(this.searchData)
      })
    },

    setUrl(url) {
      if (url) {
        return encodeURIComponent(url)
      }
    },
  }
}
</script>
