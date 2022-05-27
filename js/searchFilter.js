function getUserInput() {
    const userInput = document.querySelector('#gallery-search').value;
    return userInput.toLowerCase();
}

function compareText(userInput) {
    userInput = getUserInput();
    const imageList = document.querySelectorAll('a');

    for (i = 0; i < imageList.length; i++) {
        let imageListText = imageList[i].getAttribute('data-caption').toLowerCase();
        if (imageListText.includes(userInput) !== true ){
            imageList[i].style.display = 'none';
        }
        else {imageList[i].style.display = 'grid';}
    }
}
