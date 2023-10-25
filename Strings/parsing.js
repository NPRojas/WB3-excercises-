function parseAndDisplayName (name) {
    let space = name.indexOf(' ');
    let firstName = name.slice(0, space);
    let lastName = name.slice(space);

    let displayName = `Name: ${name}\nFirst Name: ${firstName}\nLast Name:${lastName}\n`;

    console.log(displayName);
}

parseAndDisplayName('Brenda Kaye');
parseAndDisplayName('Ian Auston');
parseAndDisplayName('Siddalee Grace');