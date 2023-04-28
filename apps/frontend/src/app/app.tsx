import styled from 'styled-components';
import '../styles/global.css'

import { Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Dashboard from '../components/dashboard';

const Wrapper = styled.div`
`;

export function App() {
  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header></Header>
              <Dashboard></Dashboard>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </Wrapper>
  );
}

export default App;
