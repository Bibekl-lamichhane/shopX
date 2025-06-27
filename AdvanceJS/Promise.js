// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am promise");
//     resolve("Sucessfully conected to the Network");
//     // reject("Network error")
//   });
// };

// const promise = getPromise();
// promise.then((result) => {
//   console.log("Congtaulations,", result);
// });
// // promise.catch((err)=>{
// //     console.log("Unable to connect",err)
// // })

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("sucess")
    }, 2000);
  });
}

getData(1).then((res)=>{
return getData(2)
}).then(()=>{
  return getData(3)
})