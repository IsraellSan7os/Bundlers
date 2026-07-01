// ========================================
// WEBPACK - Module Bundler
// Agrupa módulos JS e dependências em bundles
// (arquivos únicos prontos para navegador)
// ========================================

// BABEL - Transpiler
// Converte ES6+ em código compatível com navegadores antigos

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 📁 ENTRY: Por onde o Webpack começa
  // Examina index.js e todas as dependências importadas
  entry: path.resolve(__dirname, "src", "js", "index.js"),

  // 📦 OUTPUT: Onde Webpack salva o arquivo bundled
  output: {
    filename: "main.js", // Nome do arquivo final
    path: path.resolve(__dirname, "dist"), // Pasta de saída
  },

  // 🔧 MODE: "development" (maior; com source maps)
  // ou "production" (minificado; otimizado)
  mode: "development",

  // 🖥️ DEV SERVER: Servidor local para desenvolvimento
  // Monitora mudanças e recarrega a página automaticamente
  devServer: {
    static: {
      directory: path.join(__dirname, "dist", "index.html"),
    },
    port: 3000,
    open: true,
  },

  // 🔌 PLUGINS: Extensões que modificam o build
  plugins: [
    // Gera arquivo HTML automaticamente na pasta dist
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],

  // ⚙️ MODULE > RULES: Loaders processam diferentes tipos de arquivo
  module: {
    rules: [
      // 1️⃣ CSS LOADER
      // Processa arquivos .css (adiciona à bundle)
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },

      // 2️⃣ BABEL LOADER (Transpiler)
      // Converte ES6+ → código compatível com browsers antigos
      // @babel/preset-env: detecta alvo e faz conversões necessárias
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // Presets = conjunto de plugins Babel pré-configurados
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
