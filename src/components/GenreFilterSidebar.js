import './GenreFilterSidebar.css';

const GenreFilterSidebar = ({ filters, activeFilters, setActiveFilters }) => {
  return (
    <div className="sidebar-container">
      <h3>FILTER BOOKS BY</h3>
      <div className="checkbox">
        <input
          type="checkbox"
          checked={activeFilters.any}
          onClick={() => {
            setActiveFilters({ any: true });
          }}
        />
        <label>All Books</label>
      </div>
      {filters.map(filter => (
        <div className="checkbox">
          <input
            type="checkbox"
            checked={activeFilters[filter]}
            onChange={() => {
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
              setActiveFilters({
                ...activeFilters,
                any: false,
                [filter]: true,
              });
            }}
          />
          <label>{filter}</label>
        </div>
      ))}
    </div>
  );
};

export default GenreFilterSidebar;
