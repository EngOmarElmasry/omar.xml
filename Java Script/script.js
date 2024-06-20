// alert("Welcome To My Fantastic Page");
// confirm("Are You Omar?")
// m=prompt("ًًًًWhat Is Your First Name");
// n=prompt("ًًًًWhat Is Your Second Name");
// alert("Hello"+" "+m+" "+n);
let theTitle = "Hello Elzero";
let theDescription = "Elzero Web School";
let theDate = "25/10";
let theDiv = `
<div style="color: #990000; background-color: black;" class=card>
  <h3 style="font-family: anton;">
  ${theTitle}
  </h3>
  <p style="font-family: sans-serif;">
  ${theDescription}
  </p>
  <span style="font-family: cursive;">
  ${theDate}
  </span>
</div>
`;
function Hello(){
    document.write((theDiv).repeat(3));
}