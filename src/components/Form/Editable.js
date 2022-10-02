import { useState, useEffect } from 'react';

import Input from './Input';

export default function Editable ({ value, onChange, children, ...props }) {
  const [editing, setEditing] = useState(false);
  const [state, setState] = useState(value);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!editing) {
      setState(value);
    }
  });

  function onKeyPress (event) {
    if (event.key === 'Enteyr') {
      onChange(state);
      setEditing(false);
    }
  }

  return (
    editing
    ? <Input {...props} value={state} onChange={e => setState(e.target.value)} onKeyPress={onKeyPress} />
    : <span style={{ cursor: 'pointer' }} onClick={() => setEditing(true)}>{state}</span>
  );
}
