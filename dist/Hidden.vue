<template>
    <div class="form-group">
        <input type="hidden" class="form-control" :id="id" v-model="val" :name="name" :required="required" :readOnly="readOnly">
    </div>
</template>
<script type="text/javascript">
    export default{
        props:{
            error:{
                required:false,
            },
            config:{
                required:false,
                type:Object
            },
            value:{
                required:false,
            },
            name:{
                required:false,
            },
            required:{
                required:false
            },
            id:{
                required:false,
            }
        },
        computed:{
            val:{
                get(){
                    return this.value;
                },
                set(value){
                    this.$emit('input',value);
                }
            },
        },
        created(){
            //init les config particuliere
            if(this.config){
                for (let key in this.config){
                    this.$set(this,key,this.config[key]);
                }
            }
        }
    }
</script>