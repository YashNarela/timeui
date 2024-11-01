setInterval(() => {
  let date = new Date();
  hr = date.getHours();
  mm = date.getMinutes();
  s = date.getSeconds();


  hrrotation=30*hr +mm/2;
  mmrotation=6*mm ;
  ssrotation=6*s;

  hour.style.transform=`rotate(${hrrotation}deg)`;
  minute.style.transform=`rotate(${mmrotation}deg)`;
  second.style.transform=`rotate(${ssrotation}deg)`;

}, 1000);




//Implicitly Available Variables in HTML: If hour, minute, and second are the id attributes of HTML elements, they might be implicitly available as global variables. For example, if your HTML has:

// html
// Copy code
// <div id="hour"></div>
// <div id="minute"></div>
// <div id="second"></div>
// Then, in a non-strict mode, the browser (especially older ones) might implicitly treat these IDs as global variables, and you could use hour, minute, and second directly in JavaScript.

// However, this behavior is not reliable and is discouraged because it can cause issues with variable scope and unexpected behavior. Instead, it's always best to explicitly select elements using document.getElementById, document.querySelector, or similar methods.

// So, the reason your code works without using document.hour is likely because the hour, minute, and second variables were already globally accessible by some previous code, or they matched the element IDs in your HTML, which older browsers sometimes allow as globals.