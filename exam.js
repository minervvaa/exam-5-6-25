// All the const :
const allCountries = [];
const allB = document.querySelector("#allBtn");
const searchB = document.querySelector("#searchBtn");
const resultsDiv = document.querySelector("#results");
const input = document.querySelector("input").value;


class Contry {
    constructor(name, poulation, region, currencies) {
        this.contryNmae = name;
        this.contryPoulation = poulation;
        this.contryRegion = region;
        this.contryCurrencies = currencies;
    }
}


async function data() {
    const ulr = "https://restcountries.com/v3.1/all?fields=name,population,region,currencies";

    try {
        const res = await fetch(ulr);
        const resJ = await res.json();

    } catch (error) {
        console.log(error);

    }

}

// async function total() {
// const poulationUrl = "https://restcountries.com/v3.1/all?fields=population,name"

// }

async function nameSchedul() {
    const namesTabel = document.createElement("table");
    namesTabel.id = "namesTable"

    let schedul;
    try {
        schedul = await allCntr();
    } catch (error) {
        console.log("the fetch is not working");
    }

    namesTabel.innerHTML = `
    <table>
        <thead>
          <th>Contry Name</th>  
          <th>Number of citizens</th>  
        </thead> 
    </tbody>
    `

    namesTabel.forEach(
        (Contry) => {
            tableHtml += `
                <tr>
                    <td>${Contry.name}</td>
                </tr>`
        }

    )
}


async function regionSchedul() {
    const regionTable = document.createElement("table");
    region.id = "regionID"

    let schedul;
    try {
        schedul = await allCntr();
    } catch (error) {
        console.log("the fetch is not working");
    }

    regionTable.innerHTML = `
    <table>
        <thead>
          <th>Region</th>  
          <th>Number of conutries</th>  
        </thead> 
    </tbody>
    `

   regionTable.forEach(
        (Contry) => {
            tableHtml += `
                <tr>
                    <td>${Contry.region}</td>
                </tr>`
        }

    )
}

