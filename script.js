let nav = document.querySelector(".btn");

nav.addEventListener("click", () => {
  document.body.classList.toggle("active");
});
let now = new Date();
let day = now.getDay();
function updateDateTime() {
  let arr = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  console.log(arr[day]);

  const formattedDate = now.toLocaleDateString(); // Format as MM/DD/YYYY or according to locale
  const formattedTime = now.toLocaleTimeString();
  let target = document.querySelector(".timezone");

  let hours = now.getHours();
  console.log(hours);

  let minutes = now.getMinutes();

  let seconds = now.getSeconds();

  let containerbodyminute = document.querySelector(".containerbodyminute");

  let containerbodyhours = document.querySelector(".containerbodyhours");

  let containerbodysecond = document.querySelector(".containerbodysecond");

  containerbodyhours.innerText = hours;
  containerbodyminute.innerText = minutes;

  containerbodysecond.innerText = seconds;

  target.innerText = `${arr[day]}  ${formattedDate} ${formattedTime}`;
}
setInterval(() => {
  updateDateTime();
}, 1000);
