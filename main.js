var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = content;
    console.log(content);

    if(content=="take my selfie"){
        console.log("taking my selfie")
        speak()

        }

}

function speak(){
    var synth=window.speechSynthesis;
    speak_data=" Please get ready, taking your selfie in 5 4 3 2 1..."
    var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);

     Webcam.attach(camera);
     camera=document.getElementById("camera");
     webcam.set({
         width:360,
         height:250,
         image_format:"jpeg",
         jpeg_quality:90
     })
}