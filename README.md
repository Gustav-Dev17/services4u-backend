# Aplicaçã backend do projeto Services4u

## 🤌 Requisitos para rodar, clonar e testar a aplicação:

1. <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" width="15"/> <strong>Git</strong> ou <strong>GitHub Desktop</strong>: um sistema de controle de versões distribuído. Já o GitHub Desktop é um aplicativo que permite que você interaja com o GitHub usando uma GUI em vez da linha de comando ou de um navegador web, baixe e instale-o por <a href="https://central.github.com/deployments/desktop/desktop/latest/win32"  target="_blank">este link</a>.

2. <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" width="15"/> <strong>Node</strong>: ambiente de execução Javascript server-side que permite o uso do JavaScript fora do navegador. Baixe e instale-o por <a href="https://nodejs.org/dist/v16.17.1/node-v16.17.1-x64.msi"  target="_blank">este link</a>.

3. <img src="https://seeklogo.com/images/Y/yarn-logo-F5E7A65FA2-seeklogo.com.png" width="15"/> <strong>Yarn</strong>: um gerenciador de pacotes para aplicar comandos prontos ao código de uma aplicação. Instale-o rodando o seguinte comando no terminal:

```
npm install --global yarn
```

4. <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" width="15"/> <strong>Postman</strong>: um API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs. Baixe e instale-o por <a href="https://dl.pstmn.io/download/latest/win64" target="_blank">este link</a>.

5. Execução de scripts habilitada (no Windows). No Windows PowerShell aberto como adminitrador rode o comando abaixo e habilite a execução de scripts para todos os casos:

```
Set-ExecutionPolicy Unrestricted
```

## 🧬 Clonando o projeto

1. Utilize o link abaixo para clonar o projeto pelo GitHub Desktop:

```
https://github.com/Gustav-Dev17/services4u-backend.git
```

ou pelo Git no terminal:

```
git clone https://github.com/Gustav-Dev17/services4u-backend.git
```

## 💿 Instalando as dependências

1. Na pasta raíz do projeto abra um terminal e rode o comando:

```
yarn
```

## 🚀 Rodando a aplicação

1. Duplique o arquivo ```.env.example``` e renomeie a cópia para ```.env```

2. Defina as variáveis de ambiente que serão utilizadas.

3. Gere o esquema do Prisma com:

```
npx prisma generate
```

4. Estabeleça a conexão e sincronização com o banco:

```
npx prisma db push
```

5. Por fim inicie a aplicação com o comando:

```
yarn dev
```

## 🛠️ Tecnologias utilizadas no projeto
<ul>
<li><a href="https://www.typescriptlang.org/">Typescript</a> – superset do Javascript com tipagem e outras coisinhas a mais</li>

<li><a href="https://nodejs.org/en/">NodeJS</a> – Ambiente de execução do Javascript externo ao navegador</li>

<li><a href="https://expressjs.com/pt-br/">ExpressJs</a> – Framework para aplicações web NodeJs</li>

<li><a href="https://www.prisma.io/">Prisma ORM</a> – uma ORM que facilita o trabalho com bancos de dados para desenvolvedores de aplicativos e recursos</li>

<li><a href="https://www.mongodb.com/">MongoDB</a> – Programa de gerenciamento de banco de dados NoSQL de código aberto</li>

<li>And more...</li>
</ul>

