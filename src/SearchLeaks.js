import React, { useState } from 'react';

const SearchLeaks = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Logica per eseguire la ricerca delle perdite, ad esempio chiamare un'API
    // Qui aggiungeremo solo un esempio di risultato
    setResults([
      'Perdita nel tubo del bagno',
      'Perdita nel rubinetto della cucina',
      'Perdita sotto il lavandino'
    ]);
  };

  return (
    <div>
      <h1>Ricerca Perdite</h1>
      <input
        type="text"
        placeholder="Descrivi il problema"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Cerca</button>

      <div>
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          <p>Nessun risultato trovato</p>
        )}
      </div>
    </div>
  );
};

export default SearchLeaks;
