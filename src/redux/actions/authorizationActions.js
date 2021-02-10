import { createAction } from '@reduxjs/toolkit';

export const singUp = createAction("SING_UP")
export const singIn = createAction("SING_IN")
export const singOut = createAction("SING_OUT")
export const setLoading = createAction("LOADING_AUTHORIZATION");
export const setError = createAction("SET_ERROR_AUTHORIZATION");
export const alertActionAuth = createAction("ALERT_CONTACT")