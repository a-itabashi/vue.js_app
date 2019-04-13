import Vue from 'vue/dist/vue.esm'

const vm = new Vue({
  el: "#app",

  data: {
    name: 'A山B郎',
    cource: 'Webエンジニアコース',
    acceptance_period: '2019年01月期',
    default_last_id: 3,
    students: [
      { id: 1, name: '野呂浩良', cource: '機械学習コース', acceptance_period: '2019年01月期' },
      { id: 2, name: '富永修司', cource: 'Webエンジニアコース', acceptance_period: '2017年11月期' },
      { id: 3, name: '斉藤一起', cource: 'Webエンジニアコース', acceptance_period: '2017年11月期' }
    ]
  },
  methods: {
    addStudent: function(){
      if(this.name.length === 0 || this.cource.length === 0 || this.acceptance_period.length == 0){
        return
      };
      this.default_last_id++;
      let item = {
        id: this.default_last_id,
        name: this.name,
        cource: this.cource,
        acceptance_period: this.acceptance_period
      };

      this.students.push(item);
      this.name = "";
      this.cource = "";
      this.acceptance_period = "";
    }
  }
})

