import React from "react";
import { createRoot } from 'react-dom/client'
import {
    RouterProvider,
} from 'react-router-dom'
import Router from '@src/router'
import './global.css'



const root = createRoot(document.getElementById('app'))
root.render(<RouterProvider router={Router} />)