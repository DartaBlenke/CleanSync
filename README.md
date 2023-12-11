# CleanSync

## Objetivo
- Trazer um sistema de gestão de lavação que seja intuitivo e de fácil utilização, que traga praticidade para as lavações e para seus clientes que estarão realizando os agendamentos

## Stack
- react js, supabase, vercel e sonar cloud

## Identificação do problema que será abordado
- inexistência ou baixa qualidade nos softwares de agendamento de lavação de carros

## Relevância e importância do problema
- gerenciamento e controle dos clientes, trazendo praticidade para a lavação e facilidade aos clientes que desejam agendar os serviços e consultar os valores dos mesmos

## Proposta de solução para o problema identificado
- sistema de agendamento, onde o cliente seleciona o tipo de automóvel, o que ja altera os valores de base dos serviços, informa o modelo e placa, seleciona os serviços seleciona a data desejada e hora, forma de pagamento, e após revisar os mesmos, confirma o agendamento

## Caso de uso
    
**Nome do Caso de Uso:** Agendar Lavagem de Carro
  
**Ator Principal:** Cliente
  
**Objetivo:** Permitir que os clientes agendem o serviço da lavação de carro de acordo com suas preferências e necessidades.
  
**Pré-condições:** O sistema está online.

## Requisitos Funcionais:

**Identificação do Clientes:​**
- Os clientes devem se identificar com nome, telefone e a placa do seu carro.​

**Agendamento do Serviço:​**
- Os clientes devem poder agendar serviços desejado e selecionar data e horário.​
Deve haver a opção de agendar um ou mais serviços.​

**Visualização de Agenda:​**
- Deve ser possível visualizar a tabela com os agendamentos realizados.​

**Cancelamento de Agendamentos:​**
- Através da tabela é possível cancelar os agendamentos.​

**Gestão de Disponibilidade:​**
- O sistema deve controlar a disponibilidade de horários para que não haja conflitos de agendamento.​

**Confirmação de Agendamento:**
- Enviar confirmação aos usuários após o agendamento ser realizado com sucesso.

## Requisitos Não Funcionais:

**Responsividade:​**
- O sistema deve ser responsivo e capaz de lidar com diversas telas​

**Disponibilidade:​**
- O sistema deve estar disponível 24/7, com tempo de inatividade planejado mínimo para manutenção.​

**Usabilidade:​**
- A interface do usuário deve ser intuitiva e fácil de usar, permitindo que os clientes naveguem facilmente pelo sistema e agendem serviços.​

**Compatibilidade:** 
- O sistema deve ser compatível com navegadores web modernos para atender a uma ampla gama de clientes.​

**Tempo de Resposta:​**
- O sistema deve ter tempos de resposta aceitáveis, garantindo que as ações do cliente (por exemplo, agendar uma lavagem) sejam concluídas rapidamente.​

**Testes e Qualidade:​**
- O sistema deve passar por testes rigorosos de qualidade, incluindo testes unitários e testes e2e, entre outros.​
​
  
## Histórias de Usuário
- Como cliente, desejo poder agendar uma lavagem de carro conveniente para manter meu veículo limpo e em boas condições. Isso me permite economizar tempo e garantir que meu carro esteja sempre com uma aparência agradável.
- Como um cliente, desejo ter a liberdade de escolher entre diferentes serviços de lavagem, oferecidos de forma individual ou combinada, para atender às minhas preferências e necessidades específicas de limpeza do veículo.

## Trade-offs

### Usabilidade
- Sistema de fácil utilização, interface simples, bonita e intuitiva, trazendo toda a experiência necessária para o agendamento do serviço.

### Manutenção
- Fácil manutenabiliddade, por não tratar de muitas informações e não utilizar dados sensíveis, o que pode demandar mais dificuldade e tempo será no momento em que o sistema escalar
e comece a ter mais clientes, exigindo mais personalizações e mais atenção a cada cliente.

### Funcionalidade
- Traz as funcionalidades necessárias para que o sistema seja capaz de realizar o agendamento, e para a lavação que ela possa visualizar os agendamentos e os serviços agendados pelo cliente.

### Tempo de Resposta
- Resposta de confirmação do agendamento praticamente instantânea, após completar o processo, para a lavação atualização da tabela de controle.

## FDD
- A separação dos pacotes foi pensada de acordo com o fluxo de desenvolvimento, dando início no planejamento e refinamento da ideia e dando sequência a criação dos fluxos e identificando as necessidades e desenvolviemnto do protótipo antes de codificar efetivamente, a separação foi feita em 3 pacotes entregáveis.

## Board
- https://trello.com/invite/b/0RZClooI/ATTIe97229bece5311f1b012689e487bbd0f353BB3E1/portfolio

## Figma
- https://www.figma.com/file/AB3SbAwt4bACvjHiEkXGuG/CleanSync?type=design&mode=design&t=tSjx7uEd9h7JdwGt-1

## Diagramas
### Diagrama de Caso de Uso
<img width="5639" alt="diagramas portfólio" src="https://github.com/DartaBlenke/CleanSync/assets/69226024/c19fad2e-bc76-4f05-8b71-bf8b1ecce4d3">

### Diagrama de Classe
![image](https://github.com/DartaBlenke/CleanSync/assets/69226024/22c18729-34c1-4265-9922-fd4b5e429c4f)

### Diagrama de Contexto | Digrama de Contêiner
<img width="3586" alt="diagramas2" src="https://github.com/DartaBlenke/CleanSync/assets/69226024/59578662-5e76-4eb7-930e-e5d83bc08cad">
