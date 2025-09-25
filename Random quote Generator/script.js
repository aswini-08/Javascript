const quotes=["Do one thing every day that scares you.",
"Believe you can and you're halfway there.","Success is not final, failure is not fatal: it is the courage to continue that counts.",
"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind","Be the change that you wish to see in the world.","To live is the rarest thing in the world. Most people exist, that is all.",
"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","Insanity is doing the same thing, over and over again, but expecting different results",
"It's easy to make a buck. It's a lot tougher to make a difference.","Courage is doing what you are afraid to do. There can be no courage unless you are scared.","I will do nothing lightly. When I walk, I will walk heavily. When I fight, I will fight with conviction. When I speak, I will speak strongly. When I feel, I will feel everything. When I love, I will love with everything."
];

const qt=document.getElementById("Quote");
const btn=document.getElementById("gen");

function generateQt(){
    const ran=Math.floor(Math.random()*quotes.length);
    qt.innerText=quotes[ran];
}
btn.addEventListener("click",generateQt);