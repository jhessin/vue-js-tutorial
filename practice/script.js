/* eslint-disable no-alert */
const firstVue = new Vue({
  el: '#firstDiv',
  data: {
    number: 1,
    numbers: [1, 2, 3],
    stringData: 'Some String',
    numberData: 1,
    booleanData: true,
    arrayData: [1, 2, 3],
    objectData: {
      objectString: 'object string',
      objectNumber: 2,
    },
  },
});

firstVue.stringData = 'Some other string';
firstVue.$watch('number', () => {
  // alert('number has changed');
});
firstVue.number = 10;

window.secondVue = new Vue({
  el: '#secondDiv',
  data: {
    isDoorOpen: false,
  },
  methods: {
    openCloseDoor() {
      this.isDoorOpen = !this.isDoorOpen;
    },
  },
});

Vue.component('grocery-item', {
  props: ['groceryitem'],
  template: '<li>{{ groceryitem.quantity }} {{ groceryitem.name }}</li>',
});

window.thirdVue = new Vue({
  el: '#thirdDiv',
  data: {
    groceryItems: [
      {
        name: 'Bread',
        quantity: 2,
      },
      {
        name: 'Cheese',
        quantity: 1,
      },
      {
        name: 'Apples',
        quantity: 4,
      },
    ],
  },
});
