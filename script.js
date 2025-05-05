// Arrays to store the links
let links = [];

// Functions to display the list of links
function showLinks() {
    if (links.length === 0) {
        alert('No links available.');
        return;
    }
    let message = 'List of Links:\n\n';
    for (let i = 0; i < links.length; i++) {
        message += `${i + 1}. Title: ${links[i].title}, URL: ${links[i].url}, Author: ${links[i].author}\n`;
    }
    alert(message);
}

// Functions to add a new links
function addLink() {
    let title = prompt('Enter the title of the link:');
    let url = prompt('Enter the URL of the link:');
    let author = prompt('Enter the author of the link:');
    
    // Validate the URL's
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }

    const newLink = { title, url, author };
    links.push(newLink);

    alert('New link added!');
}

// Functions to remove a links
function removeLink() {
    if (links.length === 0) {
        alert('No links to remove.');
        return;
    }

    let index = parseInt(prompt('Enter the index of the link to remove:')) - 1;

    // Check if the index is valid
    while (index < 0 || index >= links.length) {
        alert('Invalid index! Please try again.');
        index = parseInt(prompt('Enter the index of the link to remove:')) - 1;
    }

    // Remove the links from the array
    links.splice(index, 1);

    alert('Link removed!');
}

// Functions to quit the program
function quitProgram() {
    alert('Thank you for using the Social News Program!');
    window.close();
}

// Start the menu with options
function startMenu() {
    let choice = prompt('Choose an action:\n1. Show the list of links\n2. Add a new link\n3. Remove an existing link\n4. Quit the program');
    switch (choice) {
        case '1':
            showLinks();
            break;
        case '2':
            addLink();
            break;
        case '3':
            removeLink();
            break;
        case '4':
            quitProgram();
            break;
        default:
            alert('Invalid choice! Please try again.');
            startMenu();
    }
}

// Show the start menu when the page loads
startMenu();
