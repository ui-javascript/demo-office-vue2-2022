import Vue from 'vue'

// import VueCompositionApi, {computed, reactive, ref } from '@vue/composition-api';
// Vue.use(VueCompositionApi);
// import { useDateNow, usePagination } from "vue-composable";


const App = {
  template: `
    <div>
      hello
      
    </div>
    
  `,
  setup() {

    return {
     
    }
  }
}

Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App)
})
