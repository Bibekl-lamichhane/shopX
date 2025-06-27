function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("sucess")
    }, 2000);
  });
}


(async function getAllData(){
    await getData(1).then((res)=>{
        console.log(res)
    })
    await getData(2).then((res)=>{
        console.log(res)
    })
    await getData(3).then((res)=>{
        console.log(res)
    })
    await getData(4).then((res)=>{
        console.log(res)
    })
})()