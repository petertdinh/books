import './GenreFilter.css';

const GenreFilter = ({ filters, activeFilters, setActiveFilters }) => {
  return (
    <div className="filter-container">
      <button
        className={`filter-button ${
          activeFilters.any && 'filter-button-active'
        }`}
        onClick={() => {
          setActiveFilters({ any: true });
        }}
      >
        All Books
      </button>
      {filters.map(filter => (
        <button
          key={filter}
          className={`filter-button ${
            activeFilters[filter] && 'filter-button-active'
          }`}
          onClick={() => {
            if (activeFilters[filter]) {
              const rest = { ...activeFilters };
              delete rest[filter];
              if (Object.keys(rest).length === 1) {
                setActiveFilters({ any: true });
                return;
              }
              setActiveFilters(rest);
              return;
            }
            setActiveFilters({ ...activeFilters, any: false, [filter]: true });
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
