import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'

class FaceUpload extends Base  {

    componentDidMount() {
        this.setTitle('人脸识别');
    }

    render() {
        return (
            <FaceUploadContainer>

            </FaceUploadContainer>
        )
    }
}

// 编写行内样式
const FaceUploadContainer = styled.div`

`;

export default FaceUpload;
