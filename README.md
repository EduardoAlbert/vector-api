# Vector API

Este projeto contém duas APIs simples para manipulação de vetores.

## Funcionalidades

### 1. Ordenar Vetor

**Endpoint:** `POST /sort`

Esta API aceita um vetor no formato JSON e retorna uma versão ordenada em ordem crescente.

**Exemplo de Requisição:**
```json
{
  "vector": [3, 6, 1, 8, 5, 9, 5, 1, 0, -1, 8]
}
```
**Exemplo de Resposta:**
```json
[-1, 0, 1, 1, 3, 5, 5, 6, 8, 8, 9]
```

### 2. Encontrar Mínimo e Máximo

**Endpoint:** `POST /minmax`

Esta API aceita um vetor no formato JSON e retorna os valores mínimo e máximo.

**Exemplo de Requisição:**
```json
{
  "vector": [3, 6, 1, 8, 5, 9, 5, 1, 0, -1, 8]
}
```
**Exemplo de Resposta:**
```json
[-1, 9]
```

## Como Usar

1. Clone o repositório:

```bash
git clone https://github.com/EduardoAlbert/vector-api.git
cd vector-api
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```

4. Faça requisições para as APIs conforme as funcionalidades descritas acima.

## Requisitos

- Node.js
- npm
