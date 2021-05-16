import { useState, useEffect } from 'react';
import { fetchBooksFaker } from './common/FakerAPI';
import FETCH_STATUS from './common/FETCH_STATUS';

import LoadingSpinner from './components/LoadingSpinner';
import FetchErrorHandler from './components/FetchErrorHandler';
import GenreFilterSidebar from './components/GenreFilterSidebar';
import GenreFilter from './components/GenreFilter';
import List from './components/List';
import SearchBar from './components/SearchBar';

import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(FETCH_STATUS.PENDING);
  const [activeFilters, setActiveFilters] = useState({ any: true });

  const getBooks = async () => {
    setFetchStatus(FETCH_STATUS.PROCESSING);
    try {
      const items = await fetchBooksFaker();
      setBooks(items);
      setFetchStatus(FETCH_STATUS.COMPLETE);
    } catch {
      setFetchStatus(FETCH_STATUS.ERROR);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const filters = Object.keys(
    // dedupes genres
    books.reduce((acc, book) => {
      acc[book.genre] = 1;
      return acc;
    }, {})
  );

  return (
    <div>
      {fetchStatus === FETCH_STATUS.PROCESSING && <LoadingSpinner />}
      {fetchStatus === FETCH_STATUS.ERROR && (
        <FetchErrorHandler refetchAction={getBooks} />
      )}
      {fetchStatus === FETCH_STATUS.COMPLETE && (
        <>
          <h1 className="main-header">books.</h1>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <section className="content">
            <GenreFilterSidebar
              filters={filters}
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
            />
            <GenreFilter
              filters={filters}
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
            />
            <List
              items={books
                .filter(
                  book =>
                    book.title
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchText.toLowerCase())
                )
                .filter(book => activeFilters[book.genre] || activeFilters.any)}
            />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
