# syntax=docker/dockerfile:1

# Versions
FROM node:20-alpine AS node_upstream

# Base stage for dev and build
FROM node_upstream AS base

# Vérification de pourquoi libc6-compat peut être utile sur Alpine
# https://github.com/nodejs/docker-node/tree/main#nodealpine
RUN apk add --no-cache libc6-compat

WORKDIR /srv/app

# Désactiver la télémétrie Next.js
ENV NEXT_TELEMETRY_DISABLED 1

# ============================================================
# Development image
# ============================================================
FROM base AS dev

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME localhost

CMD ["sh", "-c", "npm install --legacy-peer-deps && npm run dev"]

# ============================================================
# Build stage
# ============================================================
FROM base AS builder

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY . .

RUN npm run build

# ============================================================
# Production image
# ============================================================
FROM node_upstream AS prod

WORKDIR /srv/app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs && \
	adduser --system --uid 1001 nextjs

# Copier uniquement les fichiers nécessaires pour réduire la taille de l'image
COPY --from=builder /srv/app/public ./public

# Définir les permissions pour le cache de rendu
RUN mkdir -p .next && chown nextjs:nodejs .next

# Copier les fichiers essentiels pour l'exécution de Next.js
COPY --from=builder --chown=1001:1001 /srv/app/.next/standalone ./
COPY --from=builder --chown=1001:1001 /srv/app/.next/static ./.next/static

# Exécuter avec un utilisateur non root
USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
