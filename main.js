function start() {
    const ip = document.querySelector("#ip").value;
  
  const ipval = String(ip)
    const url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_bMwWZHSsbIZr2rwAx1TdxwOl1mk45=" + ipval ;
    
  
  console.log(url)
    iploc();
    
  }
  
    async function iploc() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }