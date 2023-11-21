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
