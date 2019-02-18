import { LOGIN } from "./types"

export const loginSuccess = (userinfo:object) => (dispatch: any) => {
    dispatch({
        type: LOGIN,
        payload: userinfo
    })
}