const SHEET_ID = '1QhcHLPzxrRkWkGpktVssDuGLNNjRp-a_mobSD5B1IYA';
const TOKEN = 'ya29.a0Aa4xrXOLeGSeuMx13DB8u_COiBysA-TM3O_DHfrpjP8fDLHP5ChfC4IUXWi91pMq4OmUzRacZQWhseK0B7HIFBfAKTkn2b9G0kGBmRPcQMZYGL7bpcyohaVO1Tgie-kUetgxhIJBPAAwo7bdi9uRvd-CwftIaCgYKATASARISFQEjDvL9j-w41ZhBO22qO-TwFHO4uQ0163';
fetch(
    // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/almuerzo!A1:D`,
    {
        headers:{
            'Content-Type': 'application./json',
            Authorization: `Bearer ${TOKEN}`
        },
    }
    //esperamos el response
).then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
    const values = data.values;

    // Obtenemos el elemento del dom
    const lista = document.getElementById("lista-menu");

    for (let i = 0; i < values.length; i++) {

        // Div que va a contener los datos del producto
        const producto = document.createElement("div");
        producto.className =  "menu-item";

        // Nombre del producto
        const itemProducto = document.createElement("span");
        itemProducto.className = "item producto";
        itemProducto.innerHTML = values[i][0]; 

        // Precio
        const itemPrecio = document.createElement("span");
        itemPrecio.className = "item precio";
        itemPrecio.innerHTML = values[i][2];

        //Categoría
        const itemCategoria = document.createElement("span")
        itemCategoria.className = "item categoria";
        itemCategoria.innerHTML = values[i][3];
        console.log(itemCategoria)
        

        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemPrecio);
        producto.appendChild(itemCategoria);

        // Agregamos el producto a la lista
        lista.appendChild(producto);
    }
    });
});