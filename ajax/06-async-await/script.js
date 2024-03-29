"use strict";

const countriesContainer = document.querySelector(".countries");
const btn = document.querySelector(".btn-country");
const baseURL = "https://restcountries.eu/rest/v2/";
const countryByNameURL = baseURL + "name/";
const isoNameURL = baseURL + "alpha/";

const renderCountryCard = function (data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;

  return html;
};
const getCountryData = async function (
  url,
  fetchNeighbour = false,
  className = ""
) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Unable to fetch country.");
    }
    const data = await res.json();
    console.log(data);
    const countryObj = Array.isArray(data) ? [...data][0] : data; // retrieving first element of the response json array
    const html = renderCountryCard(countryObj);
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
    if (fetchNeighbour) {
      const [neighbour, ...other] = countryObj.borders;
      if (!neighbour) throw new Error("No neighbour exists!"); // Reject promise
      // retrieve neighboring country details after retrieving country's data
      getCountryData(`${isoNameURL}${neighbour}`, false, "neighbour"); // Return new Promise
    } // Consuming chained promise to render neighbouring country
  } catch (err) {
    alert(err.message);
  } finally {
    // Executing code irrespective of success/ failure of the promise
    console.log("Rendered data from the request.");
  }
};

btn.addEventListener("click", (event) => {
  event.preventDefault();
  //   getCountryData(`${countryByNameURL}australia`, true); // Raises Unable to fetch neighbouring country. error
  //   getCountryData(`${countryByNameURL}abc`, true); // Raises Unable to fetch country. error
  getCountryData(`${countryByNameURL}china`, true);
});
