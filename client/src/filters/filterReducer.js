import { STATUS_FILTER_CHANGE } from '../actions/types';

const initialState = {
    appliedFilter: 'all'
}

export default function filtersReducer(state = initialState, action) {
    console.log(action.payload)
    switch (action.type) {
        
        case STATUS_FILTER_CHANGE:
            return {
                ...state,
                appliedFilter: action.payload
            }
            
            
        
        
        default: return state
    
    }
}