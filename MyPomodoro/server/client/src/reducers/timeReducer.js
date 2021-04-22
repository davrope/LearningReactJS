import { SEND_TIME } from "../actions/types";

const time = (state = [], action) =>{
    switch (action.type){
        case SEND_TIME:
            return[
                ...state, 
                {
                    time: action.time
                }
            ]
        default:
            return state
    }
}

export default time;