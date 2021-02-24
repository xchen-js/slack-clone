
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Login'
import Chat from './Chat'
import styled from 'styled-components'
import Header from './Header'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar />
            <Chat />
          <Switch>
          <Route path="/room">
            <Chat />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        </Main>
        </Container>
       
      </Router>
      
    </div>
  );
}

export default App;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`
const Main = styled.div`

  display: grid;
  grid-template-columns: 260px auto;
  
`