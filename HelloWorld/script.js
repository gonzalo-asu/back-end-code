var message_parts = {
    first : ['Today you will ', 'You have lost the chance to ', 'This is what you get when you '],
    second : ['have a great day!', 'shine like a dimond', 'have a new start']
}

function getRandContent (arg) {
    return arg[Math.floor(Math.random() * arg.length)];
}

function playgame () {
    console.log(getRandContent(message_parts.first) + getRandContent(message_parts.second));
}

playgame();