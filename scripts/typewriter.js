const jobTitles = ["Software Developer", "Software Engineer", "Frontend Developer", "Backend Developer", "Fullstack Developer"];
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
        timer = setTimeout(loopTyping, 150);
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
        timer = setTimeout(loopDeleting, 100);
    }
    loopDeleting();
};

typingEffect();