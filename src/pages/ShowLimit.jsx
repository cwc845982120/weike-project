import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { WhiteSpace, WingBlank, Button, Slider, Modal } from 'antd-mobile'
import { getForeverStorage } from '../common/utils'

const alert = Modal.alert;

class ShowLimit extends Base {
    constructor() {
        super();
        this.state = {
            userUseAmt: 0,
            allLimit: 0,
            isHasLimit: true,
            percent: 0
        }
    }

    componentDidMount() {
        this.setTitle('额度查看');
        let uid = getForeverStorage("userInfo") ? getForeverStorage("userInfo").id : "";
        if (!uid) {
            alert('提示', '未检测到您的认证信息，请重新认证', [
                { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
                { text: '重新认证', onPress: () => {
                    this.props.history.push('/certificationcenter');
                } }
            ]);
            return;
        }
        this.getResponse('/api/getUserInfo', {
            uid 
        }).then(res => {
            if (res.code === 1) {
                if (res.data.credit_limit === 0){
                    this.setState({
                        isHasLimit: false
                    })
                    return;
                }
                this.setState({
                    userUseAmt: res.data.userUseAmt,
                    allLimit: res.data.credit_limit,
                    percent: ~~(res.data.userUseAmt * 100 / res.data.credit_limit)
                })
            } else {
                this.$toast(res.msg);
            }
        }).catch(e => {
            console.log(e.message);
            this.$toast('获取用户额度失败');
        })
    }

    // 获取贷款
    getLimit() {
        let canUseLimit = ~~(this.state.allLimit - this.state.userUseAmt);
        this.props.history.push(`/getloans?canUseLimit=${canUseLimit}`);
    }

    render() {
        /** 没有额度 */
        const noLimit = (
            <div className="no_limit">
                <img src={require('../static/img/no_limit.png')} alt="icon" />
                <div className="title">未能获取</div>
                <div className="tip">您暂时未能取得我司贷款额度！</div>
            </div>
        )
        /** 有额度 */
        const hasLimit = (
            <div className="has_limit">
                <div className="header">
                    <img src={require('../static/img/has_limit.png')} alt="icon" />
                    <div className="title">可用额度</div>
                    <div className="money">
                        ￥<span className="val">{ ~~(this.state.allLimit - this.state.userUseAmt) }</span>
                    </div>
                </div>
                <WhiteSpace/>
                <div className="info">
                    <div className="limit">
                        <div className="block left">
                            <div className="subtitle">已用额度</div>
                            <div className="money">
                                ￥<span className="val">{ this.state.userUseAmt }</span>
                            </div>
                        </div>
                        <div className="block right">
                            <div className="subtitle">总额度</div>
                            <div className="money">
                                ￥<span className="val">{ this.state.allLimit }</span>
                            </div>
                        </div>
                    </div>
                    <Slider
                        value={this.state.percent}
                        min={0}
                        max={100}
                        trackStyle={{
                            backgroundColor: '#f5b723',
                            height: '10px',
                        }}
                        railStyle={{
                            backgroundColor: '#855505',
                            height: '10px',
                        }}
                        handleStyle={{
                            borderColor: 'transparent',
                            backgroundColor: 'transparent',
                        }}
                    />
                </div>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank>
                    <Button style={ btnStyle } onClick={ this.getLimit.bind(this) }>点击获取贷款</Button>
                </WingBlank>
            </div>
        )
      	return (
        	<ShowLimitContainer>
				{ this.state.isHasLimit ? hasLimit : noLimit }
			</ShowLimitContainer>
      	);
    }
}

// 编写行内样式
const ShowLimitContainer = styled.div`
    .no_limit{
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .has_limit{
        .header{
            background: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            .title{
                font-size: 1.4rem;
            }
        }
        .info{
            background: #fff;
            padding: 2rem 1rem 4rem 1rem;
            .am-slider-rail{
                border-radius: 1rem;
            }
            .am-slider-track{
                border-radius: 1rem;
            }
            .limit{
                display: flex;
            }
            .block{
                flex: 1;
            }
            .subtitle{
                font-size: 1.4rem;
            }
            .right{
                text-align: right;
            }
            .money{
                margin: 0.8rem 0 2rem 0;
            }
        }
    }
    img{
        width: 7rem;
        height: 7rem;
        margin: 4.5rem 0 2.5rem 0;
    }
    .title{
        font-size: 2rem;
    }
    .tip{
        color: #888888;
        font-size: 1.4rem;
        margin: 2rem 0;
    }
    .money{
        font-size: 2rem;
        font-weight: 600;
        margin: 2rem 0;
        .val{
            font-size: 3rem;
        }
    }
`;

const btnStyle = {
    background: '#ff7700',
    color: '#fff'
}

export default ShowLimit;
