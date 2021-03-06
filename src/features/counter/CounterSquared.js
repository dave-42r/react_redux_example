import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  square,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function CounterSquared() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
        <button
          className={styles.button}
          aria-label="Square value"
          onClick={() => dispatch(square())}
        >
          Square
        </button>
  );
}