import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  squareRoot,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function CounterSquareRoot() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
        <button
          className={styles.button}
          aria-label="Square root value"
          onClick={() => dispatch(squareRoot())}
        >
          Square root
        </button>
  );
}