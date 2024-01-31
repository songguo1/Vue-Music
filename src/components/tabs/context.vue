<script>
export default{
    name:"Content",
    data(){
        return{

        }
    },
    props:{
        showContent:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    render(){
        return(
            <div>{this.showContent.map((element,index)=>{
                return <div>{element.active ? element.$slots.default : ""}</div>
                })
            }            
            </div>
        )
    } 
}
</script>

<style>

</style>