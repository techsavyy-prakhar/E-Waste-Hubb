function search_category() {
  let input = document.querySelector(".search-input").value;
  input = input.toLowerCase();
  let x = document.querySelectorAll(".card-hover");
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}
