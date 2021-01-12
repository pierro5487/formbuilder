<template>
    <div>
        <div>
            <label v-if="label" for="">{{ label }}</label>
        </div>
        <div class="flex-fill">
            <div class="form-check form-check-inline" v-for="(option,index) in options" :key="index">
                <input class="form-check-input" type="radio" v-model="val" :id="'radio_'+option.value" :name="name" :value="option.value" :class="{'is-invalid' : haveError}">
                <label class="form-check-label" :for="'radio_'+option.value">{{ option.libelle}}</label>
            </div>
            <div v-if="haveError" class="invalid-feedback text-danger d-block">
                {{ getError }}
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        props:{
            options:{
                required:true,
                type:Array
            },
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
                type:'radio',
                id:null,
                name:null,
                label:false
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