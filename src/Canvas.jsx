import { Book } from './components/Book';
import { Header } from './components/Header';

export const App = () => {
  return (
    <>
      <Header/>
      <div style={{display: 'flex', flexDirection: 'row', gap: '60px'}}>
        <Book />
        <p style={{marginLeft: 20, paddingLeft: 20}}>
          Filme:
        </p>
      </div>
    </>
  )
}

