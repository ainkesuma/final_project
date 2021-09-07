const { useState } = require("react");

function QuoteSearch() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  let dataMarkup = "";
  if (data !== null) {
    console.log(data.quotes);
    dataMarkup = data.quotes.map(function (q) {
      return (
        <div style={
          {paddingTop: "10px", paddingBottom: "10px", border: "2px solid black"}
          }>
          <h2>{q.body}</h2>
          <p>{q.author}</p>
        </div>
      );
    });
  }

  function updateTitle(event) {
    setTitle(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    let url = `https://favqs.com`;
    let queryString = `/api/quotes/?apikey=87c9b60580e54ff8111b262351ff9c85&filter=${title}`;
    //Authorization: Token token="YOUR_APP_TOKEN
    let httpOptions = { 
      method: "GET",
      headers : {
        Authorization : `Token token="87c9b60580e54ff8111b262351ff9c85"`
      }
    };
    function waitForData(response) {
      return response.json();
    }
    function processData(data) {
      setData(data);
    }

    fetch(url + queryString, httpOptions)
      .then(waitForData)
      .then(processData);
  }

  return (
    <center>
      <div style={{ paddingTop: "100px", paddingBottom: "100px"}}>
        <form onSubmit={search}>
          <input
            type="text"
            placeholder="Search for a Quote.."
            value={title}
            onChange={updateTitle}
          />
          
          <input type="submit" value="Search" />
        </form>
        <div>{dataMarkup}</div>
      </div>
    </center>
  );
}

module.exports = QuoteSearch;