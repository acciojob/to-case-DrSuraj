function toCase(str: string): string {
    // Check if the input string is empty
    if (str.length === 0) {
        return '-';
    }

    // Convert the string to lowercase and uppercase, and join them with '-'
    const result = `${str.toLowerCase()}-${str.toUpperCase()}`;
    return result;
}

// Examples
console.log(toCase('Mthatha'));     // Output: 'mthatha-MTHATHA'
console.log(toCase('HelloWorld'));   // Output: 'helloworld-HELLOWORLD'
console.log(toCase('OpenAI'));       // Output: 'openai-OPENAI'
console.log(toCase(''));             // Output: '-'
