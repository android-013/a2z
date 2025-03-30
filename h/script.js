document.getElementById("findSign").addEventListener("click", function () {
    const birthdate = new Date(document.getElementById("birthdate").value);
    if (isNaN(birthdate)) {
        alert("Please enter a valid date.");
        return;
    }

    const zodiac = getZodiacSign(birthdate);
    document.getElementById("zodiacResult").innerText = "Your Zodiac Sign: " + zodiac;
    document.getElementById("showHoroscope").style.display = "block";
});

document.getElementById("showHoroscope").addEventListener("click", function () {
    document.getElementById("loadingPopup").style.display = "block";
    
    const loadingBar = document.getElementById("loadingBar");
    const loadingText = document.getElementById("loadingText");
    const messages = [
        "Scanning Jupiter weather...",
        "Scanning Saturn's rings...",
        "Scanning Lunar eclipses...",
        "Scanning Mercury...",
        "Scanning Mars poles...",
        "Scanning birds' flights...",
        "Scanning black cats' positive energy...",
        "Scanning local politics...",
        "Scanning New York stock exchange...",
        "Scanning your ex's OnlyFans..."
    ];

    let progress = 0;
    let messageIndex = 0;
    
    function updateLoading() {
        if (progress < 100) {
            progress++;
            loadingBar.style.width = progress + "%";

            if (progress % 10 === 0 && messageIndex < messages.length) {
                loadingText.innerText = messages[messageIndex++];
            }

            setTimeout(updateLoading, 300);
        } else {
            document.getElementById("loadingPopup").style.display = "none";
            document.getElementById("finalPopup").style.display = "block";
        }
    }

    updateLoading();
});

function getZodiacSign(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
}

function closePopup() {
    document.getElementById("finalPopup").style.display = "none";
}
