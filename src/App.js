import './App.css';
import ToDoHeader from './components/Another/TodoHeader';
import styled from 'styled-components';
import ToDoList from './components/TodoList/TodoList';

function App() {
  return (
    <StyledContainer>
      <ToDoHeader />
      <ToDoList />
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
