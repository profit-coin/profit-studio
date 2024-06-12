import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import Input, { InputProps } from '../common/form/Input/Input';

const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: UseControllerProps<TFieldValues, TName> & InputProps,
) => {
  const { field, fieldState } = useController<TFieldValues, TName>(props);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { control, ...elementProps } = props;
  return <Input {...elementProps} {...field} errorMessage={fieldState.error?.message} />;
};

export default FormInput;
