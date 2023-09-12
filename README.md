# CleanSync

**stack**

> react js e node js
> 
- Identificação do problema que será abordado

> inexistência ou baixa qualidade nos softwares de agendamento de lavação de carros
> 
- Relevância e importância do problema

> gerenciamento e controle dos clientes, trazendo praticidade para a lavação e facilidade aos clientes que desejam agendar os serviços e consultar os valores dos mesmos
> 
- Proposta de solução para o problema identificado

> sistema de agendamento, onde o cliente seleciona o tipo de automóvel, o que ja altera os valores de base dos serviços, informa o modelo e placa, seleciona os serviços seleciona a data desejada e hora, forma de pagamento, e após revisar os mesmos, confirma o agendamento
>
> 
>
 **caso de uso**
    
  **Nome do Caso de Uso:** Agendar Lavagem de Carro
  
  **Ator Principal:** Cliente
  
  **Objetivo:** Permitir que os clientes agendem o serviço da lavação de carro de acordo com suas preferências e necessidades.
  
  **Pré-condições:** O sistema está online.
  
  **Fluxo Principal:**
  
  1. cliente acessa a página da lavação.
  2. sistema solicita placa do veículo.
  3. sistema exibe as opções de veículos.
  4. cliente seleciona o tipo de veículo.
  5. sistema solicita as informações do veículo.
  6. cliente preenche modelo e placa vem do passo 1.
  7. sistema exibe serviços disponíveis.
  8. cliente seleciona serviço(s) desejado(s).
  9. sistema exibe dia e hora disponíveis.
  10. cliente seleciona data e hora desejada.
  11. sistema solicita forma de pagamento.
  12. cliente seleciona forma de pagamento desejada.
  13. sistema exibe resumo.
  14. cliente confirma dados e agendamento.
  
  **Fluxo Alternativo (Cliente Cancela):**
  
  1. cliente acessa a página da lavação
  2. sistema solicita placa do veículo
  3. cliente acessa aba de serviços
  4. sistema exibe opções
  5. cliente seleciona “Meus Agendamentos"
  6. sistema exibe todos os agendamentos anteriores
  7. cliente seleciona o último agendamento
  8. sistema exibe dados do agendamento
  9. cliente seleciona botão de cancelar agendamento
  10. sistema pede confirmação de cancelamento
  11. cliente confirma cancelamento
  12. sistema atualiza e retira agendamento do cliente
  13. sistema atualiza para a lavação o cancelamento

**Requisitos Funcionais:**

1. **Identificação do Clientes:**
    - Os clientes devem se identificar com a placa do seu carro.
2. **Agendamento do Serviço:**
    - Os clientes devem poder agendar serviços desejado e selecionar data e horário.
    - Deve haver a opção de agendar um ou mais serviços.
3. **Visualização de Agenda:**
    - Os clientes devem poder visualizar sua agenda de agendamentos, incluindo informações sobre datas, horários e serviços agendados.
4. **Cancelamento de Agendamentos:**
    - Os clientes devem ter a capacidade de cancelar agendamentos existentes.
5. **Cálculo de Preços:**
    - O sistema deve calcular automaticamente o preço total com base nos serviços agendados.
6. **Gestão de Disponibilidade:**
    - O sistema deve controlar a disponibilidade de horários para evitar conflitos de agendamento.
7. **Administração de Serviços:**
    - Os administradores devem ser capazes de adicionar, editar ou remover os serviços e seus preços e tempo de duração.

**Requisitos Não Funcionais:**

1. **Desempenho:**
    - O sistema deve ser responsivo e capaz de lidar com um número significativo de agendamentos sem degradação do desempenho.
2. **Escalabilidade:**
    - O sistema deve ser escalável para acomodar o crescimento futuro, adicionando mais clientes e serviços sem interrupções.
3. **Disponibilidade:**
    - O sistema deve estar disponível 24/7, com tempo de inatividade planejado mínimo para manutenção.
4. **Usabilidade:**
    - A interface do usuário deve ser intuitiva e fácil de usar, permitindo que os clientes naveguem facilmente pelo sistema e agendem serviços.
5. **Compatibilidade:**
    - O sistema deve ser compatível com navegadores web modernos para atender a uma ampla gama de clientes.
6. **Backup:**
    - Deve haver um sistema de backup regular para caso seja necessário recuperar dados das lavações e clientes.
7. **Tempo de Resposta:**
    - O sistema deve ter tempos de resposta aceitáveis, garantindo que as ações do cliente (por exemplo, agendar uma lavagem) sejam concluídas rapidamente.
8. **Testes e Qualidade:**
    - O sistema deve passar por testes rigorosos de qualidade, incluindo testes unitários e testes e2e, entre outros.
  
**Histórias de Usuário**
- Como cliente, desejo poder agendar uma lavagem de carro conveniente para manter meu veículo limpo e em boas condições. Isso me permite economizar tempo e garantir que meu carro esteja sempre com uma aparência agradável.
- Como um cliente, desejo ter a liberdade de escolher entre diferentes serviços de lavagem, oferecidos de forma individual ou combinada, para atender às minhas preferências e necessidades específicas de limpeza do veículo.

**FDD**
- A separação dos pacotes foi pensada de acordo com o fluxo de desenvolvimento, dando início no planejamento e refinamento da ideia e dando sequência a criação dos fluxos e identificando as necessidades e desenvolviemnto do protótipo antes de codificar efetivamente, a separação foi feita em 3 pacotes entregáveis.

**Board**
- https://trello.com/b/0RZClooI/portf%C3%B3lio

**Diagramas**
<img width="5639" alt="diagramas portfólio" src="https://github.com/DartaBlenke/CleanSync/assets/69226024/c19fad2e-bc76-4f05-8b71-bf8b1ecce4d3">
<img width="1168" alt="classe" src="https://github.com/DartaBlenke/CleanSync/assets/69226024/6fe2c299-0502-4a93-a79a-e470a2fbead6">
<img width="3586" alt="diagramas2" src="https://github.com/DartaBlenke/CleanSync/assets/69226024/59578662-5e76-4eb7-930e-e5d83bc08cad">
