function getData() {
  console.log("Inside data function")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = fetch("https://fakestoreapi.com/products"); 
      console.log("result"+result)
      if (result) {
        resolve("*******Data successfully recevied.*********");
      } else {
        reject("Failed.");
      }
    }, 4000);
  });
}
getData()
  .then((response) => {
    console.log(response, "response");
  })
  .catch((error) => {
    console.error(error, "error");
  });