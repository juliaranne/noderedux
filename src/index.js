fetch("/api/map", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  // body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((response) => console.log(response.key));
