import axios from 'axios';

export const GET_ALL = "GET_ALL";


export function getAll() {
    return function(dispatch) {
        axios.get('http://localhost:3001/countries').then(resp => {
            
            dispatch({
                type: GET_ALL,
                payload: resp.data,
            })

        })

        
    }


};