Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg",
    jpeg_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
document.getElementById("s-btn").onclick=function(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_image'src='"+data_uri+"'/>";
    });
}
console.log("ml5.version",ml5.version);
classifier=ml5.imageClassifier("https://storage.googleapis.com/tm-model/BFiDYauYu/model.json",modelcheck);
 
function modelcheck(){
    console.log('Model loaded');
}
document.getElementById('c-btn').onclick=function(){
    image=document.getElementById("captured_image");
    classifier.classify(image,getresult);
}
function getresult(error,results){
    if(error){
        console.error(error);
    }
else{
    console.log(results);
document.getElementById("get").innerHTML=results[0].label;
document.getElementById("get2").innerHTML=results[0].confidence.toFixed(2);
}
}