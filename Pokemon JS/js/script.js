function alert_main()
{
    if(document.URL.includes("main.html")){
        window.alert("You're already in the main page.");
    } else {
        document.location.href="/";
    }
}

function go_to_twitter() {
    window.open("https://twitter.com/digimon_games", "_blank");
}

function go_to_facebook() {
    window.open("https://es-la.facebook.com/DigimonOfficial", "_blank");
}

function go_to_web_page() {
    window.open("https://digimon.net", "_blank");
}

fetch('https://digimon-api.vercel.app/api/digimon')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        myJson.forEach((digimon) => {
            //declare variables
            var new_div = document.createElement('div');
            var new_p = document.createElement('p');
            var new_img = document.createElement('img');
            var current_div = document.getElementById('pokemon-list');

            //add attributes and style
            new_img.src = digimon.img;
            new_img.alt = digimon.name;
            new_p.textContent = digimon.name;
            new_div.style.border = "1px solid rgb(218, 213, 202)";
            new_img.style.width = "30%";
            new_p.style.fontSize = "2em";
            new_p.style.margin = "10px 10px";
            new_p.style.color = "rgb(209, 156, 51)";

            //append elements
            new_div.appendChild(new_p);
            new_div.appendChild(new_img);
            current_div.appendChild(new_div);
        })
    });