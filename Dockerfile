# Étape 1 : builder Astro
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Étape 2 : servir les fichiers statiques avec nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Optionnel : remplacer la config nginx si tu veux des headers spécifiques
# COPY nginx.conf /etc/nginx/conf.d/default.conf
