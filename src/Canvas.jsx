import { Movie } from './components/Movie';
import { Header } from './components/Header';
import styled, {keyframes} from 'styled-components';
import whitenoise from '../src/assets/images/noise.webp'


const shift = keyframes`
  0% {
     transform: translateX(10%) translateY(10%)
  }
  100% {
    transform: translateX(-10%) translateY(-10%)
  }
`;

const Screen = styled.div`
    height: 100vh;
    position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

const NoiseOverlay = styled.div`
    position: absolute;
    inset: -200%;
    background-image: url(${whitenoise});
    opacity: 25%;
    animation: ${shift} 0.2s linear infinite both;
    pointer-events: none;
`;


export const App = () => {
  return (
    <>
    <Header/>
    <Screen>
      <Content>
        <Movie />
      </Content>
      <NoiseOverlay/>
    </Screen>
    </>
  )
}

