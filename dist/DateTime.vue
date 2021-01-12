<template>
    <div class="form-group">
        <label v-if="label" :for="id" class="text-capitalize">{{ label }}
            <span v-if="required" class="text-danger">*</span>
        </label>
        <!--<input type="text" class="form-control" :id="id" v-model="val" :name="name" :class="{'is-invalid':haveError}" :placeholder="placeholder" :required="required" :readOnly="readOnly">-->
        <flat-pickr class="form-control" :config="timePicker" v-model="val"></flat-pickr>
        <span v-if="haveError" :id="id+'-error'" class="error invalid-feedback">{{ getError }}</span>
    </div>
</template>
<script type="text/javascript">
    export default{
        props:{
            errors:{
                required:false,
            },
            item:{
                required:false,
                type:Object
            },
            value:{
                required:false,
            },
        },
        data(){
            return {
                type:'dateTime',
                label:false,
                name:null,
                required:false,
                readOnly:false,
                timePicker:{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "H:i",
                    defaultDate: "13:45",
                    static:true,
                    time_24hr:true
                },
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
                return this.errors[this.item.name][0];
            },
            haveError(){
                return this.errors && typeof this.errors[this.item.name] != 'undefined';
            }
        },
        created(){
            this.id = this.type + '-' + Math.floor(Math.random() * 100000000);

            this.name = this.id;

            for (let key in this.item){
                this[key] = this.item[key];
            }

        }
    }
</script>