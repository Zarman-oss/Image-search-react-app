import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [item, setItem] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit('grg');
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={item} onChange={handleChange} />
      </form>
    </div>
  );
}
export default SearchBar;
