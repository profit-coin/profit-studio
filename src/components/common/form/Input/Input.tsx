import { ForwardedRef, InputHTMLAttributes, forwardRef, useCallback } from 'react';
import FormComponent, { FormComponentProps } from '../FormComponent/FormComponent';
import styles from './Input.module.scss';
import classNames from 'classnames';

export interface InputProps extends FormComponentProps {
  name: string;
  message?: string;
  isFullWidth?: boolean;
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  errorMessage?: string;
  prefix?: string;
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
}

const Input = forwardRef(function Input ({ name, message, value, placeholder, isFullWidth, errorMessage, disabled, label, prefix, onChange, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    },
    [onChange],
  );


  return (
    <FormComponent
      name={name}
      label={label}
      message={message}
      isFullWidth={isFullWidth}
      errorMessage={errorMessage}
    >
      <div className={classNames(styles.container, {[styles.fullWidth]: isFullWidth})}>
        {prefix ? (
          <span className={styles.prefix}>
            {prefix}
          </span>
        ) : null}
        <input
          {...props}
          value={value}
          disabled={disabled}
          className={styles.input}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </FormComponent>
  );
});

export default Input;
