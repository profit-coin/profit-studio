import * as Label from '@radix-ui/react-label';
import styles from './FormComponent.module.scss';
import Text from '../../Text/Text';
import classNames from 'classnames';

export interface FormComponentProps {
  name: string;
  label?: string;
  isFullWidth?: boolean;
  children?: React.ReactNode;
  message?: string;
  errorMessage?: string;

}

function FormComponent ({ children, name, label, isFullWidth, errorMessage, message }: FormComponentProps) {
  return (
    <div className={classNames(styles.wrapper, { [styles.fullWidth]: isFullWidth })}>
      {label ? (
        <Label.Root className={styles.label} htmlFor={name}>
          {label}
        </Label.Root>
      ) : null}
      <div className={styles.inputContainer}>
        {children}
      </div>
      {errorMessage ? (
        <Text className={styles.errorMessage}>
          {errorMessage}
        </Text>
      ) : null}
      {message ? (
        <Text size="small" className={styles.message}>
          {message}
        </Text>
      ) : null}

    </div>
  );
}

export default FormComponent;
