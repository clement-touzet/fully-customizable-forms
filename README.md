This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


# Stack

## Formulaire
TanStack query pour avoir des formulaires qui sont construit de la même manière, c'est à dire qui sont controllés. Contrairement à React Hook Form qui offre la possibilité de faire des champs controllés ou non controlés, et après ca devient le bazard quand on change entre l'un et l'autre.

## Routing
/ => home page
/dashboard => home page du dashboard
/dashboard/forms => page CRUD pour les formulaires personnalisables
/dashboard/forms/{id} => Aperçu d'un formulaire
/dasboard/form/{id}/edit => Page d'édition d'un formulaire

# Theming
Pour faire le theme : Tailwind css et Shadcn 
chaque page /dashboard/forms/{id} aura sont propre theme provider qui sera fetch de la base de données avant de charger la page. 

Paramètres globaux du thème
- Couleur principale. 
- Couleur secondaire.

# Drag and drop
dnd kit, bientot une nouvelle version 

# Base de données
Postgresql + Drizzle ORM + Docker compose (local), Neon (Preview/Production)

## local (docker)
```
docker-compose up
npm run dev
```

Base de données: 
(**ne pas oublier de lancer docker en local**)

`npm run db:push` : pour pousser le nouveau schéma sur la bd en local
`npm run db:seed` : exécute le programme pour replir la base de données à partir du fichier seed.ts (cf : voir drizzle config)
`npm run db:studio` : lance le mode studio de drizzle (tableau administraion de la bd) 
`npm run db:migrate` : exécute les nouvelles migrations. a utiliser après avoir exécuté la commande "generate" (en dessous) et fait des modifications sur la bd et que tu veux pousser ces modifs en prod
`npm run db:generate` : génère les modifications des tables effectuées sur les schéma drizzle en base de données. Cette commande génère un fichier avec  des commandes SQL pour effectuer une migration.

### Cas d'erreur du npm push ou migrate
```
error: type [nom] does not exist
```
-> tu as oublié d'exporter le fichier ou le dossier dans un index.ts