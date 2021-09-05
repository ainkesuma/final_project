const { BrowserRouter, Switch, Route } = require("react-router-dom");
const Nav = require("./nav");
const QuoteSearch = require("./quoteSearch");
const RandomQuote = require("./randomQuote")


function App() {
  
  return (
    <BrowserRouter>
    <Nav/>
    <Switch>
    <Route path="/quoteSearch">
          <QuoteSearch />
        </Route>
        <Route path="/randomQuote">
          <RandomQuote />
        </Route>
    </Switch>
    </BrowserRouter>
  );
}

module.exports = App;
