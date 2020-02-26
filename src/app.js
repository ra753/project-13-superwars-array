const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let newPlayer = '';

    // Instead of for-loop use Map method
    // Code here
    newPlayer = players.map(function (name, i) {
        var jsonObj = {
            name: name,
            strength: getRandomStrength(),
            type: "",
            image: "../images/super" + "-" + (i) + ".png" 
        }
        if (i%2 === 0) {
            jsonObj.type = "hero";
        } else {
            jsonObj.type = "villan";
        }


        return jsonObj;
    });
    return newPlayer;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let template = players.filter(player => player.type == type).map(player =>
        `<div class="player">
        <img src="${player.image}" alt="">
        <div class="name">${player.name}</div>
        <div class="strength">${player.strength}</div>
        </div>`).join();

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here

    return template;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
