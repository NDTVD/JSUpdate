/*
    Step 3: Begin by filling in the code for the function upDate.
    The function takes one argument, `previewPic`, which is the image
    element that was hovered over. In the HTML, we pass `this` to the function,
    and `this` refers to the element that triggered the event.
*/
function upDate(previewPic) {
    /*
        Step 4 & 5: I highly recommend beginning with a console.log() to check 
        that your event is triggering and to print out information about the previewPic variable.
        
        To see this, open your browser's developer tools (F12 or Ctrl+Shift+I) and go to the Console tab.
    */
    console.log("Event triggered by image with source: " + previewPic.src);
    console.log("The alt text is: " + previewPic.alt);

    /*
        Step 6: Use document.getElementById to change the text of the element
        with the id of 'image'. We get the element and set its innerHTML
        property to the alt text of the hovered image.
    */
    document.getElementById('image').innerHTML = previewPic.alt;

    /*
        Step 7: Use document.getElementById to change the background image of
        the element with the id of 'image'. We need to format the string
        correctly as "url('path/to/image.jpg')".
    */
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    
    /*
        Step 8: Check your work. At this point, hovering over an image should
        update the preview div's text and background image.
    */
}

/*
    Step 9 & 10: Fill in the code for the undo function.
    This function will be called when the mouse leaves an image.
*/
function undo() {
    /*
        Step 10: Update the url for the background image of the div with the id of 'image'
        back to the original value of background-image: url('').
    */
    document.getElementById('image').style.backgroundImage = "url('')";

    /*
        Step 11: Update the text of the div with the id of 'image' back to the
        original text.
    */
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

/*
    New function to add tabindex to images for keyboard accessibility.
    This function is called when the page loads.
*/
function addTabindex() {
    // Log a message to the console to confirm the event triggered.
    console.log("Page loaded, adding tabindex to images.");

    // Get all elements with the class 'preview'.
    var images = document.querySelectorAll('.preview');

    // Loop through each image and add a tabindex attribute.
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}