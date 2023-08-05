import React from 'react';
import { Input } from 'antd';

function SearchBar({ search, setSearch }) {
    return (
        <Input 
            type="text"
            placeholder="Rechercher"
            value={search} 
            onChange={e => setSearch(e.target.value)}
            style={{
                width: '100%', // Fills the width of the container
                color: '#fff', // Make text color white
                backgroundColor: '#333', // Make background dark grey
                borderColor: '#333', // Make border dark grey
                marginBottom: '20px', // Space out from the form
                marginTop: '20px', // Space out from the form
                borderRadius: '15px', // Match the border radius of the form
                textAlign: 'center', // Center the input text
            }}
        />
    );
}

export default SearchBar;
