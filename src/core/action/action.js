import axios from 'axios'
import {
    toast
} from 'react-toastify';
import i18next from 'i18next'

const Types = {
    get: '',
    egypt: 'egypt',
    world: 'world',
    table: 'table',
    spinner: 'spinner',
    message: 'message',
    loadingPage: 'loadingPage',
    nav: 'nav',
    mode: ''
}
export const nav = (margin) => {
    return (dispatch) => {
        dispatch({
            type: 'nav',
            nav: margin
        })
    }
}
export const modePage = (mode) => {
    return (dispatch) => {
        dispatch({
            type: 'mode',
            mode: mode
        })
    }
}

export const getTable = () => {

    return (dispatch) => {

        axios
            .get(`https://covid19.mathdro.id/api/recovered`)

            .then(res => {
                dispatch({
                    type: 'table',
                    table: res.data
                })

                setTimeout(() => {

                    dispatch({
                        type: 'loadingPage',
                        loadingPage: false
                    })
                }, 1500);


            }).catch(err => {
                setTimeout(() => {
                    dispatch({
                        type: 'loadingPage',
                        loadingPage: false
                    })
                }, 1500);

            })
    }
}

export const getWorld = () => {

    return (dispatch) => {

        axios.
        get(`https://coronavirus-19-api.herokuapp.com/all`)

            .then(res => {
                dispatch({
                    type: 'world',
                    world: res.data
                })
                setTimeout(() => {

                    dispatch({
                        type: 'loadingPage',
                        loadingPage: false
                    })
                }, 1500);


            }).catch(err => {
                setTimeout(() => {
                    dispatch({
                        type: 'loadingPage',
                        loadingPage: false
                    })
                }, 1500);

            })
    }
}

export const getEgypt = () => {

    return (dispatch) => {

        axios
            .get(`https://covid19.mathdro.id/api/countries/egypt/confirmed`)
            .then(res => {
                dispatch({
                    type: 'egypt',
                    egypt: res.data[0]
                })

                setTimeout(() => {
                    dispatch({
                        type: 'loadingPage',
                        loadingPage: false
                    })
                }, 1500);

            }).catch(err => {
                setTimeout(() => {
                    dispatch({
                        type: 'loadingPage',
                        loadingPage: false
                    })
                }, 1500);

            })
    }
}