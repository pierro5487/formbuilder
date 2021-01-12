/*!
 * vue_form_builder_bootstrap4 v0.0.1
 * (c) Aubrion pierre
 * Released under the ISC License.
 */
'use strict';

var FormBuilder = require('dist/FormPart.vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var FormBuilder__default = /*#__PURE__*/_interopDefaultLegacy(FormBuilder);

var index = {
  install: function install(Vue, options) {
    Vue.component('form-part', FormBuilder__default['default']);
  }
};

module.exports = index;
