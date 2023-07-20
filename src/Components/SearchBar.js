import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [state, setState] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Search photos </label>
        <input value={state} onChange={handleChange} />
      </form>
    </div>
  );
}
export default SearchBar;
