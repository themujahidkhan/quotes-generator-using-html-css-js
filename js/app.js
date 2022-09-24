const title = document.querySelector(".quote");
const author = document.querySelector(".author");
const btnQuote = document.querySelector(".btn-quote");

function fetchQuotes(generatedNumber) {
  fetch("../api/data.json")
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = `${data.quotes[generatedNumber ?? 0].title}`;
      author.innerHTML = `${data.quotes[generatedNumber ?? 0].author}`;
    });
}

fetchQuotes();

btnQuote.addEventListener("click", () => {
  const generatedNumber = Math.floor(Math.random() * 6);

  fetchQuotes(generatedNumber);
});
