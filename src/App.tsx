import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultInput } from './components/DefaultInput';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';


import './styles/global.css'
import './styles/theme.css'

export function App() {

  return(
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className='formRow'>
            <DefaultInput labelText='Task' id="meuInput" type='text' placeholder='Task' disabled/>
          </div>

          <div className='formRow'>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>

      <Footer />
    </>
  );

}