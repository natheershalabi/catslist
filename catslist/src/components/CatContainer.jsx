import React from 'react';
import CatView from './CatView';
import CatList from './CatList';
import {CatProvider} from './CatContext'
  
  function CatContainer() {
  
    return (
        <div className="container">
            <CatProvider>
                <CatList />
                <CatView />
            </CatProvider>
        </div>
    );
  }

  export default CatContainer;