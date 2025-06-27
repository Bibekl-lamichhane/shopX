function getData(getId, getNextData) {
  setTimeout(() => {
    console.log("data", getId);
    if (getNextData) {
      getNextData();
    }
  }, 3000);
}
getData(1, () => {
  console.log("Fetching data 2....");
  getData(2, () => {
    console.log("Fetching data 3...");
    getData(3, () => {
      console.log("Fetching data 4...");
      getData(4);
    });
  });
});
