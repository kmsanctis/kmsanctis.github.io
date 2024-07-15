const jobTitles = ["Software Developer", "Software Engineer", "Frontend Developer", "Backend Developer", "Programmer"];
let i = 0;
let timer;

function typingEffect() {
    let jobTitle = jobTitles[i].split("");
    var loopTyping = function() {
        if (jobTitle.length > 0) {
            document.getElementById('jobtitles').innerHTML += jobTitle.shift();
        } else {
            deletingEffect();
            return false;
        }
        timer = setTimeout(loopTyping, 225);
    }
    loopTyping();
};

function deletingEffect() {
    let jobTitle = jobTitles[i].split("");
    var loopDeleting = function() {
        if (jobTitle.length > 0) {
            jobTitle.pop();
            document.getElementById('jobtitles').innerHTML = jobTitle.join("");
        } else {
            if (jobTitles.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            typingEffect();
            return false;
        }
        timer = setTimeout(loopDeleting, 150);
    }
    loopDeleting();
};

typingEffect();