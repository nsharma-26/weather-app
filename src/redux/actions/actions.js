import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAIL,
 
} from "../actions/types";
 
import {
    getWeathers
} from "../api";
 
const getWeather = async (dispatch) => {
    dispatch({ type: GET_WEATHER_REQUEST });
 
    try {
        const response = await getWeathers();
        const res = await response.json();
        dispatch({ type: GET_WEATHER_SUCCESS, payload: res });
    } catch (e) {
        dispatch({ type: GET_WEATHER_FAIL, payload: e });
    }
};

 
export const getWeathersFunc = dispatch => {
    return () => getWeather(dispatch);
}