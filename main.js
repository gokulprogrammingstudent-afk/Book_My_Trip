// Hotel booking form

document.getElementById("bookingForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let location = document.getElementById("location").value;
        let date = document.getElementById("date").value;
        let rooms = document.getElementById("rooms").value;
        let adults = document.getElementById("adults").value;
        let children = document.getElementById("children").value;

        if (location === "") {
            alert("Please select a location.");
            return;
        }

        if (date === "") {
            alert("Please select a date.");
            return;
        }

        alert(
            "Search Details\n\n" +
            "Location: " + location + "\n" +
            "Date: " + date + "\n" +
            "Rooms: " + rooms + "\n" +
            "Adults: " + adults + "\n" +
            "Children: " + children
        );
    }
);


// Hotel booking button

function bookHotel(hotelName) {

    alert(
        "You selected " + hotelName +
        ". Your booking process can start here."
    );

}


// Newsletter subscription

function subscribe() {

    let email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    alert("Thank you for subscribing!");

    document.getElementById("email").value = "";

}