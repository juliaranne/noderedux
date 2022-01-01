const data = { address: "81 Shahl Lane", city: "Pinner" };

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
