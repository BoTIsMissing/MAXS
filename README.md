# Maxs Tecnologia — Angular 21

Site institucional da Maxs Tecnologia desenvolvido em Angular 21 com componentes standalone.

## Requisitos

- Node.js 22+
- npm 10+

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm start
# ou
ng serve

# Acesse: http://localhost:4200
```

## Build para produção

```bash
ng build
# Output em: dist/maxs-tecnologia/
```

## Estrutura do projeto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/       # Navbar fixa com scroll e menu mobile
│   │   ├── hero/         # Seção principal (hero)
│   │   ├── stats/        # Barra de estatísticas
│   │   ├── services/     # Cards de serviços
│   │   ├── about/        # Sobre a empresa
│   │   ├── contact/      # Formulário de contato
│   │   └── footer/       # Rodapé
│   ├── app.component.ts  # Componente raiz
│   └── app.config.ts     # Configuração da aplicação
├── styles.scss           # Estilos globais e variáveis CSS
└── index.html
```

## Tecnologias

- **Angular 21** — Standalone components, Signals, @for control flow
- **TypeScript 5.6**
- **SCSS** — Variáveis CSS, sem frameworks externos
- **Google Fonts** — Syne + Inter
