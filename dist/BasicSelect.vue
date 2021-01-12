<template>
    <div class="form-group">
        <label :for="id" class="text-capitalize">{{ label }}
            <span v-if="required" class="text-danger">*</span>
        </label>
        <select :name="name" :id="id" v-model="val" class="form-control" :class="{'is-invalid':haveError}" :required="required">
            <option value="" v-if="empty">{{ empty }}</option>
            <option v-for="(item,key) in getOptions" :value="key" :key="key" >{{ item }}</option>
        </select>
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
            id:{
                required:false,
            },
            empty:{
                required:false,
            },
            options:{
                required:true,
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
            },
            getOptions(){
                if(this.options){
                    return this.options;
                }
                //on pourras faire en sorte de passer une url pour egt les datas plus tard
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