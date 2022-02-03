// este htmlwebpackplugin es para que el html se compile en el build
// el MiniCssExtractPlugin es para que el css se compile en el build
const HtmlWebpack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  //limpia la aplicacion y la vuelve a generar con el build
  output: {
    clean: true,
  },

  module: {
    //las reglas de los archivos que se van a procesar
    rules: [
      {
        //el test es para que solo se procese los archivos que terminen en .js y con el $ me encuentre todos los archivos html
        test: /\.html$/,
        //el loader es el que se encarga de procesar el archivo
        loader: "html-loader",
        //las options son las opciones del loader
        options: {
          //el sourcemap es para que se genere un archivo de mapa de codigo fuente
          sources: false,
        },
      },
      {
        test: /\.css$/,
        //el use es para que se procese el archivo con el loader
        //el exclude es para que no se procese el archivo css
        exclude: /style.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /style.css$/,
        use: [MiniCssExtract.loader, "css-loader"],
      },
      {
        //test es evaluar si el archivo termina en .js
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader",
      },
    ],
  },

  optimization: {},

  plugins: [
    //este new HtmlWebpack crea un nuevo archivo html con el build
    new HtmlWebpack({
      //el template es el archivo que se va a generar desde mi raiz el index.html y lo manda al main.js
      template: "./src/index.html",
    }),
    new MiniCssExtract({
      // cada vez que yo haga un nuevo hash cambiara ayudara a que los navegadores no tengan en cache ese archivo
      filename: "[name].css",
      //ignore el orden en caso de que no nos importe el orden de las importaciones de css (casi siempre es asi)
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [
          { from: 'src/assets/', to: 'assets/' }
        ],
    }), 
  ],
};
