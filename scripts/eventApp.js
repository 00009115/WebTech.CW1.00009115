// EVENT PAGE FEATURES

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

    document.getElementById("events").appendChild(newCard);
});

document.getElementById("add-button").addEventListener("click", () => {
    document.getElementById("section-add").classList.add("is-visible");
});

let events = JSON.parse(localStorage.getItem("events"));

let closeBox = () => {
    document.getElementById("section-add").classList.remove("is-visible");
}

document.getElementById("card-close-button").addEventListener("click", closeBox);

document.getElementById("card-add-button").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let nameValidated = name.charAt(0).toUpperCase() + name.slice(1);
    let type = document.getElementById("type").value;
    let info = document.getElementById("details").value;
    let time = [document.getElementById("time-from").value, document.getElementById("time-to").value];
    let people = [document.getElementById("people-from").value, document.getElementById("people-to").value];

    if (name && type && info && time[0] && time[1] && people[0] && people[0] && time[0] < time[1] && people[0] < people[1]) {

        events.push({
            name: nameValidated,
            type: type,
            info: info,
            time: time,
            people: people
        });

        localStorage.setItem("events", JSON.stringify(events));

        let newCard = document.createElement("div");
        newCard.classList.add("event-card");
        newCard.innerHTML = '<div class="card-image">' +
            '                    <img src="/images/event-cards/' + type + '.png"' +
            '                        alt="An Illustration of ' + type + ' | from https://icons8.com/illustrations">' +
            '                </div>' +
            '                <div class="card-information">' +
            '                    <div class="data">' +
            '                        <svg>' +
            '                            <use xlink:href="/icons/icons.svg#i-time"></use>' +
            '                        </svg>' +
            '                        <p>' + time[0] + '-' + time[1] + ' hours</p>' +
            '                        <svg>' +
            '                            <use xlink:href="/icons/icons.svg#i-users"></use>' +
            '                        </svg>' +
            '                        <p>' + people[0] + '-' + people[1] + ' people</p>' +
            '                    </div>' +
            '                    <h3 class="h3">' + name + '</h3>' +
            '                    <p class="text">' + info + '</p>' +
            '                    <a href="#" onclick="return false;" class="link">Join →</a>' +
            '                </div>';

        document.getElementById("events").appendChild(newCard);
        document.getElementById('my-event-form').reset();

        closeBox();

    } else if (!name || !type || !info || !time[0] || !time[1] || !people[0] || !people[0]) {
        window.alert("Insert all required data");
    } else if (time[0] >= time[1] || people[0] >= people[1]) {
        window.alert("Minimum amount should be less than maximum");
    } else {
        window.alert("Please, insert valid data!");
    }
});

