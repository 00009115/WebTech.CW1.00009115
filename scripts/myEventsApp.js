// GENERATING THE CREATED EVENTS ONTO PROFILE PAGE

if (isSigned) {
    let createdEvents = JSON.parse(localStorage.getItem("events"));  // restoring the old "event" cards data from the localStorage

    createdEvents.forEach(event => {
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

        document.getElementById("myEvents").appendChild(newCard); // appending the card with generated elements inside to the DOM
    });
}

