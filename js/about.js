const getPersons = async () => {
  const person = document.getElementById("person");
  let url = "https://api.github.com/repos/iamsonukushwaha/tarana/contributors";
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);
  data.forEach((i) => {
    let template = `
        <a href = "${i.html_url}" target = "_blank" rel = "noopener noreferrer"><img src="${i.avatar_url}" alt="${i.login}" class="pic" title="${i.login}"></a>
        `;
    person.innerHTML += template;
  });
};

window.addEventListener("DOMContentLoaded", () => getPersons());
