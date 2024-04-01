import React, { Fragment, useState } from 'react';
import "./Search.css";
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate(); // Use useNavigate hook to get navigation function
    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`); // Use navigate function to navigate
        } else {
            navigate("/products");
        }
    };

    return (
        <Fragment>
            <form className="searchBox" onSubmit={searchSubmitHandler}>
                <input
                    type="text"
                    placeholder="Search a Product ..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <input type="submit" value="Search" />
            </form>
        </Fragment>
    );
}

export default Search;
