FROM node:12.22.9
WORKDIR /app
COPY . .
RUN yarn config set strict-ssl false -g && yarn install --production
CMD ["node", "./build/src/app.js"]
EXPOSE 3002
ENV PORT=3002
ENV DATABASE_URL=mysql://root@192.168.99.100:3306/web_novel
ENV ACCESS_TOKEN_SECRET=jwtaccess123
ENV REFRESH_TOKEN_SECRET=jwtrefrest123