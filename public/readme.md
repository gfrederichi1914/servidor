# Servidor de Portfólio Node.js/Express

Este repositório contém o servidor web em Node.js, configurado com Express, para hospedar e servir os projetos estáticos de portfólio de [Seu Nome ou Nickname].

A arquitetura foi desenhada para facilitar a adição de novos projetos estáticos (HTML/CSS/JS) em subpastas.

## Como Inicializar o Projeto em uma Nova Máquina

Siga estes passos para clonar e rodar o servidor em qualquer ambiente de desenvolvimento com Node.js instalado.

### 1. Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (Node Package Manager) instalados globalmente em sua máquina.

Verifique a instalação abrindo o terminal e digitando:

```bash
node -v
npm -v
````

### 2\. Configuração Inicial

1.  **Clone o Repositório:**

    ```bash
    git clone [https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories)
    cd servidor
    ```

2.  **Instale as Dependências:**
    O projeto utiliza o Express e outros módulos listados no `package.json`. Use o npm para baixar todas as dependências:

    ```bash
    npm install
    ```

    *Isso criará a pasta `node_modules` que é essencial para rodar o servidor.*

### 3\. Execução do Servidor

Com as dependências instaladas, você pode iniciar o servidor Node.js com o seguinte comando:

```bash
node servidor.js
```

### 4\. Acesso ao Portfólio

Após a execução, o terminal exibirá as rotas mapeadas. Por padrão, o servidor rodará na **Porta 3000**.

| Rota | Descrição |
| :--- | :--- |
| **`http://localhost:3000/`** | Índice principal do portfólio (`projects.html`). |
| `http://localhost:3000/animation/` | Projeto "animation". |
| `http://localhost:3000/guess/` | Projeto "guess". |
| `http://localhost:3000/site_apple/` | Projeto "site\_apple". |
| `http://localhost:3000/[pasta]/` | Acesse qualquer outro projeto estático em `public/[pasta]/`. |

-----

## 🛠️ Estrutura do Projeto

  * **`servidor.js`**: O arquivo principal que configura as rotas com Express.
  * **`package.json`**: Lista as dependências (como `express` e `colors`).
  * **`public/`**: Contém todos os projetos estáticos.
      * `public/sobre_mim/projects.html` é servido como índice na rota raiz (`/`).
  * **`.gitignore`**: Garante que arquivos grandes (como `node_modules`) não sejam versionados no Git.

## ⚙️ Notas Técnicas (Troubleshooting)

  * **Porta Ocupada (`EADDRINUSE`):** Se a porta 3000 estiver ocupada, edite o arquivo `servidor.js` e mude a constante `PORT` para um valor diferente (ex: 5000 ou 8080).
  * **Permissão Negada (`EACCES`):** Este erro ocorre se você tentar rodar em portas privilegiadas (como a 80). Use portas acima de 1024 (3000 é a recomendada).
