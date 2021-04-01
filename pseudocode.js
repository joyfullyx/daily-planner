// create rows for hours (9-5) 


        // input text area
        // button is div with rounded corners


        // hour div/ text input/ save button
    // Font awesome getbootstrap v4.6 search icons 
        // bootstrap icon cdn link
            // put link in head 

        // parent div/ hour div/ text input/save button

// start JS

    // setup a click event on save buttons (jquery click event on class with .on)
    // using the event.target, grab text from text area
        // (travserse the dom from the button to text text area)
        // grab label (ex. hour9) and its children and siblings, and save to local storage
    // grab a unique identifier for placing the hour input value into local strage 
        // will haappen same action every time because of click event on save button
    // on page load, pull all data from local storage and use the unique labels/indentifiers mentioned above to determine where to put the value retrieved from localstorage
        // use jquery to find the item and children (ex hour9) 
    // need to go over each hour div and put data attripbute on it 
        // need to iterate over each hour
            // if data hour < current moment hour
                // color = assigned color

        // use 24 hour time to make it easier (don't have to worry about am pm)

    // for determining css backgroundcolor: 
        // use moment to get the current time (specifically the hour)
        // then iterate over all hour elements
        // using an id/data attribute, determining what hour the current timeblock represents (the moment time)
            // if the current element time is:
                // less than moment time, color = gray
                // same as moemment time, color = red
                // greater than moment time, color = green





    // if (textInput !== null) {
    //     localStorage.setItem('todoInput', JSON.stringify(todoInput));
    //     console.log(todoInput);
    // }
    // }