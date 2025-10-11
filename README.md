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