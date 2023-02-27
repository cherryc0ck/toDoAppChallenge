import './App.css';
import ToDoHeader from './Components/ToDo/ToDoHeader';
import styled from 'styled-components';

function App() {
  return (
    <StyledContainer>
      <ToDoHeader />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 12px;
`;

export default App;
