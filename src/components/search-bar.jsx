const SearchBar = () => (
    <form action="/" method="get" className="searchBarForm">
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;