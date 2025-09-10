# 🦇 BatPass Generator

Um aplicativo mobile para geração e compartilhamento de senhas seguras, desenvolvido em React Native com Expo.

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **TypeScript** - Superset JavaScript com tipagem estática
- **Expo Clipboard** - Para funcionalidade de copiar para área de transferência
- **Expo SMS** - Para envio de SMS diretamente do aplicativo

## 📋 Funcionalidades

- Geração automática de senhas seguras
- Copiar senha para a área de transferência
- Enviar senha por SMS para um número de telefone
- Interface temática do Batman

## 🏗️ Arquitetura e Estrutura

O projeto segue uma organização em camadas com separação de responsabilidades:

### Camadas da Aplicação

1. **Camada de Apresentação (Components)**
   - Componentes visuais reutilizáveis
   - `BatButton`: Botões interativos com estados
   - `BatLogo`: Logo e título da aplicação
   - `BatTextInput`: Campo de exibição da senha gerada

2. **Camada de Serviços (Services)**
   - Lógica de negócio independente da UI
   - `GeneratePasswordService`: Geração de senhas aleatórias
   - `SMSSender`: Serviço de envio de mensagens SMS

3. **Camada de Estilos (Styles)**
   - Definições de estilos separadas para cada componente
   - Manutenção facilitada da identidade visual

4. **Camada de Aplicação (Screens)**
   - `Home`: Tela principal que orquestra os componentes
   - `App`: Componente raiz da aplicação

### Estrutura de Diretórios

```
src/
├── components/          # Componentes reutilizáveis
│   ├── BatButton/
│   ├── BatLogo/
│   └── BatTextInput/
├── services/           # Lógica de negócio e serviços
│   ├── GeneratePasswordService.ts
│   └── SMSSender.ts
└── Screems/           # Telas da aplicação
    └── Home.tsx
```

## 🎨 Design e Interface

- Tema escuro com cores inspiradas no Batman (#e5bf3c amarelo, #4d4d4d cinza escuro)
- Botões com feedback visual ao pressionar
- Layout responsivo e centralizado
- Ícone do Batman como identidade visual

## ⚙️ Como Funciona

1. O usuário toca em "GENERATE PASSWORD" para criar uma senha aleatória
2. A senha é exibida no campo amarelo (BatTextInput)
3. O usuário pode copiar a senha com o botão "COPY"
4. Opcionalmente, pode enviar a senha por SMS digitando um número e tocando em "SEND SMS"

## 🔧 Serviços Implementados

- **Geração de Senhas**: Combina letras maiúsculas, minúsculas, números e caracteres especiais
- **Clipboard**: Integração nativa com área de transferência do dispositivo
- **SMS**: Envio de mensagens através do aplicativo nativo de mensagens

Este projeto foi parcialmente criado durante o Bootcamp da DIO, sob instruções de Felipe Aguiar (Felipão), e finalizado por mim (Vagner dos Santos) com o acréscimo de uma funcionalidade (envio de password por SMS), demonstrando boas práticas de desenvolvimento React Native com separação de concerns, componentes reutilizáveis e integração com APIs nativas do dispositivo. 