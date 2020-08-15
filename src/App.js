import React, { Component } from 'react';
import Axios from 'axios';
import 'antd/dist/antd.css';
import './App.css';
import AddressForm from './components/AddressForm.jsx';
export default class App extends Component {
  constructor(){
    super();
    this.state={
      clusterName:''
    }
  }

  getClusterName = async (address) => {
    const res = await Axios.get(`https://guarded-beach-66976.herokuapp.com/?address=${address}`);
    return res.data;
  }


  render() {
    const { clusterName } = this.state;
    return (
      <div>
        <AddressForm getClusterName={this.getClusterName}/>
        {clusterName !== '' && <div>{clusterName}</div>}
      </div>
    )
  }
}
 


