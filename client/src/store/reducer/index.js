import { GET_ALL } from "../actions";


const initialState = {
    countries: [],

};


export default function reducer(state = initialState,action) {
    switch (action.type) {
        case GET_ALL:
            
            return {
                ...state,
                countries: action.payload,
            }
            
          
    
        default:
            return state
            
    }



    
};