const loadProducts = document.getElementById("loadProducts");
const URLMain = "https://api.escuelajs.co/api/v1/products";

function getData(cat) {
    const options = {"method": "GET"};
    fetch(URLMain+cat, options)
    .then((response) => {
        console.log(response);
        response.json().then((res) => {
            // console.log(res.length);
            // console.log(res[11].rating);
            createCards(res);
        });
    })
    .catch((err) => {
    main.insertAdjacentHTML("beforeend",
        `<div class="alert alert-danger" role="alert">
            ${err.message}
        </div>`);
    });
}