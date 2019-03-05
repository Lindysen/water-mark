import Vue from 'vue'
import App from './App.vue'
import bootstrap from './bootstrap';
import watermarkCallback, { watermarkConfig } from './utils/watermark';

Vue.config.productionTip = false;

const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
Vue.directive('watermark',{
  bind(el,binding){
    if (binding.value === undefined || !!binding.value) {
      el.style.backgroundImage = `url('${window['@waterInfo']}')`;
      el.style.backgroundRepeat = 'space repeat';
      const om = new MutationObserver(watermarkCallback);
      om.observe(el, watermarkConfig);
    }
  },
  update(el,binding){
    if (binding.value === undefined || !!binding.value) {
      el.style.backgroundImage = `url('${window['@waterInfo']}')`;
      el.style.backgroundRepeat = 'space repeat';
    }
  }
});
bootstrap().then(() => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
});
