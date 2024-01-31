import { get } from "../utils/request"

const api={
    getnewsong(){
        return get("/api/personalized/newsong?limit=6");
    },
    getnewsongmore(){
        return get("/api/personalized/newsong");
    },
    login(params){
        return get("/api/login",params)
    },
    getRecommend(){
        return get("/api/personalized?limit=6")
    },
    getMusicDetails(params){
        return get("/api/playlist/detail",params)
    },
    getplayer(params){
        return get("/api/song/url",params)
    },
    getLRC(params){
        return get("/api/lyric",params)
    },
    getSearch(params){
        return get("/api/search",params)
    }

}
export default api