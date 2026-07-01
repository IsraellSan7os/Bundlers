# Projeto - Lista de Compras

## Conteúdo Estudado

### 🔧 Webpack

- **O que é:** Bundler de módulos JavaScript que otimiza e empacota arquivos para produção
- **Funcionalidades principais:**
  - Entry point: Define onde o webpack começa a processar
  - Output: Configuração do arquivo de saída (main.js na pasta dist)
  - Loaders: Processam diferentes tipos de arquivos (CSS, imagens, etc.)
  - Plugins: Estendem funcionalidades do webpack (HTML Webpack Plugin)
  - Mode: development ou production

### 📝 HTML

- Estrutura semântica de página web
- Elementos principais: `<header>`, `<nav>`, `<main>`, `<section>`, `<body>`
- Integração com webpack via HTML Webpack Plugin

### 🎨 CSS

- Estilização de elementos HTML
- Integração com webpack via `css-loader` e `style-loader`
- Carregamento de CSS através de imports no JavaScript

### ⚙️ JavaScript

- Importação de módulos (ES6 modules)
- Componentes modulares
- Manipulação do DOM
- Integração com webpack

### 🔄 Babel

- **O que é:** Transpilador JavaScript que converte código moderno (ES6+) para versões compatíveis com navegadores antigos
- **Como funciona:** Transforma sintaxe moderna em JavaScript que navegadores antigos entendem
- **Integração com webpack:** Via `babel-loader`
- **Configuração:** Usa presets como `@babel/preset-env` para automaticamente converter conforme o alvo
- **Instalação dos pacotes necessários:**
  ```
  npm install --save-dev @babel/core @babel/preset-env babel-loader
  ```
- **Configuração no webpack.config.js:**
  ```javascript
  {
    test: /\.js$/i,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [["@babel/preset-env", { targets: "defaults" }]],
      },
    },
  }
  ```
- **Benefício:** Permite usar features modernas de JavaScript sem se preocupar com compatibilidade

## Configuração do Projeto

**Webpack Config (`webpack.config.js`):**

- Entry: `src/js/index.js`
- Output: `dist/main.js`
- Loaders:
  - `style-loader` e `css-loader` para CSS
  - `babel-loader` para JavaScript moderno
- Plugins: html-webpack-plugin

## Correções Realizadas

As seguintes alterações foram feitas no `webpack.config.js`:

1. **Corrigido nome do plugin:** `HTMLwebPackpluguin` → `HTMLWebpackPlugin`
2. **Removida importação desnecessária:** `const { load } = require("npm");`
3. **Adicionado loader do Babel:** Regra para transpilar arquivos `.js` com `babel-loader`
4. **Corrigido padrão de exclusão:** `exclude: "/node_modules"` → `exclude: /node_modules/`
5. **Corrigida propriedade:** `option` → `options` (no babel-loader)

## Referências

- Webpack: https://webpack.js.org/
- Documentação: guides -> Getting Started -> Basic Setup
