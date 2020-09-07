import React from 'react'
import Cart from './components/Cart'
import Content from './components/Content'

const routes = [
    {
        path: '/',
        exact: true,
        main: ()=> <Content />
    },
    {
        path: '/cart',
        exact: true,
        main: ()=><Cart/>
    },
    
]
export default routes