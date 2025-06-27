// function getData(getId, getNextId) {
//   setTimeout(() => {
//     console.log("Your data is :", getId);
//     if (getNextId) {
//       getNextId();
//     }
//     if (getId == null) {
//       const promise = getPromise(false);
//       promise.catch((err) => {
//         console.log("Error Occured", err);
//       });
//     }
//     if (getId == 4) {
//       const promise = getPromise(true);
//       promise.then((res) => {
//         console.log("Congratulation", res);
//       });
//     }
//   }, 3000);
// }

// const getPromise = (shouldSucessed) => {
//   return new Promise((resolve, reject) => {
//     if (shouldSucessed) {
//       resolve("Data fetched sucessfully");
//     } else {
//       reject("Unable to fetch data");
//     }
//   });
// };
// const arr=[1,2,3,4]
// for(let i=0;i<arr.length;i++){
// getData(arr[i], () => {
//   console.log("Fetching 2nd data...");
//   getData(2, () => {
//     console.log("Fetching 3rd data...");
//     getData(3, () => {
//       console.log("Fetching 4th data...");
//       getData(4);
//     });
//   });
// });

// }

