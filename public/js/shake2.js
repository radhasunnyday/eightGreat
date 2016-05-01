/**
 * Created by der on 4/30/16.
 */

<script type="text/javascript" src="https://cdn.rawgit.com/alexgibson/shake.js/master/shake.js"></script>
    <script>
//listen to shake event
var shakeEvent = new Shake({threshold: 15});
shakeEvent.start();
window.addEventListener('shake', function(){
    alert("Shaken, not stirred");

}, false);

//stop listening
function stopShake(){
    shakeEvent.stop();
}

//check if shake is supported or not.
if(!("ondevicemotion" in window)){alert("Not Supported");}
</script>



// var Shake = require('shake.js');
//
// var myShakeEvent = new Shake({
//     threshold: 15, // optional shake strength threshold
//     timeout: 1000 // optional, determines the frequency of event generation
// });
//
// myShakeEvent.start();
//
// window.addEventListener('shake', shakeEventDidOccur, false);
//
// //function to call when shake occurs
// function shakeEventDidOccur () {
//
//     //put your own code here etc.
//     alert('shake!');
// }

//window.removeEventListener('shake', shakeEventDidOccur, false);

// myShakeEvent.stop();