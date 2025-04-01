import { useState } from 'react';
import { ButtonState } from '@/enums';
import Login from './Login';

function Button() {
  const [buttonState, setButtonState] = useState<ButtonState>(
    ButtonState.Login,
  );

  return (
    <div className="hidden sm:block">
      {buttonState === ButtonState.Login && <Login />}
    </div>
  );
}

export default Button;
