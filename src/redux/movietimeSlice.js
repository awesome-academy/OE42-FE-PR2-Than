import {createSlice} from '@reduxjs/toolkit';

const movietime = createSlice({
    name: 'movietime',
    initialState: {
        movie_time: [],
        theater: null,
        date_list: [],
        date: null,
        hour_list: [],
        hour: null,
        movie: [],
        pending: false,
        error: null,
    },
    reducers: {
        addHourList: (state,action) => {
            return {
                ...state,
                pending: false,
                hour_list: action.payload
            }
        },
        addHour: (state,action) => {
            return {
                ...state,
                hour: action.payload
            }
        },
        addDateList: (state,action) => {
            return {
                ...state,
                pending: false,
                date_list: action.payload
            }
        },

        addDate: (state,action) => {
            return {
                ...state,
                date: action.payload
            }
        },

        addTheater: (state,action) => {
            return {
                ...state,
                theater: action.payload
            }
        },

        addMovieToMovietime: (state,action) => {
            return {
                ...state,
                pending: false,
                movie: action.payload
            }
        },

        getMovietimeInit: () => {
            
        },
      
        getMovietimePending: (state,action) => {
            return {
                ...state,
                pending: true
            }
        },

        getMovietimeError: (state,action) => {
            return {
                ...state,
                error: action.payload
            }
        }
    }
})

const {reducer,actions} = movietime
export const {getMovietimeInit,getMovietimeError,getMovietimePending,addMovieToMovietime,addHour,addTheater,addDate,addDateList,addHourList} = actions
export default reducer