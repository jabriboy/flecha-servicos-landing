# Flecha Serviços - Landing Page

Uma landing page moderna e responsiva para a Flecha Serviços, empresa especializada em manutenção predial e industrial.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool e servidor de desenvolvimento
- **Lucide React** - Biblioteca de ícones
- **Shadcn/UI** - Componentes de interface pré-construídos

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Cabeçalho com navegação
│   │   └── Footer.tsx          # Rodapé com informações de contato
│   ├── sections/
│   │   ├── Hero.tsx            # Seção principal (banner)
│   │   ├── Services.tsx        # Seção de serviços
│   │   ├── About.tsx           # Seção sobre a empresa
│   │   ├── ServiceAreas.tsx    # Áreas de atuação
│   │   ├── Gallery.tsx         # Galeria de trabalhos
│   │   ├── Articles.tsx        # Artigos recentes
│   │   └── Contact.tsx         # Formulário de contato
│   └── ui/                     # Componentes de interface reutilizáveis
├── data/
│   └── company.ts              # Dados da empresa (conteúdo)
├── types/
│   └── index.ts                # Definições de tipos TypeScript
├── assets/                     # Imagens e recursos estáticos
├── App.tsx                     # Componente principal
├── App.css                     # Estilos globais
└── main.tsx                    # Ponto de entrada da aplicação
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (recomendado) ou npm

### Passos para executar

1. **Instalar dependências:**
   ```bash
   pnpm install
   # ou
   npm install
   ```

2. **Executar em modo de desenvolvimento:**
   ```bash
   pnpm run dev
   # ou
   npm run dev
   ```

3. **Acessar a aplicação:**
   - Abra o navegador em `http://localhost:5173`

4. **Build para produção:**
   ```bash
   pnpm run build
   # ou
   npm run build
   ```

## 🎨 Características do Design

- **Design Responsivo:** Funciona perfeitamente em desktop, tablet e mobile
- **Cores da Marca:** Paleta baseada em azul, amarelo e laranja
- **Animações Suaves:** Transições e hover effects para melhor UX
- **Navegação Intuitiva:** Menu fixo com scroll suave entre seções
- **Call-to-Actions:** Botões estratégicos para conversão
- **Formulário de Contato:** Integração direta com WhatsApp

## 📱 Funcionalidades

### Seções Principais

1. **Hero Section**
   - Título impactante
   - Descrição da empresa
   - Botões de ação (WhatsApp e navegação)
   - Indicadores de confiança

2. **Serviços**
   - Cards com ícones personalizados
   - Descrições detalhadas
   - Tipos de contrato (Contrato e Empreita)

3. **Sobre a Empresa**
   - Missão, Visão e Valores
   - Estatísticas de desempenho
   - Imagem institucional

4. **Áreas de Atuação**
   - Segurança e Automação
   - Equipamentos Elétricos
   - Soluções Sustentáveis

5. **Galeria de Trabalhos**
   - Showcase de projetos realizados
   - Logos de parceiros

6. **Artigos**
   - Blog com conteúdo relevante
   - Cards com data e tempo de leitura

7. **Contato**
   - Formulário integrado com WhatsApp
   - Informações de contato
   - Links para redes sociais

## 🔧 Personalização

### Alterando Conteúdo

O conteúdo da landing page está centralizado no arquivo `src/data/company.ts`. Para personalizar:

1. **Informações da empresa:** Edite o objeto `companyInfo`
2. **Dados de contato:** Modifique o objeto `contactInfo`
3. **Serviços:** Atualize o array `mainServices`
4. **Áreas de atuação:** Edite o array `serviceAreas`
5. **Artigos:** Modifique o array `recentArticles`

### Alterando Cores

As cores estão definidas no arquivo `src/App.css`. As principais classes são:

- `.gradient-bg` - Gradiente principal (amarelo/laranja)
- `.btn-primary` - Botão primário
- `.btn-secondary` - Botão secundário

### Adicionando Imagens

1. Coloque as imagens na pasta `src/assets/`
2. Importe e use nos componentes
3. Para otimização, use formatos WebP quando possível

## 📞 Integração WhatsApp

O formulário de contato está integrado com WhatsApp. Para personalizar:

1. Edite o número no arquivo `src/data/company.ts`
2. Modifique a mensagem padrão nos componentes de contato

## 🚀 Deploy

### Opções de Deploy

1. **Vercel** (Recomendado)
   ```bash
   pnpm run build
   # Upload da pasta dist/
   ```

2. **Netlify**
   ```bash
   pnpm run build
   # Drag & drop da pasta dist/
   ```

3. **GitHub Pages**
   - Configure o workflow de deploy automático

## 📝 Licença

Este projeto foi desenvolvido especificamente para a Flecha Serviços.

## 🤝 Suporte

Para dúvidas ou modificações, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ para Flecha Serviços**

