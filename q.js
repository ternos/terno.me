// const apiKey = process.env.TABLE_API_KEY
const url = "https://api.airtable.com/v0/app21tWfi7qHqWEjJ/Quotes";
const options = {
    headers: {
      Authorization: `Bearer ${process.env.TABLE_API_KEY}`
    }
  };

let g = '';

fetch(url, options)
.then( res => res.json() )
.then( data => {
    let random = Math.floor(Math.random() * data.records.length)
    g += data.records[random].fields.quote
    document.querySelector('.moto').innerText = g
} );