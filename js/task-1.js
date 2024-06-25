const categories = document.querySelector("#categories");
console.log("Number of categories:", categories.children.length);
const list = document.querySelectorAll(".item");

list.forEach((elem) => {
    const h2 = elem.querySelector("h2");
    console.log("Category:", h2.textContent);
    const ul = elem.querySelector("ul");
    console.log("Elements:", ul.children.length)
});

