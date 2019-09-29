import Vue from 'vue'
import App from './App.vue'

//registring global directive here
Vue.directive('highlight',{
  bind(el,binding,vnode) {
    //el.style.backgroundColor = 'green';

    // to take a value from where directive is bind

    //el.style.backgroundColor = binding.value;

    // to take argument with directive as well (anything after v-directivename:"argument")

    // if(binding.arg === 'background'){
    //   el.style.backgroundColor = binding.value
    // } else {
    //   el.style.color = binding.value
    // }

    //now the leat but not the least "modifiers"

    let delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg === 'background'){
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
