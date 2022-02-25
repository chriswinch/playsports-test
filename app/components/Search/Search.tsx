import React, { FormEvent } from 'react';
import { Search as SearchIcon } from 'react-feather';
import styles from './Search.css';

export const links = () => ([
    { rel: 'stylesheet', href: styles }
]);

const Search = () => {
    return (
        <div className="search">
            <form
                className="search__form"
                onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {
                        search: HTMLInputElement
                    };
                    console.log(`Searching for: ${target.search.value}`);
                }}
            >
                <label className="visuallyhidden" htmlFor="search">Search</label>
                <input className="search__input" id="search" type="text" placeholder="Search" />
                <button className="search__button" aria-label="Search" type="submit">
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
}

export default Search;
