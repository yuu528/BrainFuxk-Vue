import BFGenarate from './components/BFGenerate.vue';
import BFRun from './components/BFRun.vue';

export default {
  install (app, options = {}) {
    app.component('BFGenerate', BFGenarate);
    app.component('BFRun', BFRun);
  }
}
