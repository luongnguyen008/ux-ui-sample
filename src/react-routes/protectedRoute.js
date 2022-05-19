
import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';
import Loading from '../common-components/Loading';
import Layout from '../layout/layout';
import { clearCookie, getCookie } from '../config';
import _ from "lodash"
import { useFindUser } from '../services/users/user.service';


export default function ProtectedRoute(props) {
    // const { findUser } = useFindUser()
    // useEffect(() => {
    //     findUser()
    // }, [])
    // const user = useSelector((state) => state.userReducer.user);
    // const isLoading = useSelector((state) => state.userReducer.isLoading);
    // const userRole = user?.roles?.map(r => r.name)
    const { roles, component: Component, ...rest } = props;
    // let jwt = getCookie("jwt")

    // if (_.isEmpty(jwt)) {
    //     return <Redirect to='/' />
    // }
    // if (isLoading) {
    //     return <Loading />
    // }
    // console.log("userRole", userRole)
    // if (userRole) {
    //     if (!userRole.some(r => roles?.includes(r))) {
    //         // role not authorised so redirect to home page
    //         return <Redirect to='/home' />
    //     }
    // }


    return (<Route {...rest} render={(props) => (<Layout><Component {...props} /></Layout>)} />)



}




