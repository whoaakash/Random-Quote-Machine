function App() {
  const [quote, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState('');
  const [color, setColors] = React.useState('#fff');

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);
    }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const colors = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857',
    ];

    let randIndex = Math.floor(Math.random() * quote.length);
    let randColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuote(quote[randIndex]);
    setColors = colors[randColorIndex];
  };

  return (
    <div style={{ backgroundColor: color, minHeight: '100vh' }}>

      <div className="container pt-5">
        <div className="jumbotron">
          <div className="card">
            <div className="card-header">Inspirational Quotes</div>
            <div className="card-body">
              {randomQuote ? (
                <>
                  <h5 className="card-title">
                    - {randomQuote.author || 'No Author'}
                  </h5>
                  <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                </>
              ) : (
                <h2>Loading</h2>
              )}

              <div className="row">
                <button
                  onClick={getNewQuote}
                  className="btn btn-primary btn-block "
                >
                  New Quote
                </button>
                <a
                  href={
                    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                    encodeURIComponent(
                      '"' + randomQuote.text + '" ' + randomQuote.author,
                    )
                  }
                  className="btn btn-warning"
                  title="Tweet this quote!"
                  target="_blank"
                >
                  <i className="fa fa-quote-left"> </i>
                </a>
                <a
                  href={
                    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption' +
                    encodeURIComponent(
                      '"' + randomQuote.text + '" ' + randomQuote.author,
                    )
                  }
                  className="btn btn-danger"
                  title="Post this quote on tumblr!"
                  target="_blank"
                >
                  <i className="fa fa-quote-left"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* {quote.map((i) => (
         <div>{i.author}</div>
      ))} */}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
