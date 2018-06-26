import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { WhiteSpace, WingBlank, Button, Slider } from 'antd-mobile'

class ShowLimit extends Base {
    constructor() {
        super();
        this.state = {
            isHasLimit: true,
            percent: 80
        }
    }

    componentDidMount() {
        this.setTitle('额度查看');
    }

    // 获取贷款
    getLimit() {
        this.props.history.push('/getloans');
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
                        ￥<span className="val">5,500</span>
                    </div>
                </div>
                <WhiteSpace/>
                <div className="info">
                    <div className="limit">
                        <div className="block left">
                            <div className="subtitle">已用额度</div>
                            <div className="money">
                                ￥<span className="val">10,000</span>
                            </div>
                        </div>
                        <div className="block right">
                            <div className="subtitle">总额度</div>
                            <div className="money">
                                ￥<span className="val">5,500</span>
                            </div>
                        </div>
                    </div>
                    <Slider
                        defaultValue={this.state.percent}
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
