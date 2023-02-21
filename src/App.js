import React, { useEffect } from 'react';

import './App.css';

function App() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);

  function ColorChange (data) {
    let windowColor = document.getElementsByClassName('App');
    let text = document.getElementsByClassName('text');
    let author = document.getElementsByClassName('author');
    let bird = document.getElementById('tweet-quote')
    let person = document.getElementById('link2')
    let newQuote = document.getElementById('new-quote');
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    windowColor[0].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    newQuote.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    bird.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    person.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    text[0].style.color = `rgb(${a}, ${b}, ${c})`;
    author[0].style.color = `rgb(${a}, ${b}, ${c})`;
    randQuote()
  }

  async function randQuote() {
    const request = new Request('https://api.quotable.io/random?maxLength=60')
    const author = document.getElementsByClassName('author');
    const text = document.getElementsByClassName('text');

    fetch(request)
    .then((response) => response.json())
    .then((data) => {
      return (
        author[0].innerHTML = `- ${data.author}`,
        text[0].innerHTML = `"${data.content}`
      )
    })
  }

  useEffect(() => {
    randQuote()

    return () => {
      randQuote()
    }
  })
    

  return (
    <div className="App" style={{backgroundColor: `rgb(${a}, ${b}, ${c})`}} >
      <body className='container'>
          <div id='quote-box' className='quote-box' >
          <div id='text' className='text' style={{color: `rgb(${a}, ${b}, ${c})`}} ></div>
          <div id='author' className='author' style={{color: `rgb(${a}, ${b}, ${c})`}} ></div>
          {/* make button and new qoute work as a link */}
          <div className='links'>
            <a href='https://www.twitter.com/intent/tweet'  id='tweet-quote' style={{backgroundColor: `rgb(${a}, ${b}, ${c})`}} >
              <span class="material-symbols-outlined">flutter_dash</span>
            </a>
            <a href='https://www.tumblr.com/' id='link2'style={{backgroundColor: `rgb(${a}, ${b}, ${c})`}} >
              <span class="material-symbols-outlined">man_3</span>
            </a>
            <button id='new-quote' onClick={ColorChange}  style={{backgroundColor: `rgb(${a}, ${b}, ${c})`}} >New Quote</button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
