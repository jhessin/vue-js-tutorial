window.dataVue = new Vue({
  el: '#someDiv',
  data: {
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

dataVue.stringData = 'Some other string';
