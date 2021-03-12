FROM node:14.2-alpine as build

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
COPY --from=build /app/.next/ ./.next

CMD [ "npm", "run", "start" ]
