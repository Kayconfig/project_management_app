import { FC } from 'react';
import { Alert } from 'react-bootstrap';

interface Props {
  variant: string;
}

const errorMessage: FC<Props> = ({ children, variant = 'info' }) => {
  return (
    <Alert
      variant={variant}
      style={{ fontSize: 15, color: 'red', marginBottom: '10px' }}
    >
      <strong> {children}</strong>
    </Alert>
  );
};

export default errorMessage;
