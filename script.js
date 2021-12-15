function randomImage() {
  document.getElementById("random").innerHTML = "";

  async function getCat() {
    try {
      let res = await fetch("https://api.thecatapi.com/v1/images/search");
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  async function renderCat() {
    let cats = await getCat();
    document.getElementById("random").innerHTML = `
    <img class="CatImage" alt="catImage" src="${cats[0].url}"/>
    `;
  }
  renderCat();
}
