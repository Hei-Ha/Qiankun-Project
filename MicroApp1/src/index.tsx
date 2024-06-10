import React from "react";
import { createRoot } from 'react-dom/client'
import {
    RouterProvider,
} from 'react-router-dom'
import Router from '@src/router'
import './global.css'

const render = (props: any) => {
    const { container } = props;
    const root = createRoot(container ? container : document.querySelector('#MicroApp1'))
    return root
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props: any) {
    console.log('[react18.2] props from main framework');
    render(props).render(<RouterProvider router={Router} />)
}

export async function unmount(props: any) {
    // const { container } = props;
    console.log('unmount')
    render(props).unmount()
}



const root = createRoot(document.getElementById('app'))
root.render(<RouterProvider router={Router} />)