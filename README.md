# Menu Backend

Execute na raiz: `npm install`, copie `.env.example` para `.env`, configure PostgreSQL e rode `npm run start:dev`. A sincronização de esquema está habilitada para desenvolvimento. Use banco de teste e faça backup antes de atualizar dados existentes. Se houver status DELIVERY no banco antigo, migre para DELIVERED antes de iniciar.

Rotas: GET/POST /categories, /products, /spots; PATCH/DELETE /:id nos três recursos; GET /guest-checks?status=OPENED; GET /guest-checks/:id; GET /orders?guestCheckId=<uuid>; POST /orders; PATCH /orders/:id/status.
