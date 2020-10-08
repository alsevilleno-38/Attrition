const form = document.querySelector("form");
const p = document.createElement("p");
p.appendChild(document.createTextNode("This is a form"));
document.querySelector("form input[type='submit']").addEventListener("click", function (e) {
    e.preventDefault();
    parent.document.body.appendChild(p);
})