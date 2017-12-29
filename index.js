(() => {
    'use strict';
    let textBody = document.getElementById('text');

    if ("webkitSpeechRecognition" in window) {
        textBody.innerText = "allow access to microphone and start speaking..."

        var speechRecognizer = new webkitSpeechRecognition();
        speechRecognizer.continuous = true;
        speechRecognizer.interimResults = true;
        speechRecognizer.lang = 'en-IN';
        speechRecognizer.start();

        var finalTranscripts = '';

        speechRecognizer.onresult = function (event) {
            var interimTranscripts = '';
            for (var i = event.resultIndex; i < event.results.length; i++) {
                var transcript = event.results[i][0].transcript;
                transcript.replace("\n", "<br>");
                if (event.results[i].isFinal) {
                    finalTranscripts += transcript;
                } else {
                    interimTranscripts += transcript;
                }
            }
            finalTranscripts.replace('full stop', '.');
            finalTranscripts.replace('comma', ',');
            interimTranscripts.replace('full stop', '.');
            interimTranscripts.replace('comma', ',');
            textBody.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
        };
        speechRecognizer.onerror = function (event) {
        };

    } else {
        textBody.innerText = "The speech recognition is not supported in thi browser";
    }
})();

