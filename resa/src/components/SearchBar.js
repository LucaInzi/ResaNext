import React from 'react';
import { Input } from 'antd';

function SearchBar({ search, setSearch }) {
    return (
        <Input 
            type="text"
            placeholder="Search"
            value={search} 
            onChange={e => setSearch(e.target.value)}
        />
    );
}

export default SearchBar;
