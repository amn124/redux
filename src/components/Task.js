import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../redux/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
    </div>
  );
};

export default Task;
