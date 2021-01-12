<template>
    <div class="form-group">
        <label :for="id" class="text-capitalize">{{ label }}
            <span v-if="required" class="text-danger">*</span>
        </label>
        <input type="email" class="form-control" :id="id" v-model="val" :name="name" :class="{'is-invalid':haveError}" :placeholder="placeholder" :required="required" :readOnly="readOnly">
        <span v-if="haveError" :id="id+'-error'" class="error invalid-feedback">{{ getError }}</span>
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
            label:{
                required:false,
                default:' '
            },
            required:{
                required:false
            },
            readOnly:{
                required:false
            },
            placeholder:{
                required:false
            },
            id:{
                required:false,
            }
        },
        data(){
            return {
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
            getError(){
                return this.error;
            },
            haveError(){
                return this.error;
            }
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