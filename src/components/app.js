const Nav = require("./nav");
const QuoteSearch = require("./quoteSearch");

function App() {
  let pageTitle = "Quote";
  let navLinks = ["Home", "About", "Contact"];
  return (
    <main>
      <Nav title={pageTitle} navLinks={navLinks} />
      <QuoteSearch />
    </main>
  );
}

module.exports = App;
