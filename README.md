# 📋 Projeto TODO

Um aplicativo simples de lista de tarefas (TODO) construído com React 🚀, permitindo adicionar , editar , completar  e remover  tarefas. Inclui filtros 🔍 para visualizar tarefas pendentes ⏳, concluídas ✅ ou todas 📋, com persistência local 💾 via localStorage e carregamento inicial 🌐 de dados de uma API externa.

### Principais Funções
- **🗑️ Remover Tarefa**: Exclui uma tarefa da lista.
- **🔍 Filtrar Tarefas**: Exibe apenas tarefas pendentes ⏳, concluídas ✅ ou todas 📋.
- **🧹 Limpar Concluídas**: Remove todas as tarefas marcadas como concluídas ✅.
- **💾 Persistência Local**: Salva as tarefas no localStorage do navegador.
- **🌐 Carregamento Inicial**: Busca as primeiras 3 tarefas de uma API (JSONPlaceholder) no primeiro carregamento.

### Tecnologias Usadas
- **⚛️ React**: Framework para construção da interface de usuário.
- **🔷 TypeScript**: Tipagem estática para maior robustez no código.
- **🎨 Tailwind CSS**: Estilização utilitária para layout responsivo e moderno.
- **⚡ Vite**: Ferramenta de build e desenvolvimento rápido.
- **🆔 UUID**: Geração de IDs únicos para tarefas.
- **📡 Fetch API**: Para consumir dados de uma API externa (JSONPlaceholder).

### Deploy
O projeto foi publicado utilizando **🚀 GitHub Pages**, permitindo acesso online sem necessidade de configurar um servidor. O deploy é automatizado através do pacote `gh-pages`, que publica o conteúdo da pasta `dist` gerada pelo build do Vite.

**🔗 Acesse o projeto online**: [https://srbernardo.github.io/todo-react](https://srbernardo.github.io/todo-react)

Para realizar o deploy manualmente:
```bash
npm run deploy
```

### Instalação e Execução
1. Clone o repositório 📥.
2. Instale as dependências: `npm install` 📦.
3. Execute o projeto: `npm run dev` ▶️.
4. Acesse no navegador em `http://localhost:5173` (porta padrão do Vite) 🌐.

### Estrutura do Projeto
- `src/pages/Home.tsx`: Componente principal com lógica de estado e efeitos.
- `src/components/AddTask.tsx`: Formulário para adicionar tarefas.
- `src/components/TaskList.tsx`: Lista de tarefas com ações e filtros.
- `src/types.ts`: Definições de tipos TypeScript.
- `src/index.css`: Estilos globais.