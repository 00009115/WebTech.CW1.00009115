// REGENERATING THE OLD EVENTS ONTO EVENTS PAGE

let events = JSON.parse(localStorage.getItem("events"));  // restoring the old "event" cards data from the localStorage

if (events) {
    events.forEach(event => {
        let newCard = document.createElement("div");  //creating a new DOM element
        newCard.classList.add("event-card");
        newCard.innerHTML = '<div class="card-image">' +
            '                    <img src="../images/event-cards/' + event.type + '.png"' +
            '                        alt="An Illustration of ' + event.type + ' | from https://icons8.com/illustrations">' +
            '                </div>' +
            '                <div class="card-information">' +
            '                    <div class="data">' +
            '                        <svg>' +
            '                            <use xlink:href="../icons/icons.svg#i-time"></use>' +
            '                        </svg>' +
            '                        <p>' + event.time[0] + '-' + event.time[1] + ' hours</p>' +
            '                        <svg>' +
            '                            <use xlink:href="../icons/icons.svg#i-users"></use>' +
            '                        </svg>' +
            '                        <p>' + event.people[0] + '-' + event.people[1] + ' people</p>' +
            '                    </div>' +
            '                    <h3 class="h3">' + event.name + '</h3>' +
            '                    <p class="text">' + event.info + '</p>' +
            '                    <a href="#" onclick="return false;" class="link">Join →</a>' +
            '                </div>';
        // assigning an HTML code to the created element with dynamic data

        document.getElementById("events").appendChild(newCard);  // appending the card with generated elements inside to the DOM
    });
} else {
    events = [];
}


// CREATING NEW EVENT

document.getElementById("add-button").addEventListener("click", () => {
    document.getElementById("section-add").classList.add("is-visible");
    // opening the "section-add" box
});

let closeBox = () => {
    document.getElementById("section-add").classList.remove("is-visible");
    // a function which closes the box
}

document.getElementById("card-close-button").addEventListener("click", closeBox);  // using the function to close certain box

document.getElementById("card-add-button").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let nameValidated = name.charAt(0).toUpperCase() + name.slice(1);
    let type = document.getElementById("type").value;
    let info = document.getElementById("details").value;
    let time = [document.getElementById("time-from").value, document.getElementById("time-to").value];
    let people = [document.getElementById("people-from").value, document.getElementById("people-to").value];  // storing the values of inputs into variables

    if (name && type && info && time[0] && time[1] && people[0] && people[0] && time[0] < time[1] && people[0] < people[1]) {  // checking if whethers are valid

        events.push({
            name: nameValidated,
            type: type,
            info: info,
            time: time,
            people: people
        });
        // pushing inserted data as an object to "events" array

        localStorage.setItem("events", JSON.stringify(events));  // setting the stringified array into the localStorage


        // generating the new event card to the DOM
        let newCard = document.createElement("div");
        newCard.classList.add("event-card");
        newCard.innerHTML = '<div class="card-image">' +
            '                    <img src="../images/event-cards/' + type + '.png"' +
            '                        alt="An Illustration of ' + type + ' | from https://icons8.com/illustrations">' +
            '                </div>' +
            '                <div class="card-information">' +
            '                    <div class="data">' +
            '                        <svg>' +
            '                            <use xlink:href="../icons/icons.svg#i-time"></use>' +
            '                        </svg>' +
            '                        <p>' + time[0] + '-' + time[1] + ' hours</p>' +
            '                        <svg>' +
            '                            <use xlink:href="../icons/icons.svg#i-users"></use>' +
            '                        </svg>' +
            '                        <p>' + people[0] + '-' + people[1] + ' people</p>' +
            '                    </div>' +
            '                    <h3 class="h3">' + name + '</h3>' +
            '                    <p class="text">' + info + '</p>' +
            '                    <a href="#" onclick="return false;" class="link">Join →</a>' +
            '                </div>';

        document.getElementById("events").appendChild(newCard);
        document.getElementById('my-event-form').reset();  // resetting the form

        closeBox();  // calling the function to close the box


        // form validation processes
    } else if (!name || !type || !info || !time[0] || !time[1] || !people[0] || !people[0]) {
        window.alert("Insert all required data");
    } else if (time[0] >= time[1] || people[0] >= people[1]) {
        window.alert("Minimum amount should be less than maximum");
    } else {
        window.alert("Please, insert valid data!");
    }
});

