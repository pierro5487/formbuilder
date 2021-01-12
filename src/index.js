import FormBuilder from '../dist/FormPart.vue';

export default{
    install(Vue,options){
        Vue.component('form-part',FormBuilder);
    }
}