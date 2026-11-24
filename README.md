# Listagem de Usuarios com React, Vite e Axios

Aplicacao web desenvolvida em React para listagem e consulta de usuarios consumindo a API publica JSONPlaceholder atraves do cliente HTTP Axios.

## Tecnologias Utilizadas

- React 19
- Vite
- JavaScript (ES6+)
- Axios
- CSS puro

## API Consumida

A aplicacao consome o endpoint `/users` da API publica gratuita JSONPlaceholder:
`https://jsonplaceholder.typicode.com/users`

Os dados exibidos para cada usuario incluem:
- Nome
- Nome de usuario (username)
- Email
- Telefone
- Cidade
- Empresa

## Funcionalidades

- Requisicao HTTP assincrona utilizando o hook useEffect no ciclo inicial do componente.
- Configuracao de instancia personalizada do Axios em arquivo separado com baseURL centralizada.
- Armazenamento dos dados recebidos no estado do componente utilizando useState.
- Renderizacao dinamica da lista de usuarios com o metodo map e identificador unico via propriedade key.
- Indicador visual de carregamento ("Carregando dados...") enquanto a requisicao esta em andamento.
- Tratamento e exibicao amigavel de mensagens de erro caso ocorra falha de conexao ou na API.
- Componentizacao do card de usuario (UserCard) com recebimento de informacoes via props.
- Filtro de busca em tempo real por nome atraves de campo input controlado.

## Estrutura do Projeto

```text
consumo-axios/
├── public/
├── src/
│   ├── components/
│   │   └── UserCard.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Como Executar o Projeto

### Pre-requisitos

- Node.js instalado na maquina (versao 18 ou superior recomendada)
- Gerenciador de pacotes npm

### Passo a passo

1. Clone o repositorio:
```bash
git clone https://github.com/MarcosOliveiraJ/axios-react.git
cd axios-react
```

2. Instale as dependencias do projeto:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra a URL exibida no terminal (normalmente http://localhost:5173) no seu navegador.

### Gerar versao de producao

Para compilar a aplicacao para producao, execute:
```bash
npm run build
```

Os arquivos compilados serao gerados no diretorio `dist/`.
