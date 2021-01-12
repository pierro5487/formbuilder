<template>
    <div class="form-group">
        <label v-if="label" :for="id" class="text-capitalize">{{ label }}
            <span v-if="required" class="text-danger">*</span>
        </label>
        <input type="text" v-if="readOnly" class="form-control" :id="id" :value="getFormatedDate" :name="name" :class="{'is-invalid':haveError}" :required="required" :readOnly="readOnly">
        <flat-pickr v-else class="form-control" :id="id" :name="name" :config="timePicker" :readOnly="readOnly" :class="{'is-invalid':haveError}" :required="required" v-model="val"></flat-pickr>
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
        },
        data(){
            return {
                timePicker:{
                    enableTime: false,
                    dateFormat: "Y-m-d",
                    altInput: true,
                    altFormat: "d/m/Y",
                    defaultDate: moment().format('YYYY-MM-DD HH:mm:ss'),
                },
            }
        },
        computed:{
            getFormatedDate(){
                return moment(this.val,'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY');
            },
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

            //donne le default date au model (si pas modif ,il ne remontrait pas dans le v-model)
            if(typeof this.value == 'undefined'){
                if(this.timePicker.defaultDate){
                    this.$set(this,'val',this.timePicker.defaultDate);
                }
            }
        }
    }
</script>