function Akangenerate(e, day,month, year) {
    e.preventDefault();
    day = parseInt(document.getElementsByid("day").value);
    month = parseInt(document.getElementsByid("month").value);
    year = parseInt(document.getElementsByid("year").value);
    gender = parseInt(document.getElementsByid("gender").value);
}
if ((day < 1 )) || (day > 31) || isNaN(day)) {
    $(document.getElementById("invalid")).show();
    $(document.getElementById("output")).hide(); 
    document.getElementById("invalid").innerHTML = "Day is invalid. Please enter a valid Day"
} else if ((month < 1) || (month > 12) || isNaN(month)) {
    $(document.getElementById("invalid")).show();
    $(document.getElementById("output")).hide(); 
    document.getElementById("invalid").innerHTML = "Month is invalid. Please enter a valid Month"
} else if ((year< 1200) || is isNaN(year)) {
    $(document.getElementById("invalid")).show();
    $(document.getElementById("output")).hide(); 
    document.getElementById("invalid").innerHTML = "Year is invalid. Please enter a valid Year"
} 