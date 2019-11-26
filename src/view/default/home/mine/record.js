import React, { Component } from 'react';
import { inject,observer } from 'mobx-react';
import { creat_account_mnemonic,get_address } from '../../../../utils/kulap-function';
import vAccount from '../../../../utils/violas';
import {timeStamp2String} from '../../../../utils/timer';
import Account from '../../../../utils/bitcoinjs-lib6';

@inject('index')
@observer

class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
          recordData:[],
          recordBData:[]
        }
    }
    async componentDidMount(){
       let decrypted =  JSON.parse(window.localStorage.getItem('data'));
       let arr = creat_account_mnemonic(decrypted.mne_arr)
       let addressStr = get_address(arr);
       if(window.localStorage.getItem('type') == 'Libra钱包'){
          let data = await this.props.index.getLibDealRecord({
              addr:addressStr,
              limit:5,
              offset:0
          })
          this.setState({
            recordData:data
          })
          console.log(this.state.recordData)
       }else if(window.localStorage.getItem('type') == 'Violas钱包'){
        let violas = new vAccount(decrypted.mne_arr);
        let data = await this.props.index.getVioDealRecord({
            addr:violas.address,
            limit:5,
            offset:0
        })
        this.setState({
            recordData:data
        })
       }else if(window.localStorage.getItem('type') == 'BTC钱包'){
        let btc = new Account('sport chicken goat abandon actual extra essay build maid garbage ahead aim');
        let data = await this.props.index.getBTCDealRecords({
            address:btc.address,
            page:1
        })
        this.setState({
            recordBData:data
        })
        console.log(data)
       }
    }
    render() {
        let { recordBData } = this.state;
        return (
            <div className="record">
                <header>
                    <span onClick={() => {
                    this.props.history.push({
                        pathname:'/home/wallet',
                        state:false
                    })
                    }}><img src="/img/Combined Shape 1@2x.png"/></span>
                    <span>交易记录</span>
                </header>
                <section>
                    {
                        this.state.recordData && this.state.recordData.map((v,i)=>{
                            return <div className="recordDetail" key={i}>
                                        <div className="title">
                                            <span>日期</span>
                                            <span>数量</span>
                                            <span>转账</span>
                                        </div>
                                        <div className="titleContent">
                                            <span>{timeStamp2String(v.expiration_time+'000')}</span>
                                            <span>{v.value} {
                                                window.localStorage.getItem('type') == 'Violas钱包'? 'vtoken' : window.localStorage.getItem('type') == 'Libra钱包'? 'libra' : window.localStorage.getItem('type') == 'BTC钱包'? 'BTC' : null
                                            }</span>
                                            <span>{
                                                window.localStorage.getItem('type') == 'Violas钱包'? 'vtoken' : window.localStorage.getItem('type') == 'Libra钱包'? 'libra' : window.localStorage.getItem('type') == 'BTC钱包'? 'BTC' : null
                                            }</span>
                                        </div>
                                        <div className="titleContent">
                                        <p>{v.address}</p>
                                            <p>浏览器查询</p>
                                        </div>
                                    </div>
                        })
                    }
                    {
                        recordBData.result && recordBData.result.map((v,i)=>{
                            return <div className="recordDetail" key={i}>
                                        <div className="title">
                                            <span>日期</span>
                                            <span>数量</span>
                                            <span className={recordBData.recs[i]&&recordBData.recs[i] ? 'redC' : 'greenC'}>{recordBData.recs[i]&&recordBData.recs[i] ? '转账' : '收款'}</span>
                                        </div>
                                        <div className="titleContent">
                                            <span>{timeStamp2String(v.block_time+'000')}</span>
                                            <span>{v.inputs_count} {
                                                window.localStorage.getItem('type') == 'Violas钱包'? 'vtoken' : window.localStorage.getItem('type') == 'Libra钱包'? 'libra' : window.localStorage.getItem('type') == 'BTC钱包'? 'BTC' : null
                                            }</span>
                                            <span>{
                                                window.localStorage.getItem('type') == 'Violas钱包'? 'vtoken' : window.localStorage.getItem('type') == 'Libra钱包'? 'libra' : window.localStorage.getItem('type') == 'BTC钱包'? 'BTC' : null
                                            }</span>
                                        </div>
                                        <div className="titleContent">
                                            <p>{v.hash}</p>
                                            <p>浏览器查询</p>
                                        </div>
                                    </div>
                        })
                    }
                </section>
            </div>
        );
    }
}

export default Record;
