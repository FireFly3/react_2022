import {useRef} from "react";

import {useCatsReducer} from "../../reducers";

const Cats = () => {
    const [state, dispatch] = useCatsReducer();

    const catInput = useRef();

    return (
        <div>
            <span>Cats: <input id="textInput" type="text" ref={catInput}/></span>
            <button onClick={() => dispatch({
                type: 'AddCat',
                payload: catInput.current.value
            }, catInput.current.value = '')}>Add cat
            </button>
            {state.cats.map(cat => (<div key={cat.id}>
                {cat.name}
                <button id="clearButton" onClick={() => dispatch({type: 'DelCat', payload: cat.id})}>Delete cat</button>
            </div>))}
        </div>
    );
};

export {
    Cats
}