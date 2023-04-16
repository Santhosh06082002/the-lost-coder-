import React from 'react';

function Game()  {

  // Creativity
  const clue1 = <div>
    <h2>Clue 1: The Art of Puzzle Design</h2>
    <p>Here's a puzzle for you to solve:</p>
    <img src="https://th.bing.com/th/id/OIP.Sc-U0QROWN9ZXuktaAth-QHaFj?w=237&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="puzzle" />
    <p>count the number of complete puzzle blocks, you'll find your next clue!</p>
  </div>;

  // Coding Knowledge
  const clue2 = <div>
    <h2>Clue 2: Decoding the Message</h2>
    <p>You've found a piece of paper with this message:</p>
    <p>101010 110011 111000 100101 110111 111010 100110 110000</p>
    <p>It looks like some sort of binary code. Can you decode it?</p>
    <p>The answer will lead you to your next clue.</p>
  </div>;

  // Aptitude
  const clue3 = <div>
    <h2>Clue 3: The Weighing Game</h2>
    <p>You're in a room with 12 balls, one of which is slightly heavier than the others. You have a balance scale, and can only use it three times. How do you figure out which ball is heavier?</p>
    <p>Once you've solved the puzzle, you'll find your next clue.</p>
  </div>;

  // Attention to Detail
  const clue4 = <div>
    <h2>Clue 4: Spot the Difference</h2>
    <p>Take a look at these two images:</p>
    <img src="https://th.bing.com/th/id/OIP.LTjkdQ_44K7_SJTJHo80dAHaDj?w=306&h=167&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="image1" />
    {/* <img src="image2.jpg" alt="image2" /> */}
    <p>Can you spot the differences between them? the total number of difference is the clue.</p>
    <p>Once you've found all differences, you'll find your next clue.</p>
  </div>;

  // Communication Skills
  const clue5 = <div>
    <h2>Clue 5: The Ciphered Letter</h2>
    <p>You've found a letter with some strange symbols on it:</p>
    <p>%$&! #@^* _^&$</p>
    <p>It looks like some sort of cipher. Can you decipher it?</p>
    <p>The answer will lead you to the location of the treasure.</p>
  </div>;

  return (
    <div>
      {clue1}
      {clue2}
      {clue3}
      {clue4}
      {clue5}
    </div>
  );
};
export default Game;