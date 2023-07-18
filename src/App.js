import SearchBar from './Components/SearchBar';
import searchImages from './api';

function App() {
  const handleSubmit = (term) => {
    console.log('Do a serach with', term);
    searchImages(term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}
export default App;
