export const CLEAR_CREDITS = "CLEAR_CREDITS";
export const ERROR = "ERROR";

export const clearCredits = () =>  {
    return async dispatch => {
        await
            dispatch({
                type: CLEAR_CREDITS,
                payload: [],

            })
    };
};

