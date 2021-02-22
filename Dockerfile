FROM node:14.2-alpine as build

RUN apk add --no-cache python musl-dev gcc make g++ file alpine-sdk  && \
    python -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip install --upgrade pip setuptools && \
    rm -r /root/.cache

# Create app directory
WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM node:14.2-slim

WORKDIR /usr/src/app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/tsconfig*.json ./
COPY --from=build /app/.next ./.next



CMD [ "npm", "run", "start" ]
