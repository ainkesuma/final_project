const { useState, useEffect} = require("react");

function RandomQuote() {
  const [data, setData] = useState(null);
  useEffect(function() {
    let url = `https://favqs.com`;
    let queryString = `/api/qotd`;
    let httpOptions = {
      method: "GET",
    };
    function waitForData(response) {
      return response.json();
    }
    function processData(data) {
      console.log(data);
      setData(data);
    }

    fetch(url + queryString, httpOptions)
      .then(waitForData)
      .then(processData);
  }, []);

  let dataMarkup = "";
  if (data !== null) {
    console.log(data);
    dataMarkup = (
      <div style={
        {paddingTop: "10px", paddingBottom: "10px", border: "2px solid black"}
        }>
        <h3>{data.quote.body}</h3>
        <p>{data.quote.author}</p>
      </div>
    );
  }

    

  return (
    <center>
      <div style={{ paddingTop: "10px" }}>
      <p>Your random quote is : {dataMarkup}</p>
      </div>
    </center>
  );
}

module.exports = RandomQuote;