function getQuote() {
  fetch("https://dummyjson.com/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      document.getElementById("quote").innerText = data.quote;
      document.getElementById("author").innerText = data.author;
    });
}

document.getElementById("btn-get").addEventListener("click", getQuote);

function saveQuote() {
  let quote = document.getElementById("quote").innerText;
  let saved = JSON.parse(localStorage.getItem("SavedQuote") || "[]");
  saved.push(quote);
  localStorage.setItem("SavedQuote", JSON.stringify(saved));
  alert("Quote saved! ");
}
document.getElementById("btn-save").addEventListener("click", saveQuote);
