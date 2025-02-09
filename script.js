document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { letter: "A", name: "Age Calculator", link: "a/index.html" },
        { letter: "B", name: "Blog Homepage", link: "blog-homepage.html" },
        { letter: "C", name: "Countdown Timer", link: "countdown-timer.html" },
        { letter: "D", name: "Digital Clock", link: "digital-clock.html" },
        { letter: "E", name: "Expense Tracker", link: "expense-tracker.html" },
        { letter: "F", name: "Flashcard Quiz", link: "flashcard-quiz.html" },
        { letter: "G", name: "Guess the Number Game", link: "guess-number.html" },
        { letter: "H", name: "Horoscope Finder", link: "horoscope.html" },
        { letter: "I", name: "Image Gallery", link: "image-gallery.html" },
        { letter: "J", name: "JavaScript Calculator", link: "calculator.html" },
        { letter: "K", name: "Keyboard Event Tester", link: "keyboard-tester.html" },
        { letter: "L", name: "Loan EMI Calculator", link: "loan-calculator.html" },
        { letter: "M", name: "Markdown Previewer", link: "markdown.html" },
        { letter: "N", name: "Notes App", link: "notes.html" },
        { letter: "O", name: "Online Polling System", link: "polling.html" },
        { letter: "P", name: "Password Generator", link: "password.html" },
        { letter: "Q", name: "Quiz App", link: "quiz.html" },
        { letter: "R", name: "Rock Paper Secissor Game", link: "https://android-013.github.io/rps-front/" },
        { letter: "S", name: "Slot Machine", link: " https://android-013.github.io/Slot-machine-front/" },
        { letter: "T", name: "To-Do List App", link: "todo.html" },
        { letter: "U", name: "URL Shortener UI", link: "url-shortener.html" },
        { letter: "V", name: "Voting System", link: "voting.html" },
        { letter: "W", name: "Weather App", link: "weather.html" },
        { letter: "X", name: "Xylophone Web App", link: "xylophone.html" },
        { letter: "Y", name: "YouTube Video Search", link: "youtube-search.html" },
        { letter: "Z", name: "Zoom Image on Hover", link: "zoom.html" }
    ];

    const grid = document.querySelector(".grid");

    projects.forEach(project => {
        const btn = document.createElement("button");
        btn.textContent = `${project.letter} - ${project.name}`;
        btn.onclick = () => window.location.href = project.link;
        grid.appendChild(btn);
    });
});
