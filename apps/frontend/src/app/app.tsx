import styled from 'styled-components';
import '../styles/global.css';

import { Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Dashboard from '../components/dashboard';
import { ModalProvider } from 'styled-react-modal';

const Wrapper = styled.div``;

export function App() {
  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header></Header>
              <ModalProvider>
                <Dashboard></Dashboard>
              </ModalProvider>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </Wrapper>
  );
}

export default App;
