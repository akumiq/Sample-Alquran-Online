import React from 'react'

const SearchBar = () => {
    return (
        <div
            className='container'>
            <div
                className='row justify-content-center mt-3 mb-3'>
                <input
                    className="form-control mr-sm-2 text"
                    type="search"
                    placeholder="Cari Surat"
                    aria-label="Cari Surat"
                    style={{ width: '50rem', height: '3rem' }}>
                </input>
            </div>
        </div>
    )
}

export default SearchBar