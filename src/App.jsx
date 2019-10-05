// 应用的 根 组件
import React,{Component} from 'react'
// import 'antd/dist/antd.css'
import './App.css'

import Login from './pages/login/login.jsx'

export default class App extends Component{

    render(){
        return(
            <div>
               <Login />
            </div>
        )
    }
}