# Sistema de Metas CRJ — Avante Social / SEDH

Sistema web para acompanhamento das metas e etapas do Plano de Trabalho do CRJ Cariacica.

## Arquitetura
- Front-end estático: GitHub Pages
- Banco e autenticação: Supabase
- Persistência oficial: tabela `crj_app_state`
- Controle de acesso: `crj_app_members` com RLS
- Perfis: administrador, coordenador e visualizador

## Fluxo
1. O primeiro usuário autorizado ativa o perfil de administrador pelo código inicial fornecido fora do repositório.
2. Novos usuários criam conta e solicitam acesso.
3. O administrador aprova o perfil.
4. Coordenadores preenchem as competências mensais e os dados são sincronizados com Supabase.

A versão anterior do dashboard foi preservada em `legacy-dashboard.html`.
