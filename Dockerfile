FROM node:7.9.0-alpine

RUN npm install pm2@next -g

COPY process.yml .
COPY ./build/package.json .
COPY ./build/yarn.lock .
# Copy application files
COPY ./build .
COPY .env.example .

# Install Node.js dependencies
RUN yarn install --production --no-progress

# Expose ports
EXPOSE 80 3000 443 43554

# Start process.yml
CMD ["pm2-docker",  "process.yml"]
