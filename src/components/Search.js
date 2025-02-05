import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

const Search = ({ handleSearch, searchValue, onInputChange }) => {
  return (
    <div className="searchForm" style={{ marginTop: "1rem" }}>
      <form className="d-flex" onSubmit={handleSearch}>
        <input
          type="search"
          className="form-control"
          placeholder="Search Blog ..."
          value={searchValue}
          onChange={onInputChange}
        />
        <MDBBtn type="submit">Search</MDBBtn>
      </form>
    </div>
  );
};

export default Search;
