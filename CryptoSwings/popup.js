
document.getElementById("back-button").onclick = function() {

	window.close();

}


document.getElementById("refresh-button").onclick = function() {
	koinexHit();
	bittrexHit();

}




koinexHit = function () {

  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
  
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);

      document.getElementById("bitcoin-koinex").innerHTML = "&#8377;" + Number(myObj.prices.inr.BTC).toFixed(0);
      document.getElementById("litecoin-koinex").innerHTML = "&#8377;" + myObj.prices.inr.LTC;
      document.getElementById("ethereum-koinex").innerHTML = "&#8377;" + myObj.prices.inr.ETH;
      document.getElementById("ripple-koinex").innerHTML = "&#8377;" + myObj.prices.inr.XRP;            

     
    }

  };

  xhttp.open("GET", "https://koinex.in/api/ticker", true);

  xhttp.send();

}




function bittrexHit() {
    
  var xhttp = new XMLHttpRequest();
  var xhttp2 = new XMLHttpRequest();
  var xhttp3 = new XMLHttpRequest();
  var xhttp4 = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
  
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);

      document.getElementById("bitcoin-bittrex").innerHTML = "$" + Number(myObj.result.Last).toFixed(2);

    }

  };

    xhttp2.onreadystatechange = function() {
  
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);

      document.getElementById("ethereum-bittrex").innerHTML = "$" + Number(myObj.result.Last).toFixed(2);

    }

  };

    xhttp3.onreadystatechange = function() {
  
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);


      document.getElementById("litecoin-bittrex").innerHTML = "$" + Number(myObj.result.Last).toFixed(2);

    }

  };


    xhttp4.onreadystatechange = function() {
  
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);

      document.getElementById("ripple-bittrex").innerHTML = "$" + Number(myObj.result.Last).toFixed(2);

    }

  };


  xhttp.open("GET", "https://bittrex.com/api/v1.1/public/getticker?market=USDT-BTC", true);

  xhttp2.open("GET", "https://bittrex.com/api/v1.1/public/getticker?market=USDT-ETH", true);

  xhttp3.open("GET", "https://bittrex.com/api/v1.1/public/getticker?market=USDT-LTC", true);

  xhttp4.open("GET", "https://bittrex.com/api/v1.1/public/getticker?market=USDT-XRP", true);



xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
xhttp.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  xhttp.send();

  xhttp2.send();

  xhttp3.send();

  xhttp4.send();

}



