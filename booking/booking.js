document.addEventListener("DOMContentLoaded", function () {
    const officeHoursContainer = document.getElementById("office-hours");

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = new Date().getDay();

    const officeHours = {
        Sunday: "Closed",
        Monday: "9:00 AM - 5:00 PM",
        Tuesday: "9:00 AM - 5:00 PM",
        Wednesday: "9:00 AM - 5:00 PM",
        Thursday: "9:00 AM - 5:00 PM",
        Friday: "9:00 AM - 5:00 PM",
        Saturday: "Closed",
    };

    officeHoursContainer.textContent = `Today's Office Hours: ${officeHours[daysOfWeek[currentDay]]}`;
});


function submitForm() {
    // Get values from the form
    var service = document.getElementById("dropdown").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if all required fields are filled
    if (service !== "" && date !== "" && time !== "" && name !== "" && mobile !== "" && email !== "") {
      // Display a pop-up message
      alert("Form submitted!\nService: " + service + "\nDate: " + date + "\nTime: " + time + "\nName: " + name + "\nMobile: " + mobile + "\nEmail: " + email + "\nMessage: " + message);
    } else {
      // Display an error message or take any other appropriate action
      alert("Please fill in all required fields.");
    }
  }