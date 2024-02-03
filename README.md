# Teste - Facilita Jurídico

Teste técnico proposto pela Facilita Jurídico

## Execução

### Banco de Dados

Inicialmente deve ser executado o script "create_db.sql" no PostgreSQL para criação do banco de dados e as configurações do banco presentes no arquivo "facilita-backend/index.js" devem ser alteradas para as suas locais.

### Backend

Com o banco configurado o terminal deve ser aberto no diretório "facilita-backend" e com NodeJS instalado (versão 16.17.0) devem ser executadas as duas linhas de comando:

    $ npm i
    $ npm run dev

Serão instaladas as dependências do projeto e o servidor será iniciado na porta 9000.

### Frontend

O terminal deve ser aberto no diretório "facilita-frontend" e com NodeJS instalado (versão 16.17.0) devem ser executadas as duas linhas de comando:

    $ npm i
    $ npm run dev

Serão instaladas as dependências (como o React na versão 18.2.0) e a aplicação será inicializada no endereço "http://localhost:5173/".

## Observação

Uma observação que achei pertinente é sobre a decisão do algoritmo de roteamento utilizado. Foi proposto uma solução de problema de caixeiro viajante, e como foi dito, devíamos retornar **o melhor caminho possível**, então adotei uma estratégia de força bruta garantindo essa resposta, apesar do baixo desempenho. Caso fosse necessário um desempenho melhor, utilizaria uma solução heurística para o problema.

