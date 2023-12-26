function toCase(text) {
    // Check if the input text is empty
    if (text === '') {
        return '-';
    }

    // Convert the text to lowercase and uppercase with - as the delimiter
    const lowercaseText = text.toLowerCase();
    const uppercaseText = text.toUpperCase();

    // Return the formatted string
    return `${lowercaseText}-${uppercaseText}`;
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
