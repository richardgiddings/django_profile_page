import { FETCH_PROFILES } from '../actions/index';

export default function profileReducer(state = [], action) {

    switch(action.type) {
        case FETCH_PROFILES:
            return [ action.payload.results ];
    }
    
    return state;
}