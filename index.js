// Function to fetch data from the REST Countries API and process it using promises
function fetchCountriesData() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(processCountriesData)
        .catch(error => console.error('Error fetching the countries data:', error));
}

// Function to process the countries data
function processCountriesData(countriesData) {
    // a: Get all the countries from Asia continent/region
    const asianCountries = countriesData.filter(country => country.region === 'Asia');

    console.log('Asian Countries:');
    asianCountries.forEach(country => {
        console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'N/A'}, Flag: ${country.flags.png}`);
    });

    // b: Get all the countries with a population of less than 2 lakhs
    const smallPopulationCountries = countriesData.filter(country => country.population < 200000);

    console.log('Countries with population less than 2 lakhs:');
    smallPopulationCountries.forEach(country => {
        console.log(`Name: ${country.name.common}, Population: ${country.population}`);
    });

    // c: Print the following details name, capital, flag using forEach method
    console.log('Details of all countries:');
    countriesData.forEach(country => {
        console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'N/A'}, Flag: ${country.flags.png}`);
    });

    // d: Print the total population of countries
    const totalPopulation = countriesData.reduce((acc, country) => acc + country.population, 0);
    console.log(`Total Population: ${totalPopulation}`);

    // e: Print the countries that use US dollars as currency
    const usdCountries = countriesData.filter(country =>
        country.currencies && Object.values(country.currencies).some(currency => currency.name === 'United States dollar')
    );

    console.log('Countries using US dollars:');
    usdCountries.forEach(country => {
        console.log(`Name: ${country.name.common}, Currency: United States dollar`);
    });
}

// Fetch and process the data
fetchCountriesData()
