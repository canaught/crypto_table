function fetchData() {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    fetch(url)
        .then((response)=>{
            console.log(response);
            return response.json();
        })
        .then((data)=>{
          console.log(data);
          let tableData = "";
          data.map((values)=>{
                tableData += `<tr>
                <td><img src="${values.image}" alt="image"></td>
                <td>${values.name}</td>
                <td>${values.symbol}</td>
                <td>${values.current_price}</td>
                <td class="${values.price_change_percentage_24h > 0 ? "positiveValues" : "negativeValues"}">${values.price_change_percentage_24h}</td>
                <td>${values.total_volume}</td>
                <td>${values.market_cap}</td>
                <td>${values.total_supply}</td>
            </tr>`
          })
          document.getElementById("table-body").innerHTML = tableData;  
        })
    
}

fetchData();