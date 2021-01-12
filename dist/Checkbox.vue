<template>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" :id="id" v-model="val" :name="item.name" :class="{'is-invalid':haveError}" :placeholder="item.placeholder" :required="item.required" :readOnly="item.readOnly" true-value=1 false-value=0>
        <label :for="id" class="text-capitalize custom-control-label">{{ item.label }}
            <span v-if="item.required" class="text-danger">*</span>
        </label>
        <span v-if="haveError" :id="id+'-error'" class="error invalid-feedback">{{ getError }}</span>

    </div>
</template>
<script type="text/javascript">
    export default{
        props:['item','value','errors'],
        computed:{
            val:{
                get(){
                    if(this.value === true || this.value === '1'){
                        return '1';
                    }
                    return '0';
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
            this.id = this.item.type + '-' + Math.floor(Math.random() * 100000000);
        }
    }
</script>