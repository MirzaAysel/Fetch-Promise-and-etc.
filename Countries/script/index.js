fetch("https://restcountries.com/v3.1/region/asia")
  .then(function (data) {
    return data.json();
  })
  .then(function (tutdata) {
    tutdata.forEach((data) => {
      let [capital] = data.capital;
      document.querySelector(".countries").innerHTML += `
     <div class="col-3 m-3">
     <div class="card">
            <img
              src="${data.flags.png}"
              class="card-img-top img-fluid"
              alt="country"
            />

            <ul class="list-group list-group-flush">
              <li class="list-group-item">Country: <span>${
                data.name.common
              }</span></li>
              <li class="list-group-item">Capital: <span>${capital}</span></li>
              <li class="list-group-item">Currency: <span>${
                Object.values(data.currencies)[0].name
              }</span></li>
              <li class="list-group-item">Language: <span>${Object.values(
                data.languages,
              ).join(", ")}</span></li>
              <li class="list-group-item">Populations:<span> ${
                data.population
              }</span></li>
              <li class="list-group-item">TimeZone: <span>${data.timezones.join(
                ",",
              )}</span></li>
            </ul>
          </div>
     </div>
      `;
    });
  });
