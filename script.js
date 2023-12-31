let quote = document.getElementById("quote");
let nextBtn = document.getElementById("next_quote");
let author = document.getElementById("author");
let twitter = document.getElementById("twitter")
const url = "https://api.quotable.io/random";


function tweetQuote() {
    let post = quote.innerHTML;
    window.open(`https://twitter.com/intent/tweet?text=${post}`)

}

function randomBgColor(){
    const hexNum = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];           
    let color = "#";
   for(let i=0;i<6;i++){
    let indx = Math.floor(Math.random()*16);
    color+= hexNum[indx];
   }
   return color;
}


async function generateQuote() {
    let bgColor = randomBgColor();
    document.body.style.backgroundColor = bgColor;
    let response = await fetch(url);
    let result = await response.json();
    console.log(result)
    quote.innerHTML = result.content;
    let writer = result.author;
    let arr = writer.split(",");
    author.innerHTML = arr[0];

}
generateQuote();
nextBtn.addEventListener('click', generateQuote);
twitter.addEventListener('click', tweetQuote);