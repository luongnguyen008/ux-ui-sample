import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCookie } from '../config';

export default function AuthRoute(props) {
    let jwt = getCookie("jwt")
    const { component: Component,
        ...rest } = props;

    if (jwt) {
        return <Redirect to='/home' />
    } else {
        return (<Route {...rest} render={(props) => (<Component {...props} />)} />)
    }

}