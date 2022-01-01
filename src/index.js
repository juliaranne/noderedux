const data = { address: "59 Love Lane", city: "Pinner" };

fetch("/api/map", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
  mode: "cors",
})
  .then((response) => response.json())
  .then((response) => console.log(response.key));
