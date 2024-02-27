import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { GlobalStyle } from './style/global-style';
import InputForm from './components/InputForm';
import Todo from './components/Todo';
import { RootState } from './store/store';

export interface TodoType {
  id: string;
  text: string;
}

function App() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <Wrapper>
      <GlobalStyle />
      <InputForm />
      <ul className="todo-list">
        {todos.map((todo: TodoType) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 400px;
  height: 100vh;

  margin: 0 auto;

  .todo-list {
    margin-top: 10px;
  }
`;

export default App;
