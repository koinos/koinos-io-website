FROM node:18-alpine AS builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY . .

# RUN yarn --frozen-lockfile && \
#    yarn build

RUN npm install && \
    npm run build

FROM node:18-alpine AS runner

RUN apk add --no-cache bash

WORKDIR /app

ARG IMAGE_TAG
ENV IMAGE_TAG ${IMAGE_TAG}
EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production
# this disables nextjs's built-in spyware to collect usage data
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

CMD ["node", "server.js"]