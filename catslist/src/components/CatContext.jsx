import React from 'react';
import { createContext, useReducer } from 'react';

const cats = [
    { id: 1,
        url:"https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
        name: "Covid Cat",
        birthdate: "2020-03-13",
        owner: "John Doe",
        view: 0
    },
    { id: 2,
        url: "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cat_1280p_0.jpg?itok=MFUV0a-t",
        name: "Scared Cat",
        birthdate: "2020-04-01",
        owner: "Jane Doe",
        view: 0
    },
    { id: 3,
        url: "https://cdn.theatlantic.com/thumbor/tK3KeCj08mDDu431jVj3ex_GqXc=/0x699:6720x4479/960x540/media/img/mt/2021/05/GettyImages_1218380632/original.jpg",
        name: "Hiding Cat",
        birthdate: "2017-06-21",
        owner: "Kate Debarros",
        view: 0
    },
    { id: 4,
        url: "https://www.iams.com/images/default-source/article-image/article_stomach-issues-in-cats-why-cats-vomit-and-what-to-do_header.jpg",
        name: "Sleepy Cat",
        birthdate: "2015-11-05",
        owner: "Kate Debarros",
        view: 0
    },
    { id: 5,
        url: "https://live-production.wcms.abc-cdn.net.au/9bcaee7b5e48292eaaada0738bb72803?impolicy=wcms_crop_resize&cropH=1364&cropW=2048&xPos=0&yPos=672&width=862&height=575",
        name: "Grumpy Cat",
        birthdate: "2016-01-01",
        owner: "John Doe",
        view: 0
    }
]

const catState = {
    activeCat: cats[0],
    cats: cats,
    formView: false
}

const CatContext = createContext(catState);

function reducer(state, action) {
    switch (action.type) {
        case 'delete_active':
            const newCats = (state.cats).filter(x => x.id!== state.activeCat.id);
            if (newCats.length === 0) return {activeCat: [], cats: newCats, formView: false};
            else return {activeCat: newCats[0], cats: newCats, formView: false};
        case 'change_view':
            if (state.activeCat.id === action.cat.id) {
                return {...state}
            }
            const activeCat = {...action.cat, view: (action.cat.view + 1)};
            const updatedCats = state.cats.map(x => {
                if (x.id!== action.cat.id) return x;
                else return activeCat;
             });

            return {cats: updatedCats, activeCat: activeCat, formView: false};
        case 'update_cat':
            // console.log(action)
            // return {...state};

            const updateCats = state.cats.map(x => {
                if (x.id!== action.cat.id) return x;
                else return action.cat;
             });
            return {cats: updateCats, activeCat: action.cat, formView: false};
        case 'toggle_form':
            return {...state, formView: !state.formView}
        default:
            throw new Error();
    }
}

function CatProvider({children}) {
    const [state, dispatch] = useReducer(reducer, catState);

    const value = {state, dispatch}
	return <CatContext.Provider value={value}>{children}</CatContext.Provider>
}

export {CatProvider, CatContext}