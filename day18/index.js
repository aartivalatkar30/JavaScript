async function Data() {
  try {
    const response = await fetch("https://fakestoreapi.com/products"); 
    const finalResponse = await response.json();
     console.log(finalResponse, "****response*****");

  } catch (error) {
    console.log(error);
  }
}

Data();
