var alarm = new Audio();
var sound1 = new Audio('1.mp3');
var sound2 = new Audio('2.mp3');

window.addEventListener('load', () => {
    const fileInput = document.getElementById('file1');
    const playUploaded = document.getElementById('playUploaded');
    const play1 = document.getElementById('play1');
    const play2 = document.getElementById('play2');

    fileInput.addEventListener('change', (evt) => {
        let input = evt.target;
        if (input.files.length == 0) {
            return;
        }
        const file = input.files[0];
        if (!file.type.match('audio.*')) {
            alert("音声ファイルを選択してください。");
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            alarm.src = reader.result;
        };
        reader.readAsDataURL(file);
    });

    playUploaded.addEventListener('click', () => {
        if (alarm.src) {
            alarm.play();
        }
    });

    document.getElementById("play1").addEventListener("click", function() {
        var audio = new Audio('yeah.wav');
        audio.play();
    });
    
    document.getElementById("play2").addEventListener("click", function() {
        var audio = new Audio('foo.wav');
        audio.play();
    });
      
});
