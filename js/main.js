const Main = {

  init: function(){
    this.cacheSelectors();
    this.bindEvents();
  },

  cacheSelectors: function() {
    this.display = document.querySelector('#inpDisplay');
    this.keys = document.querySelectorAll('.key');
  },

  bindEvents: function() {
    this.keys.forEach(addEventListener('click', (e) => {
      const value = e.target.value
      console.log(value);
    }));
  },

  Events: function() {

  },
};

Main.init();