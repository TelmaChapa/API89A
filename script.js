let button1 = document.getElementById("button-fetch");
console.log(button1);
button1.addEventListener("click", handleClick);

function getFacts() {
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then((result) => displayFacts(result))
    .catch((error) => console.log(error));
}

getFacts();

function displayFacts(cats) { 
    console.log(cats.fact);
    let catFact= document.getElementById("cat-fact");
    catFact.innerText = ""
    let para = document.createElement("p");
    para.innerText = cats.fact;
    catFact.appendChild(para);
}

function handleClick() {
   getFacts();
}


