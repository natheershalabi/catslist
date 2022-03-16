import React from 'react'
import { useContext } from 'react'
import { CatContext } from './CatContext'
import CatForm from './CatForm';

function CatView(props) {
    const {dispatch, state} = useContext(CatContext);
    const cat = state.activeCat;

    function CatDelete() {
        var temp = window.confirm("Are you sure you want to delete this cat?");
        if (temp === true) dispatch({type: 'delete_active'});
    }

    return(
      <ul className="display">
        <div className="cat-content">
            <img src={cat.url} alt="cat picture isn't available"></img>
            <span>{cat.name}</span>
            <span>{cat.birthdate}</span>
            <span>{cat.owner}</span>
            <span>Views: {cat.view}</span>
        </div>
        <div className="display-buttons">
            <button onClick={() => dispatch({type: 'toggle_form'})}>Edit</button>
            <button onClick={() => CatDelete()}>Delete</button>
        </div>
        <CatForm />
      </ul>
    )
  }

export default CatView;
