const emoji=document.querySelector('#hello');
const emojis=[
    "😃","😊","🤣","😷",
    "😒","😁","😍","😉",
    "😎","🥰","🤩","🤔",
    "😋","😶‍🌫️","🤐","😯",
    "🥶","🥵","😱","😵‍💫",
    "🥳","🥳","🥺","🤭",
    "🤓","👻","😸","👽"];
emoji.addEventListener("mouseover",()=>{
    emoji.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
});