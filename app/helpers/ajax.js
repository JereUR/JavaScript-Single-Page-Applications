export function ajax(props) {
  let { url, cbSuccess } = props;

  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error al acceder a la API";
      
      document.getElementById("root").innerHTML = `
      <div>
        <p>Error ${err.status}: ${message}</p>
      </div>
      `;

      console.log(err);
    });
}
