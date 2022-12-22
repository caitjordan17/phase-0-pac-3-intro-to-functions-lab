function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    if (string == string.toLowerCase()) {
        const huhMessage = 'I can\'t hear you!';
        return `${huhMessage}`;
    }
    if (string == string.toUpperCase()) {
        const heyMessage = 'YES INDEED!';
        return `${heyMessage}`;
    }
    if (string === 'Let\'s have dinner together!') {
        const yumMessage = 'I would love to!';
        return `${yumMessage}`;
    }
}