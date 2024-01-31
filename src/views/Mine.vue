<template>
    <div>
        <input type="text" v-model="username">
        <input type="password" v-model="password">
        <button @click="loginHandle">登录</button>
    </div>

</template>
  
<script>
export default {
      name:"Mine",
      data(){
        return{
            username:"",
            password:""
        }
      },
      methods:{
        loginHandle(){
            console.log(111)
            this.$api.login({
                email:this.username,
                password:this.password
            }).then(res=>{
                console.log(res)
            })
        }
      }
}
</script>

<style scoped>
input{
    border: 1px solid red;

}
</style>
  