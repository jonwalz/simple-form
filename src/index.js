/*
   Form info can be found here:
   https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
*/

/*
  First, we need to add an event listener to the form itself.
  An event listener is basically like saying, "Hey, whenever this event happens,
  call this function."
*/

/*
    In order to create an event listener,
    we have to first target what we want to attach the event listener to:
*/
const theForm = document.querySelector("#theForm")

/*
 Now that we have targeted the form, we add an event listener.
 "submit" is one of many events that we can listen for
 The second argument is the function we want to be called once the event happens
*/
theForm.addEventListener("submit", function(event) {
     /*
        Every event gives the function an 'event' object,
        we call a method on this object to prevent the page from reloading
        (I know.. that sounds weird but the default behavior for submitting a form is
            for it to reload)
     */
    event.preventDefault()

    /*
        Now that we have some javascript executing once the form submit button is pressed,
        We can collect the data set in the form.
        We do this similar to how we did it above
    */

    const name = document.querySelector("#nameInput").value
    const info = document.querySelector("#infoInput").value
    const strain = document.querySelector("#dropdown").value

    // We have now stored the values of the fields in variables
    // We can send this variables on a form submission
    // We will want to store all the data in an object to send over the wire:

    const data = {
        form_field_1: name,
        form_field_2: info,
        form_field_3: "Hard coded bullshit",
        chemovar: strain
    }

    console.log("Data: ", data)
    // Now we prepare it for submitting by using the URLSearchParams api
    // We first find the url we want to post to. In this case:
    const rawUrl =
        "https://script.google.com/macros/s/AKfycbyP0re5vf0LmzUNfb4GbSocMBMcG-HtAmaELvZHTGzgZNz6B6Sv/exec";

    // Then we use the URL api to construct the URL, so that we are able to use URLSearchParams:
    const url = new URL(rawUrl);

    // (This is new shit so don't expect it to work in every browser. Tell people to stop using internet explorer)
    // Set the search params to the URL
    url.search = new URLSearchParams(data)

    console.log("Url: ", url)
    // Now we use the build in fetch api to make a get request and send the data
    fetch(url, { method: "GET" });
})
