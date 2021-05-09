import React from "react"

function Search(props) {
    return (
        <div className="container">
            <div className="col-8">
                <input type="search"
                    className="form-control"
                    aria-describedby="search-help"
                    placeholder="Search"
                    onChange={props.handleInputChange}></input>
            </div>


            <div className="col-4">
                <button
                    type="submit"
                    className="btn main-btn btn-primary"
                    onClick={props.handleFormSubmit}>Search</button>
            </div>
        </div>
    )

}

export default Search;