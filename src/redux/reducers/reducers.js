import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAIL,
 
} from "../actions/types";

 
const initialState = {    
    isLoading: null,
    error: null,
    data: null    
};
 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER_REQUEST:
            return {
                ...state,               
                isLoading: true,
                error: null,
                data: []
                
            }
        case GET_WEATHER_SUCCESS:
            return {
                ...state,               
                isLoading: false,
                error: false,
                data: action.payload
                
            }
        case GET_WEATHER_FAIL:
            return {
                ...state,                
                isLoading: false,
                error: action.payload,
                data: []
                
            }
        default: return state;
    }
}
 
export default reducer;