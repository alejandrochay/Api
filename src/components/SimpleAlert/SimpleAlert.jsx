import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';

export default function SimpleAlert() {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, [navigate]);

  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>
  );
}