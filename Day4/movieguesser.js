
const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

const guessInput = document.getElementById('user-guess');
const submitInput = document.getElementById('submit-button');
const hintInput = document.getElementById('hint-button');
const introText = document.getElementById('intro-text');
const line = document.getElementById('line');
const cardBody = document.getElementById('card-body');
const button = document.getElementById('button');



const randomExplanation = document.createElement('div');
const randomIndex = Math.floor(Math.random() * movies.length);
const randomMovie = movies[randomIndex];
randomExplanation.innerHTML = randomMovie.explanation;

line.append(randomExplanation);


submitInput.addEventListener('click', (event) => {
    const guess = guessInput.value;

    if(guess == randomMovie.title) {
        let ans = 'That is correct';
        const passOutput = document.createElement('div');
        passOutput.innerHTML = ans;
        button.append(passOutput);
        pass = true;

    } else {
        let ans = 'That is incorrect';
        const passOutput = document.createElement('div');
        passOutput.innerHTML = ans;
        button.append(passOutput);
    }
})

hintInput.addEventListener('click', (event) => {
    const showHint = document.createElement('div');
    showHint.innerHTML = 'Hint: ' + randomMovie.hint;
    line.append(showHint);
})



