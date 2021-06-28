var app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),


    data () {
      return {
        menu: [
          { icon: 'home', title: 'Link A' },
          { icon: 'info', title: 'Link B' },
          { icon: 'warning', title: 'Link C' }
        ]
      }
    },

    methods: {
      menuItems () {
        return this.menu
      }
    }



})
