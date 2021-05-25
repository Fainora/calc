
new Vue({
  el: '#app',
  data: {
    value: 0,
    logs: [] },

  methods: {
    options: function (sign) {
      if (Number.isInteger(this.value))
        this.value = '';
      this.value += sign;
    },
    result: function() {
      var log = this.value;
      this.value = eval(this.value);
      this.logs.push(log + ('=' + this.value));
    },
    radical: function() {
      this.value = Math.sqrt(this.value);
    },
    square: function() {
      this.value = Math.pow(this.value, 2);
    },
    func: function() {
      this.value = 1 / this.value;
    },
    percent: function() {
      this.value = this.value / 100;
    },
    clear: function() {
      this.value = 0;
      this.logs = [];
    },
    back: function() {
      this.value = this.value.slice(0, -1);
    }, 
  },
});