import { LOGIN, MAIN } from "./types"
import { any } from "prop-types";

export const loginPressed = () => (dispatch: any) => {
    dispatch({
        type: LOGIN,
        payload: true
    })
}