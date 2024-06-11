import React from "react";
import { createRoot } from 'react-dom/client'
import {
    RouterProvider,
} from 'react-router-dom'
import Router from '@src/router'
import './global.css'
import { registerMicroApps, start } from 'qiankun';
registerMicroApps([
    {
        name: 'reactAppa',
        entry: '//localhost:3001',
        container: '#MicroApp1',
        activeRule: '/react',
    },
    // {
    //     name: 'vueApp',
    //     entry: '//localhost:8080',
    //     container: '#container',
    //     activeRule: '/app-vue',
    // },
    // {
    //     name: 'angularApp',
    //     entry: '//localhost:4200',
    //     container: '#container',
    //     activeRule: '/app-angular',
    // },
]);
// 启动 qiankun
start()

const root = createRoot(document.getElementById('app'))
root.render(<RouterProvider router={Router} />)