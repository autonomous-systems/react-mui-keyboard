import React, { ChangeEvent } from 'react';
import { MuiKeyboard } from './components/MuiKeyboard';
import { TextField } from '@mui/material';
import { numbers, russianButtons, englishButtons } from './data/Keyboards';

const App = () => {
  const [checked, setChecked] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>('');
  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setInputValue(event.target.value);
  };
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <MuiKeyboard
      textField={
        <TextField
          onChange={handleUrlChange}
          onClick={handleChange}
          value={inputValue}
          fullWidth
          multiline
        />
      }
      slide
      direction="up"
      checked={checked}
      setInputValue={setInputValue}
      numbers={numbers}
      firstLanguage={russianButtons}
      secondLanguage={englishButtons}
      secondLangLabel="EN"
      firstLangLabel="RU"
      keyboardWidth={'900px'}
    />
  );
};

export default App;
