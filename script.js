document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { letter: "A", name: "Ages Calculator", link: "a/index.html" },
        { letter: "B", name: "Bad UI, Worse UX", link: "https://android-013.github.io/bad-ui/" },
        { letter: "C", name: "Card Matching Game", link: " https://android-013.github.io/Card-Game-Front/" },
        { letter: "D", name: "Digital Clock", link: "d.html" },
        { letter: "E", name: "Enigma Machine", link: "e/index.html" },
        { letter: "F", name: "Five Way (Star trek) RPS", link: "https://android-013.github.io/5-way-rps/" },
        //{ letter: "G", name: "Guess the Number Game", link: "guess-number.html" },
        //{ letter: "H", name: "Horoscope Finder", link: "horoscope.html" },
        //{ letter: "I", name: "Image Gallery", link: "image-gallery.html" },
        //{ letter: "J", name: "JavaScript Calculator", link: "calculator.html" },
        //{ letter: "K", name: "Keyboard Event Tester", link: "keyboard-tester.html" },
        //{ letter: "L", name: "Loan EMI Calculator", link: "loan-calculator.html" },
        //{ letter: "M", name: "Movie Search API", link: "markdown.html" },
        //{ letter: "N", name: "Notes App", link: "notes.html" },
        //{ letter: "O", name: "Online Polling System", link: "polling.html" },
        { letter: "P", name: "Password Generator", link: "password.html" },
        { letter: "Q", name: "Quiz App", link: "quiz.html" },
        { letter: "R", name: "Rock Paper Secissor Game", link: "https://android-013.github.io/rps-front/" },
        { letter: "S", name: "Slot Machine", link: " https://android-013.github.io/Slot-machine-front/" },
        { letter: "T", name: "Tic Tac Toe", link: "https://android-013.github.io/Tic-Tac-Toe/" },
        //{ letter: "U", name: "URL Shortener API", link: "url-shortener.html" },
        //{ letter: "V", name: "Voting System", link: "https://android-013.github.io/Elo-Poll/" },
        //{ letter: "W", name: "Weather API", link: "weather.html" },
        //{ letter: "X", name: "Xylophone Web App", link: "xylophone.html" },
        //{ letter: "Y", name: "YouTube API", link: "youtube-search.html" },
        //{ letter: "Z", name: "Zoom Image on Hover", link: "zoom.html" }
    ];

    const grid = document.querySelector(".grid");

    projects.forEach(project => {
        const btn = document.createElement("button");
        btn.textContent = `${project.letter} - ${project.name}`;
        btn.onclick = () => window.location.href = project.link;
        grid.appendChild(btn);
    });
});
