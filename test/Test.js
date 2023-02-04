const data = require("./data.json");

function divideByCategory(data) {
  data = data.filt;
}

function sortByCategory(data) {
  data = data.sort((a, b) => {
    data.forEach((e) => {
      a = e.category;
      b = e.category;
    });
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(data);
}
