import styled from 'styled-components';
import pillar from './pattern.jpg'


export const AppContainer = styled.section`
    overflow: hidden;
    position: relative;
`;
export const LeftPillar = styled.div`
    background-image: url(${pillar});
    background-repeat: repeat-y;
    height: 100vh;
    overflow: hidden;
    width: 192px;
`;
export const RightPillar = styled.div`
    background-image: url(${pillar});
    background-repeat: repeat-y;
    height: 100vh;
    width: 192px;
    overflow: hidden;
`;
export const AppMain = styled.div`
    flex-grow: 1;
`;