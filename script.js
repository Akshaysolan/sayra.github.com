let btn = document.querySelector('#btn');
let content = document.querySelector('#content');

function speak(text){
   let text_speak = new SpeechSynthesisUtterance(text);
   text_speak.rate = 1;
   text_speak.volume = 1;
   text_speak.pitch = 1;
   text_speak.lang ="hi-GB";
   window.speechSynthesis.speak(text_speak);
}

function wishme(){
    let day = new Date();
    let hours = day.getHours();
    if(hours >= 0 && hours < 12){
        speak("Good Morning Sir");
    }else if(hours >= 12 && hours < 16){
        speak("Good evening Sir");
    }else{
        speak("Good night Sir");
    }
}

// window.addEventListener('load', ()=>{
//     wishme();
// });

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event)=>{
    
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    console.log(event);
    takeCommand(transcript.toLowerCase());

}


btn.addEventListener("click", ()=>{
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});


function takeCommand(msg){

    btn.style.display = "flex";
    voice.style.display = "none";
    if(msg.includes("hello")|| msg.includes("hi") || msg.includes("hey")){
        speak("hello sir, what can i help you?")
    }else if(msg.includes("who are you")){
        speak("I am virtual Assistant, created by Akshay");
    }else if(msg.includes("open youtube")){
        speak("opening youtube");
        window.open("https://www.youtube.com")
    }else if(msg.includes("open google")){
        speak("opening Google");
        window.open("https://www.google.com")
    }else if(msg.includes("open instagram")){
        speak("opening instagram");
        window.open("https://www.instagram.com")
    }else if(msg.includes("open facebook")){
        speak("opening facebook");
        window.open("https://www.facebook.com")
    }else if(msg.includes("open whatsapp")){
        speak("opening whatsapp");
        window.open("https://www.whatsapp.com")
    }else if (msg.includes("search images of") || msg.includes("show images of")) {
        let searchQuery = msg.replace("search images of", "").replace("show images of", "").trim();
        speak(`searching for images of ${searchQuery}`);
        window.open(`https://www.google.com/search?tbm=isch&q=${searchQuery}`, "_blank");
    } else if (msg.includes("bing images of") || msg.includes("search bing images of")) {
        let searchQuery = msg.replace("bing images of", "").replace("search bing images of", "").trim();
        speak(`searching for images of ${searchQuery} on Bing`);
        window.open(`https://www.bing.com/images/search?q=${searchQuery}`, "_blank");
    } else{
        let finaltext = "this what i found on the internet regarding"+msg.replace("sayra", "") || msg.replace("siara", "")
        speak(finaltext);
        window.open(`https://www.google.com/search?q=${msg.replace("saira","")}`, "_blank");
    }

}
