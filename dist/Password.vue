<template>
    <div class="form-group">
        <label :for="id" class="text-capitalize">{{ label }}
            <span v-if="required" class="text-danger">*</span>
        </label>
        <div class="input-group mb-2">
            <input :type="typeInput" class="form-control" :id="id" v-model="val" :name="name" :class="{'is-invalid':haveError}" :placeholder="placeholder" :required="required" :readOnly="readOnly">
            <div class="input-group-append" v-if="enableSeePassword">
                <div class="input-group-text" @click="toggleSee">
                    <i v-if="typeInput == 'text'" class="fas fa-eye"></i>
                    <i v-else class="fas fa-eye-slash"></i>
                </div>
            </div>
        </div>
        <span v-if="haveError" :id="id+'-error'" class="error invalid-feedback" style="display: block">{{ getError }}</span>
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
                typeInput:'password',
                enableSeePassword:true
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
        },
        methods:{
            toggleSee(){
                if(this.typeInput == 'text'){
                    this.$set(this,'typeInput','password');
                }else{
                    this.$set(this,'typeInput','text');
                }
            }
        }
    }
</script>