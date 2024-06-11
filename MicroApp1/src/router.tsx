import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "@src/App";
import Text1 from '@src/components/Text1'
import Text2 from '@src/components/Text2'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/text1',
        element: <Text1 />
    },
    {
        path: '/text2',
        element: <Text2 />
    },
    {
        path: 'react',
        element: <App />
    },
])

export default router