import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

export type Word = {
  word: string;
  okay: 'yes' | 'no';
  suggestion?: string;
  explanation?: string;
}

function App() {

  let [word, setWord] = useState<string>('');
  let storedWords : Word[] = [
    { word: 'retarded', okay: 'no', suggestion: 'bonkers', explanation: 'This is ableistic'},
    { word: 'pussy', okay: 'no', suggestion: 'weakling', explanation: 'This is sexist and does not really make sense as no muscle is as strong as the vagina'},
    { word: 'bonkers', okay: 'yes'}
  ];

  const updateWord = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setWord(event.target.value);
  }

  const catchReturn = (event: React.KeyboardEvent) => {
    console.log(word);
    if (event.key === 'Enter') {
      const cussWord = storedWords.find((storedWord) => storedWord.word === word);
      if (cussWord !== undefined) {
        if (cussWord.okay === 'yes') {
          console.log('Yep that word is good');
        } else {
          console.log('Nope, dont use that. ' + cussWord.suggestion);
        }
      } else {
        console.log('cant help with this word sorry. dont know it yet');
      }
    }
  }

  return (
    <div className="App">
      <header>
        <img src="logo.png" alt="A speech bubble with a heart inside, next to it are the words 'Good Bad Words'"></img>
      </header>

      <section>
        <h1>What is good bad words?</h1>

        <p>Swearing is normal and can even be benefitial for your health.
          Many of us might have common swear words in our daily language but we should stop to ask ourselves - Is this still okay?
          Good bad words is meant to be able to tell you if your favorite swear words could be inappropriate, and even better, to suggest you a better one to express your feelings 😉.
        </p>

        <h1>Do I really need this?</h1>

        <p>Maybe not but hey, what's wrong with checking if your favorite swear word could be hurt- or disrespectful to any group of people?</p>
      </section>

      <section>
        <h1>
          Enter your favorite cussword to see, how it rates!
        </h1>

        <FormControl>
          <TextField onChange={updateWord} onKeyPress={catchReturn} value={word} label="Is this okay?" variant="outlined" />
        </FormControl>
      </section>

      <footer>
        Made with ❤ by <a href="https://female-coders.at/">Female Coders Linz</a>
      </footer>
    </div>
  );
}

export default App;
