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
    dataMarkup = data.quotes.map(function (q) {
      return (
        <div>
          <h2>{q.body}</h2>
          <p>{q.author}</p>
        </div>
      );
    });
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