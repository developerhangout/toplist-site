import sourceData from '../data/data.js';
console.log(sourceData);

window.onload = () => {
  let app = new Vue({
    el: "#app",
    data: {
      content: "Hello Vue!",
      items: sourceData.data
    }
  });
};
