
import { actionConstants } from "./action";
const initState = {
    isAuth : false
}
function reducer(state=initState,action){
    switch(action.type){
        case actionConstants.LOGIN_REQUEST : {
            console.log(action)
            return {
                ...state,
                isAuth : true
            }
        }
        default: {
            return state
        }
    }
}
export default reducer