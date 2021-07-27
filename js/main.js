const Main = {

  init: function(){
    this.cacheSelectors();
    this.bindEvents();
  },

  cacheSelectors: function() {
    this.$display = document.querySelector('#inpDisplay');
    this.$keys = document.querySelectorAll('.key');
    this.$operators = document.querySelectorAll('.operator');
  },

  bindEvents: function() {
    this.$keys.forEach(element => {
      element.onclick = (this.Events.keys_click).bind(this);
    });

    this.$operators.forEach(element => {
      element.onclick = (this.Events.operator_click);
    });
  },

  Events:{
    keys_click: function(e) {
      const value = String(e.target.value);
      
      this.$display.value += value
    },
    
    operator_click: function(e) {
      const value = e.target.value;
      console.log(value)
    },

  },

  
};

Main.init();