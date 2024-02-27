import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeTodo } from '../store/TodoSlice';
import { TodoType } from '../App';
import Button from './Button';

type Props = {
  todo: TodoType;
};

const Todo = ({ todo }: Props) => {
  const { text, id } = todo;

  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeTodo(id));
  };

  return (
    <Wrapper>
      <span>{text}</span>
      <Button className="remove-btn" onClick={() => handleRemove(id)}>
        삭제
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 3px solid yellow;

  margin-bottom: 10px;
  padding: 5px;

  .remove-btn {
    width: 30%;
    height: 45px;

    border-color: orange;
  }
`;

export default Todo;
