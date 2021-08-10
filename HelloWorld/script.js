var message_parts = {
    first : ['Today you will ', 'You have lost the chance to ', 'This is what you get when you '],
    second : ['have a great day!', 'shine like a dimond', 'have a new start']
}

function getRand (arg) {
    return Math.floor(Math.random() * arg.length);
}

function playgame () {
    console.log(message_parts.first[getRand(message_parts.first)] + message_parts.second[getRand(message_parts.second)]);
}

playgame();