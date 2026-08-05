# Sistema de Consultas - Mobile

Aplicativo mobile desenvolvido em **React Native com Expo** para gerenciamento de consultas médicas.

O aplicativo consome a API REST desenvolvida em Spring Boot.

---

## Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- Axios
- React Hooks

---

## Estrutura do projeto

```
src
 ├── interfaces
 ├── services
 ├── types
 └── assets
```

---

## Como executar

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Entre na pasta

```bash
cd sistema-consultas-mobile
```

### 3. Instale as dependências

```bash
npm install
```

ou

```bash
npm i
```

---

### 4. Execute o projeto

```bash
npx expo start
```

Será aberto o Expo.

Você poderá executar:

- Android Emulator
- iOS Simulator
- Expo Go

---

## Comunicação com a API

O aplicativo está configurado para consumir a API executando localmente.

Backend:

```
http://localhost:8080
```

Caso utilize dispositivo físico, altere a URL da API para o endereço IP da máquina.

---

## Funcionalidades

- Listagem de consultas
- Cadastro de consultas
- Atualização de consultas
- Cancelamento de consultas
- Consulta de médicos
- Consulta de pacientes
- Consulta de especialidades

---

## Arquitetura

O projeto está organizado em:

- Interfaces
- Services
- Types
- Componentes React

A comunicação com o backend é realizada através de serviços responsáveis pelas requisições HTTP.

---

## Fluxo da aplicação

1. O usuário abre o aplicativo.
2. O aplicativo consulta a API Spring Boot.
3. Os dados são exibidos na interface.
4. As alterações são enviadas para a API.
5. O backend persiste as informações e retorna os dados atualizados.

---

## Desenvolvido por

Agatha Cassari Benedicto
