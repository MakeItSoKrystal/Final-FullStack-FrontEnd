<img src="https://raw.githubusercontent.com/krymarie/Final-FullStack-FrontEnd/master/src/components/Logo/cloutLogo.png" width="280" alt="Clout Icon">

## Client Integration Solutions

### React Front-end has two dependancies

- [RESTful API server with datastore](https://github.com/krymarie/Final-FullStack-API)

- [GraphQL API server with Prisma and Docker](https://github.com/krymarie/GraphQL-API-Node-Server)

### To install and serve front-end:

```
npm install
```

```
npm start
```

# Documentation

### Conditional logic and array methods render large lists

- [AllClients mapped into individual clients for seeding](https://github.com/krymarie/GraphQL-API-Node-Server/blob/master/prisma/seed.js#L11)
- [For loop of allClients seeds each client into the DB](https://github.com/krymarie/GraphQL-API-Node-Server/blob/master/prisma/seed.js#L26)

### Front-end

- Front-end was developed using <img src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" width="15" alt="React Icon"> react, it responsive and has multiple nave items that populate data conditionally. Run `npm install` and `npm start` after deploying other dependencies to see functionality.

### NPM scripts and Node used to create and manage back-end

- [npm scrips here used to generate and manage API and DB](https://github.com/krymarie/GraphQL-API-Node-Server/blob/master/package.json#L11)
- [nodemon script here used to serve up RESTful API](https://github.com/krymarie/Final-FullStack-API/blob/master/package.json#L8)

### Seed script populates datastore

- [Follow instructions on <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvM8_0u5jqs7UY57Q-QgKtr6DCwIpXBLg1OvH2TFdghpyYqhdH&s" width="15" alt="GraphQL Icon"> GraphQL API and it will seed 25 clients into the <img src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_docker-512.png" width="20" alt="Docker Icon"> Docker container. You will see mutations and CRUD operation in the GraphQL Playground, and you will see all 25 clients successfully added in the <img src="https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png" width="10" alt="Prisma Icon"> Prisma Studio](https://github.com/krymarie/GraphQL-API-Node-Server)

### RESTful server CREATES, READS, UPDATES, and DELETES

- [CREATE](https://github.com/krymarie/Final-FullStack-API/blob/master/controllers/feed.js#L19)
- [READ](https://github.com/krymarie/Final-FullStack-API/blob/master/controllers/feed.js#L1)
- [UPDATE](https://github.com/krymarie/Final-FullStack-API/blob/master/controllers/feed.js#L39)
- [DELETE](https://github.com/krymarie/Final-FullStack-API/blob/master/controllers/feed.js#L81)

### GraphQL server CREATES, READS, UPDATES, and DELETES

- [CREATE](https://github.com/krymarie/GraphQL-API-Node-Server/blob/master/controllers/feed.js#L34)
- [READ](https://github.com/krymarie/GraphQL-API-Node-Server/blob/master/controllers/feed.js#L10)
- [UPDATE](https://github.com/krymarie/GraphQL-API-Node-Server/blob/master/controllers/feed.js#L95)
- [DELETE](https://github.com/krymarie/GraphQL-API-Node-Server/blob/master/controllers/feed.js#L143)

### App connects client and server using HTTP/HTTPS

- [Front-end connected via HTTP/HTTPS](https://github.com/krymarie/Final-FullStack-FrontEnd/blob/master/src/App.js#L65)

### App structured, documented, and deployed without errors.

- All three branches are documented and deploy without any deployment errors

- [RESTful API README](https://github.com/krymarie/Final-FullStack-API/blob/master/README.md)
- [GraphQL API README](https://github.com/krymarie/GraphQL-API-Node-Server/blob/master/README.md)
- [Front-end README](https://github.com/krymarie/Final-FullStack-FrontEnd/blob/master/README.md)
