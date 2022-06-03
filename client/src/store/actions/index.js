import axios from 'axios';

export const GET_ALL = "GET_ALL";
export const SEARCH = "SEARCH";
export const DETAIL = "DETAIL";
export const CREATE = "CREATE";
export const ORDERED = "ORDERED";
export const FILTER = "FILTER";
export const SELECT_ACTIVITIES = "SELECT_ACTIVITIES";
export const CLEAR = "CLEAR";
export const ACTIVITIES = "ACTIVITIES";
export const SELECT_ACTIV = "SELECT_ACTIV";

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


export function search(country) {
    return function(dispatch) {
        axios.get(`http://localhost:3001/countries?name=${country}`).then(resp => {
            
            dispatch({
                type: SEARCH,
                payload: resp.data
            })

        })

    }

};

export function detail(id) {
    return function(dispatch) {
        axios.get(`http://localhost:3001/countries/${id}`).then(resp => {

            dispatch({
                type: DETAIL,
                payload: resp.data,
            })

        })

    }



};


export function create(activity) {
    return function(dispatch) {
        axios.post('http://localhost:3001/activity',activity).then(() => {

            dispatch({
                type: CREATE
            })
        })

    }



};

export function ordered(payload){
    return {
        type: ORDERED,
        payload,

    }



};

export function filter(payload){
    return {
        type: FILTER,
        payload,

    }


};

export function clear(payload){
    return {
        type: CLEAR,
        payload,

    }


}; 

export function activities(payload){
    return {
        type: ACTIVITIES,
        payload,
    }

};

export function selectActiv(payload){
    
    return{
        type: SELECT_ACTIV,
        payload

    }

}