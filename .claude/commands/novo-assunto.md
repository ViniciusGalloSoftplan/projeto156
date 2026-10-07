---
description: Cadastra um novo assunto (serviço) no Portal 156 — busca links no Oracle, categoriza, insere, commita e publica no FTP
argument-hint: "<assunto>" "<descrição>"
---

# Novo assunto no Portal 156

Entrada do usuário (assunto e descrição, geralmente colados do Teams):

$ARGUMENTS

Siga as etapas abaixo **na ordem**. Não edite nenhum arquivo antes da aprovação explícita do plano (etapa 4).

## 1. Buscar os links no Oracle

Use o servidor MCP do Oracle configurado para rodar a query abaixo, trocando `<TERMO>` pelo assunto (ou por um trecho marcante dele):

```sql
SELECT
    c.NMCLASSE,
    'https://sempapel.piracicaba.sp.gov.br/atendimento/servico-info/' || s.CDSERVICO AS "Link Externo",
    '/cpav/abrirCadastroProcessoDinamico.do?cdClasse=' || cc.CDCLASSE || '&cdOrgao=' || cc.CDORGAO AS "Link Interno"
FROM SOLAR.ECPASERVICO s
LEFT JOIN SOLAR.ECPAFORMULARIO f
    ON f.CDFORMULARIO = s.CDFORMULARIO
LEFT JOIN SOLAR.EGPECLASSEORGAOCONFIGURACAO cc
    ON f.CDFORMULARIO = cc.CDFORMULARIO
LEFT JOIN SOLAR.EPCLCLASSE c
    ON cc.CDCLASSE = c.CDCLASSE
LEFT JOIN SOLAR.ECPAORGAOSETOR o
    ON o.CDORGAOSETOR = s.CDSETORRESPONSAVEL
LEFT JOIN SOLAR.ECPAAREAINTERESSE a
    ON s.CDAREAINTERESSE = a.CDAREAINTERESSE
WHERE UPPER(c.NMCLASSE) LIKE UPPER('%<TERMO>%')
ORDER BY a.CDAREAINTERESSE
```

- **0 linhas:** tente um termo mais curto (uma ou duas palavras do assunto, evitando acentos que podem variar). Se ainda assim não achar, **pare** e peça o nome exato da classe. Nunca invente link nem use `TODO`.
- **Mais de 1 linha:** mostre as opções e pergunte qual é a correta.
- Se algum dos links vier nulo (ex.: `cdClasse=&cdOrgao=`), avise e pare.

## 2. Conferir duplicidade

Procure em `assets/js/data/*.js` pelo ID do serviço (`servico-info/<ID>`) e pelo `cdClasse=<N>`. Se já existir, mostre onde está e pare.

## 3. Categorizar

1. Leia `categoryOrder` em `assets/js/data.js` e os arquivos de `assets/js/data/` relevantes.
2. Escolha a **categoria** e a **subcategoria** onde o assunto se encaixa melhor, comparando com os serviços que já estão lá.
   - Atenção: algumas categorias (ex.: `eventos`) têm `services` direto na categoria, sem `subcategories`. Respeite a estrutura do arquivo.
3. **Se não se encaixar bem em nenhuma**, não force: pare e apresente as opções (ex.: "nova subcategoria X dentro de Y" ou "nova categoria Z"), com uma recomendação. O usuário decide se cria ou não.
   - Nova subcategoria: segue o padrão `{ id, name, icon, desc, services: [...] }`.
   - Nova categoria exige: novo arquivo `assets/js/data/<id>.js` no mesmo formato dos outros, a tag `<script src="assets/js/data/<id>.js">` em **todos** os HTML que carregam os arquivos de `data/` (procure por `data/eventos.js` nos `*.html`) e o `id` em `categoryOrder` no `data.js`.

## 4. Montar o serviço e apresentar o plano

Monte o objeto no padrão dos vizinhos:

```js
{
  icon: "prefixo:nome-do-icone",
  name: "Nome em Título",
  tag: "Tag curta",
  desc: "Uma frase clara, no tom dos outros serviços.",
  keywords: [ ... ],
  link: "<Link Externo>",
  linkInterno: "<Link Interno>",
}
```

Regras:
- **icon:** Iconify, coerente com o assunto e com os ícones dos vizinhos. Prefira os conjuntos já usados no projeto (`ph`, `fluent-emoji-high-contrast`, `solar`, `tabler`, `mdi`, `material-symbols`, `game-icons`, `lucide`). Confirme que o ícone existe em `https://api.iconify.design/<prefixo>.json?icons=<nome>` (a resposta não pode ter `"not_found"`).
- **name:** baseado no assunto enviado, em formato título como os demais.
- **tag:** reaproveite tags que já existem na subcategoria quando fizer sentido.
- **desc:** baseada na descrição enviada, resumida em uma ou duas frases.
- **keywords:** de 6 a 14 termos em minúsculas, na linguagem que o cidadão digitaria na busca (sinônimos, termos populares, erros comuns de nome).
- Não altere `featuredOrder` a não ser que o usuário peça.

Apresente o plano com: arquivo, categoria/subcategoria, posição (fim da lista de `services`), o objeto completo e os links retornados do Oracle. **Aguarde a aprovação.** Se o usuário pedir ajustes, refaça o plano.

## 5. Inserir e validar

1. Insira o objeto no fim do array `services` escolhido, mantendo a indentação e o padrão de vírgulas do próprio arquivo. Não reformate o restante do arquivo.
2. Valide a sintaxe: `node --check <arquivo>`.
3. Valide que os dados carregam (troque `<arquivo>`):
   ```
   node -e "const fs=require('fs'),vm=require('vm');const c=vm.createContext({});vm.runInContext(fs.readFileSync('assets/js/data.js','utf8')+'\n'+fs.readFileSync('<arquivo>','utf8')+'\n;globalThis.__n=categories.length;',c);console.log('OK - categorias carregadas:',c.__n)"
   ```
4. Se algo falhar, corrija antes de seguir.

## 6. Commit

Adicione **apenas** os arquivos alterados e faça o commit:

```
git add <arquivos alterados>
git commit -m "feat(assuntos): adiciona <Nome do Serviço> em <categoria>/<subcategoria>"
```

Não faça `push` a menos que o usuário peça.

## 7. Publicar no FTP (com confirmação)

1. Rode a prévia:
   `powershell -NoProfile -ExecutionPolicy Bypass -File deploy/publicar.ps1 -Preview`
2. Mostre ao usuário a lista de arquivos que seriam enviados e pergunte: **"Posso publicar no FTP?"**
3. Só com um "sim" explícito, rode:
   `powershell -NoProfile -ExecutionPolicy Bypass -File deploy/publicar.ps1 -Confirmar`
4. Informe o resultado (sucesso ou erro, com o trecho relevante do log `deploy/ultimo-deploy.log`).

## Resumo final

Termine com: serviço cadastrado, onde ficou, hash do commit e se foi publicado.
