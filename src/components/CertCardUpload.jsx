import React from 'react'
import styled from 'styled-components'

class CertCardUpload extends React.Component {
    render() {
        const content = () => {
            if (this.props.preViewImg) {
                return(
                    <div className="img_wrapper" onClick={ () => {
                            this.props.preViewClick()
                        }}>
                        <img src={this.props.preViewImg} alt="preview" className="preview"/>
                    </div>
                )
            }
            return (
                <div className="no_img" onClick={ () => {
                            this.props.uploadClick()
                        }}>
                    <img src={require('../static/img/upload_icon.png')} alt="logo" className="icon"/>
                    <div className="tips">
                        <span>{this.props.text}</span>
                        <span className="strong">{this.props.strongText}</span>
                    </div>
                </div>
            )
        }
      	return (
        	<CertCardUploadContainer>
                {content()}
            </CertCardUploadContainer>
      	);
    }
}

// 编写行内样式
const CertCardUploadContainer = styled.div`
    width: 100%;
    background: #f7f7f7;
    border-radius: 0.3rem;
    overflow: hidden;
    .no_img{
        padding: 6rem 0 3rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .img_wrapper{
        width: 100%;
        height: 15.2rem;
        text-align: center;
        .preview{
            height: 100%;
        }
    }
    .icon{
        width: 3.6rem;
        height: 3.6rem;
    }
    .tips{
        margin-top: 1.5rem;
        font-size: 1.2rem;
        color: #A4A4A4;
    }
    .strong{
        color: #000;
    }
`

export default CertCardUpload;
