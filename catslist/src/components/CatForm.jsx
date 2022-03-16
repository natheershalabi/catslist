import React from 'react';
import { useState } from 'react';
import { CatContext } from './CatContext';

function CatForm() {
    const {state, dispatch} = React.useContext(CatContext);

    const [localCat, setLocalCat] = useState({...state.activeCat});
    if (localCat.id !== state.activeCat.id) {
        // console.log(`Changing Local State : ${localCat.id} and ${state.activeCat.id}`)
        setLocalCat(state.activeCat);
    }

    const {url, name, birthdate, owner, id, view} = localCat;

    function setState (e) {
        // console.log(`${e.id} : ${e.value}`);
        if (e.id === "url") {
            setLocalCat({url: e.value, name, birthdate, owner, id, view})
        }
        if (e.id === "name") {
            setLocalCat({url, name: e.value, birthdate, owner, id, view})
        }
        if (e.id === "birthdate") {
            setLocalCat({url, name, birthdate: e.value, owner, id, view})
        }
        if (e.id === "owner") {
            setLocalCat({url, name, birthdate, owner: e.value, id, view})
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'update_cat', cat: localCat})
      }

    return (
        <>
        {state.formView ? 
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                <div>Thumbnail URL : <input type="text" value={url} id="url" onChange={e => setState(e.target)} /></div>
                <div>Name : <input type="text" value={name} id="name" onChange={e => setState(e.target)} /></div>
                <div>Birth Date : <input type="date" value={birthdate} id="birthdate" onChange={e => setState(e.target)} /></div>
                <div>Owner : 
                    <select value={owner} id="owner" onChange={e => setState(e.target)} >
                        <option value="John Doe">John Doe</option>
                        <option value="Jane Doe">Jane Doe</option>
                        <option value="Kate Debarros">Kate Debarros</option>
                    </select>
                </div>
                <span onClick={() => dispatch({type: 'toggle_form'})}>Cancel</span>
                <button>Save</button>
                </div>
            </form>
            : <></> }
      </>
    )
}

export default CatForm;