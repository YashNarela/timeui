let nav = document.querySelector(".btn");

nav.addEventListener("click", () => {
  document.body.classList.toggle("active");
});

let target = document.querySelector(".timezone");

function updateDateTime() {
  let now = new Date();
  const formattedDate = now.toLocaleDateString(); // Format as MM/DD/YYYY or according to locale
  const formattedTime = now.toLocaleTimeString();

  let day = now.getDay();

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

  target.innerText = `${arr[day]}  ${formattedDate} ${formattedTime}`;
}
setInterval(() => {
  updateDateTime(), 1000;
});
