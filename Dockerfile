ARG ImageID=node:slim
FROM --platform=linux/amd64 $ImageID

ENV [PORT]=[5001]
ENV [MONGODB_URI]=[mongodb+srv://admin:Cf52CQDclI3Qp33I@cluster0.o90lc2z.mongodb.net/products]
ENV [API_VERSION_ROUTE]=[/api/v1/products]

# Create app directory
WORKDIR /src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5001

CMD ["npm", "start"]