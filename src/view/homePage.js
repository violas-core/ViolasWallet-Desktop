import React, { Component } from "react";
import "./app.scss";
import { connect } from 'react-redux';
import RouterView from '../router/routerView';
import WalletConnect from "../packages/browser/src/index";
import 'antd/dist/antd.css'

class HomePage extends Component {
    constructor(props){
      super()
      this.state = {
        // bridge: 'http://47.52.66.26:5000',
        bridge: 'https://walletconnect.violas.io',
        walletConnector: {},
      }
    }
    async componentWillMount() {
      await this.getNewWalletConnect();
      this.state.walletConnector.on("disconnect", (error, payload) => {
        if (error) {
          throw error;
        }
        window.localStorage.clear()
        window.sessionStorage.clear()
        // this.props.history.push('/app')
        console.log("wallet disconnected",'////////////');
      });
    }
    async getNewWalletConnect() {
      await this.setState({ walletConnector: new WalletConnect({ bridge: this.state.bridge })});
    }
    componentDidMount() {
      window.addEventListener('onbeforeunload', () => {
        this.state.walletConnector.killSession();
        this.getNewWalletConnect();
        window.localStorage.clear()
        window.sessionStorage.clear()
        this.props.history.push('/app')
      })
    }
    componentWillUnmount() {
      window.removeEventListener('onbeforeunload', () => {
        this.state.walletConnector.killSession();
        this.getNewWalletConnect();
        window.localStorage.clear()
        window.sessionStorage.clear()
        this.props.history.push('/app')
      })
    }
    onClose = () => {
    };
    render(){
        let { routes } = this.props;
        
        return (
          
            <div className="homePage">
              <RouterView routes={routes}></RouterView>
            </div>
        )
    }
}
let mapStateToProps = (state) =>{
  return state.ListReducer;
}
let mapDispatchToProps = (dispatch) =>{
  return {
  
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);