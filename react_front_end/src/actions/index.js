import jsonpP from 'jsonp-p';

export const FETCH_PROFILES = 'FETCH_PROFILES';

export function fetchProfiles() {

    // our Django Rest Framework API
    const url = 'http://127.0.0.1:8000/api/profiles/?format=jsonp'; 

    // return a function rather than an action (redux-thunk)
    return (dispatch) => {
      // https://www.npmjs.com/package/jsonp-p
      // Wait for a response
      jsonpP(url, null).promise.then((response) => {
        // then dispatch the action with response as the payload
        dispatch({ type: FETCH_PROFILES, payload: response });
      });
    };     
}