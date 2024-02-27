import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../store/TodoSlice';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuidv4(),
        text: inputValue,
      })
    );
    setInputValue('');
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="입력"
        />
        <Button type="submit" className="add-btn">
          추가
        </Button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  form {
    display: flex;
    justify-content: center;

    gap: 10%;

    .add-btn {
      width: 20%;
      height: 45px;

      border-color: yellow;
    }
  }

  input {
    width: 70%;

    border: 3px solid yellow;
  }
`;

export default InputForm;
