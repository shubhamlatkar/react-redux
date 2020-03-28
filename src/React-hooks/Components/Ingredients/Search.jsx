import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";
import { url } from "../../data/data";

const Search = React.memo(props => {
  const { onLoadIngerdients } = props;

  const [enteredFilter, setEnteredFilter] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const queryParam =
          enteredFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
        fetch(url + "ingredients.json" + queryParam)
          .then(res => res.json())
          .then(resData => {
            const loadIngs = [];
            for (let key in resData) {
              loadIngs.push({
                id: key,
                title: resData[key].title,
                amount: resData[key].amount
              });
            }
            onLoadIngerdients(loadIngs);
          });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, onLoadIngerdients, inputRef]);
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={event => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
