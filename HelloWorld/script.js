var message_parts = {
    first : ['Today you will ', 'You have lost the chance to ', 'This is what you get when you '],
    second : ['have a great day!', 'shine like a dimond', 'have a new start']
}

function playgame () {
    let ranFirst = Math.floor(Math.random() * message_parts.first.length);
    let ranSecond = Math.floor(Math.random() * message_parts.second.length);

    console.log(message_parts.first[ranFirst] + message_parts.second[ranSecond]);
}

playgame();