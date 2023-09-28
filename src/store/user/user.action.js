import { createAction } from "../../utils/reducer/reducer.utils"

const setCurrrentUser = (user) => {
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user )
}