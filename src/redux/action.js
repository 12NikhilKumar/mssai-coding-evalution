export const actionConstants = {
    LOGIN_REQUEST: 'LOGIN_REQUEST'
}
export const loginRequest = ()=> ({
    type: actionConstants.LOGIN_REQUEST,
    payload: {
        isAuth: true
    }
})