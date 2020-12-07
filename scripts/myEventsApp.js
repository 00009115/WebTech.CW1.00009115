// GENERATING THE CREATED EVENTS
let user = JSON.parse(localStorage.getItem(""));

if (isSigned) {
    let createdEvents = JSON.parse(localStorage.getItem("events"));

    createdEvents.forEach(event => {
        let newCard = document.createElement("div");
        newCard.classList.add("event-card");
        newCard.innerHTML = '<div class="card-image">' +
            '                    <img src="/images/event-cards/' + event.type + '.png"' +
            '                        alt="An Illustration of ' + event.type + ' | from https://icons8.com/illustrations">' +
            '                </div>' +
            '                <div class="card-information">' +
            '                    <div class="data">' +
            '                        <svg>' +
            '                            <use xlink:href="/icons/icons.svg#i-time"></use>' +
            '                        </svg>' +
            '                        <p>' + event.time[0] + '-' + event.time[1] + ' hours</p>' +
            '                        <svg>' +
            '                            <use xlink:href="/icons/icons.svg#i-users"></use>' +
            '                        </svg>' +
            '                        <p>' + event.people[0] + '-' + event.people[1] + ' people</p>' +
            '                    </div>' +
            '                    <h3 class="h3">' + event.name + '</h3>' +
            '                    <p class="text">' + event.info + '</p>' +
            '                    <a href="#" onclick="return false;" class="link">Join →</a>' +
            '                </div>';

        document.getElementById("myEvents").appendChild(newCard);
    });
}

