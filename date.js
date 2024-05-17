const decision= document.querySelector('.decision');
const NoBtn = document.querySelector('.noBTN');
const noReact = NoBtn.getBoundingClientRect();
const decisionReact = desicion.getBoundingClientRect();

NoBtn.addEventListener('mouseover', ()=> {
    const i= Math.floor(Math.random() * (decisionReact.width - noReact.width)) + 1;
    const j = Math.floor(Math.random() * (decisionReact.height - noReact.height)) + 1;

    NoBtn.style.left = i + 'px';
    NoBtn.style.top = j +'px';
});

const yesBtn = document.querySelector('.yes');
yesBtn.addEventListener('click', () => {
    question.innerHTML  = 'Yeyyyyy 🥂';
    Teddy.style.video = "HappyGIF.Teddy2.mp4";
    yes.innerHTML= "YEEEESSS";
})

