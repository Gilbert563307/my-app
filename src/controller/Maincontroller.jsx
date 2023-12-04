import React from 'react'
import DefautLayout from '../view/layouts/DefautLayout'
import { Outlet } from "react-router-dom";

export default function Maincontroller() {
    return (
        <>
            <DefautLayout>
                <Outlet></Outlet>
            </DefautLayout>
        </>
    )
}
