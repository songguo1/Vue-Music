<script>
export default{
    name:"Tab",
    props:{
        label:{
            type:String,
            default:"tab"
        },
        index:{
            type:String,
            default:"1"
        }
    },
    computed:{
        active(){
            return this.$parent.defaultActiveKey==this.index;
        }
    },
    mounted(){
        this.$parent.showContent.push(this)
    },
    methods:{
        clickTabHandle(){
            this.$parent.updateDefaultKey(this.index)
        }
    },
    render(){
        const classStyle={
            tab:true,
            active:this.active
        }
        return(
            <li onClick={this.clickTabHandle} class = { classStyle } >{this.label}</li>
        )
    }
}
</script>

<style scoped>
.tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}

.tab.active {
    border-bottom: 2px solid blue;
}
</style>