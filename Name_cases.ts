let personName: string = "Raja Tahir";

// Print name in lowercase
console.log("Lowercase: " + personName.toLowerCase());

// Print name in uppercase
console.log("Uppercase: " + personName.toUpperCase());

// Print name in titlecase
console.log("Titlecase: " + personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));

