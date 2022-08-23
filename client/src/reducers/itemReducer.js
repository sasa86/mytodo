import * as types from"../actions/types";


const initialState = {
    items:[
         
    ],
    loading: false
}

export default function (state = initialState, action) {
    //console.log(action.payload)
    switch (action.type) {
        case types.GET_ITEMS:
            return {
                ...state,
                items: action.payload.results,
                loading: false
               
            }

        case types.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }

        case types.ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }

        case types.TOGGLE_TODO:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item._id !== action.payload) {
                        return item
                    }

                    return {
                        ...item,
                        completed: !item.completed
                    }
                })
            }

        case types.UPDATE_ITEM:
           
            return {
                ...state,
                items: state.items.map(item => {
                    if (item._id !== action.payload._id) {
                        return item
                    }
                 
                    return {
                        ...item,

                        name: action.payload.name
                    }
                })
            }

            case types.ALL_COMPLETED:
                return {
                    ...state,
                  items: state.items.map(item => {
                      if (item.completed === true) {
                          return item
                      }

                      return {
                          ...item,
                          completed: !item.completed
                      }
                  })
                  
                    
                }

            case types.CLEAR_COMPLETED:
                return {
                    ...state,
                    items: state.items.filter(item => item.completed !== true)
                }

                case    types.ITEMS_LOADING: 
                return {
                    ...state,
                   loading: true
                }
    
        default:
            return state;
    }
}