"use strict";

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    text: 'Tryout the double databinding!'
  },
  methods: {
    reverseMessage: function() {
      this.message = 'Vue is awesome!'
    }
  }
});