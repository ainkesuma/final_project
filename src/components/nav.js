const { Link } = require("react-router-dom");

function Nav({ title }) {
  return (
    
    <center>
      <nav> 
        <Link to="/quoteSearch">
        <button class="button button1">
          Find Your Quote!
        </button>
        </Link>
        <Link to="/randomQuote">
        <button class="button button2">
          Get a Random Quote!
          </button>
          </Link>
      </nav>
    </center>
  );
}

module.exports = Nav;
