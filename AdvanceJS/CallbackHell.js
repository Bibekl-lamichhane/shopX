// function getData(getId, getNextId) {
//   setTimeout(() => {
//     console.log("Your data is :", getId);
//     if (getNextId) {
//       getNextId();
//     }
//   }, 3000);
// }
// getData(1, () => {
//   console.log("Fetching 2nd data...");
//   getData(2, () => {
//     console.log("Fetching 3rd data...");
//     getData(3, () => {
//       console.log("Fetching 4th data...");
//       getData(4);
//     });
//   });
// });

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});
