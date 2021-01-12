<template>
    <div class="container-fluid">
        <div v-for="part in form" v-if="isEnabled(part)" class="row d-flex">
            <template v-for="item in part.fields" v-if="isEnabled(item)">
                <div v-if="item.type && item.type != 'hidden'" class="px-3 py-1" style="flex:1">
                    <template v-if="item.type">
                        <component
                                :is="'v-'+item.type"
                                v-model="value[item.name]"
                                :name="item.name"
                                :id="item.id"
                                :label="item.label"
                                :error="getError(item)"
                                :required="item.required"
                                :type="item.type"
                                :placeholder="item.placeholder"
                                :readOnly="item.readOnly"
                                :empty="item.empty"
                                :options="item.options"
                                :config="item.config"
                                style="min-width: 200px;max-width:400px">
                        </component>
                    </template>
                </div>
                <!--<template v-else >-->
                    <!--<component v-if="value && typeof value[item.name] != 'undefined'" :is="'v-'+item.type" v-model="value[item.name]" :item="item" :errors="errors""></component>-->
                    <!--<component v-else :is="'v-'+item.type" :item="item" :errors="errors" ></component>-->
                <!--</template>-->
            </template>
        </div>
    </div>
</template>
<script type="text/javascript">
    import VText from './text.vue';
    import VSelect from './BasicSelect.vue';
    import VCheckbox from './Checkbox.vue';
    import VRadio from './Radio.vue';
    import VNumber from './Number.vue';
    import VHidden from './Hidden.vue';
    import VColor from './Color.vue';
    import VEmail from './Email.vue';
    import VDateTime from './DateTime.vue';
    import VDate from './Date.vue';
    import VPassword from './Password.vue';

    export default{
        props:['form','value','errors'],
        components:{
            VText,
            VSelect,
            VCheckbox,
            VNumber,
            VHidden,
            VRadio,
            VColor,
            VEmail,
            VDateTime,
            VDate,
            VPassword
        },
        methods:{
            isEnabled(part){
                if(typeof part.conditions == 'undefined'){
                    return true;
                }
                if(typeof part.conditions == 'function'){
                    let funct =  part.conditions.bind(this);
                    return funct(this.value);
                }
                return part.conditions;
            },
            getError(item){
                if(!this.errors || !item.name){
                    return false;
                }

                if(this.errors[item.name]){
                    if(Array.isArray(this.errors[item.name])){
                        return this.errors[item.name][0];
                    }else{
                        return this.errors[item.name];
                    }
                }else{
                    return false;
                }
            }
        }
    }
</script>