import { FC, InputHTMLAttributes } from 'react';

import { inputClassName } from './Input.config';

type IInput = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<IInput> = (props) => {
  return <input {...props} className={[inputClassName, props.className].join(' ')} />;
};

export default Input;
