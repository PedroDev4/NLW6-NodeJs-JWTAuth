# NLW VALORIZA


## Regras

- Cadastro de Usuário
    [X] Não é permitido cadastrar usuário SEM email
    [X] Não é permitido cadastrar mais de um usuário com o mesmo email

- Cadastro de Tag's
    [X] Não é permitido cadastrar tag SEM nome
    [X] Não é permitido cadastrar mais de uma tag com o mesmo nome
    [X] Não é permitido o cadastro por usuários não administradores

- Cadastro de Elogios
    [X] Não é permitido cadastrar elogios para usuários invalidos.
    [X] Não é permitido um usuário cadastrar um elogio para sí mesmo
    [] O usuário precisa estar logado na aplicação 

- Autenticação de Usuário
    [X] Não é possivel gerar um token SEM email
    [X] Verificar se o usuario existe na base de dados
    [X] Verificar se a senha recebida do usuário é COERENTE a senha do mesmo na base de dados.