const searchForm = document.querySelector("#srh");

const searchSong = async (term) => {
  let uri = `https://tarana.onrender.com/songs/?_sort=name&_order=asc`;

  if (term) {
    uri += `&q=${term}`;
    list.innerHTML = "";
  }

  const res = await fetch(uri);
  const data = await res.json();

  data.forEach((element) => {
    genLink(element);
  });
};

searchForm.addEventListener("input", (e) => {
  e.preventDefault();
  if (searchForm.value.trim() != "") {
    searchSong(searchForm.value.trim());
  }
});
