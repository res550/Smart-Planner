import { GET_CALENDAR_INFO } from './types';

export const getCalendarInfo = (accessToken:String , query:string) => {
    return (dispatch: any) => {
        if (query === undefined) {
            query = "";
        }
        let h = new Headers();
        h.append('Authorization', 'Bearer ' + accessToken);
        let request = new Request("https://www.googleapis.com/calendar/v3/calendars/primary/events?" + query, {
            method: 'GET',
            headers: h,
        });
        fetch(request).then((response) => {
            return response.json();
        }).then((jsonData) => {
            dispatch({
                type: GET_CALENDAR_INFO,
                payload: jsonData
            });
        });
    };
}

export const BuildTimeQuery = (startTime:String, endTime:string) => {
    let offset=(new Date().getTimezoneOffset())/-60
}