import React from 'react'
import { useContext } from 'react';
import { CatContext } from './CatContext'

function DisplayCat({cat}) {
    const {dispatch} = useContext(CatContext);

    return(
      <li className="list__item" onClick={() => dispatch({type: 'change_view', cat: cat})}>
        <span className="small_view">
          <img src={cat.url} alt="cat"></img>
          <span>{cat.name}</span>
        </span>
        <p>{cat.birthdate}</p>
      </li>
    )
  }
  
  function CatList() {
    const {state} = useContext(CatContext);
    const cats = state.cats;

    // console.log(cats);

    return(
      <ul className="list">
        {cats.map((cat) => (
          <DisplayCat key={cat.id} index={cat.id} cat={cat}/>
        ))}
      </ul>
    )
  }

  export default CatList;