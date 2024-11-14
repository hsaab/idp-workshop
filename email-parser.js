function parseEmailString(emailString) {
    let emailArray = emailString.split(",");

    let formattedArray = [];

    emailArray.map((email) => {
        let formattedEmail = email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        formattedArray.push(formattedEmail);
    });

    formattedArray.flat().filter(n=>n).map((email) => {
        console.log(`${email}`)
    });

    
    return formattedArray;
}

parseEmailString(emailString);