import {createSlice} from '@reduxjs/toolkit';
import { TAB_USER_INFOMATION } from '../constants';

const user = createSlice({
    name: 'user',
    initialState: {
        tab: TAB_USER_INFOMATION,
        isLogin: false,
        ticket: [],
        user: {},
        pending: false,
        error: null,
        status: null,
        requireLogin: null,
    },
    reducers: {
        getTicket: () => {
            
        },

        addTicket: (state,action) => {
            return {
                ...state,
                ticket: action.payload,
                pending: false
            }
        },

        getTicketPending: (state,action) => {
            return {
                ...state,
                pending: true
            }
        },

        getTicketError: (state,action) => {
            return {
                ...state,
                error:  action.error,
                pending: false
            }
        },
        requireLogin: (state,action) => {
            return {
                ...state,
                requireLogin: action.payload
            }
        },

        chooseTab: (state,action) => {
            return {
                ...state,
                tab: action.payload
            }
        },

        loginUser: () => {

        },

        registerUser: () => {
    
        },

        logoutUser: (state) => {
            return {
                ...state,
                isLogin: false,
                user: {},
                error: null,
                status: null,
            }
        },

        getUser: () => {

        },
        loginSuccess: (state,action) => {
            return {
                ...state,
                user: action.payload,
                isLogin: true,
                pending: false,
                error: null,
            }
        },
        loginPending: (state,action) => {
            return {
                ...state,
                pending: true
            }
        },

        loginError: (state,action) => {
            return {
                ...state,
                error: action.payload,
                pending: false
            }
        },

        loginStatus: (state,action) => {
            return {
                ...state,
                status: action.payload,
                pending: false
            }
        }
        

    }
})

const {reducer,actions} = user
export const {loginUser,registerUser,loginError,loginPending,loginSuccess,getUser,loginStatus,logoutUser,chooseTab,requireLogin,addTicket,getTicket,getTicketError,getTicketPending} = actions
export default reducer