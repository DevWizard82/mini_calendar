const monthnameEl = document.getElementById("monthname");
const daynameEl = document.getElementById("dayname");
const daynumber = document.getElementById("daynumber");
const yearEl = document.getElementById("year");

const date = new Date();

monthnameEl.innerHTML = date.toLocaleString("en",{
    month:"long"
});
daynameEl.innerHTML = date.toLocaleString("en",{
    weekday:"long"
});

daynumber.innerHTML = date.getDate();

yearEl.innerHTML = date.getFullYear();