const http = require("http");
const { faker, fakerPT_BR } = require("@faker-js/faker");

const GROUPS_AND_USERS_EVOLUTION_PATH = "/groups-and-users-evolution";
const POSTS_BY_KNOWLEDGE_AREA_PATH = "/posts-by-knowledge-area";
const USERS_ACTIVITY_PATH = "/users-activity";
const TOP_5_USERS_PATH = "/top5-users";
const GROUPS_PATH = "/groups";
const USERS_COUNT_BY_STATE_PATH = "/users-count-by-state";

const handleRequest = (request, response) => {
  response.setHeader("Content-Type", "application/json");

  switch (request.url) {
    case GROUPS_AND_USERS_EVOLUTION_PATH:
      response.end(JSON.stringify({ message: "Evo Grupos e usuários" }));
      break;
    case POSTS_BY_KNOWLEDGE_AREA_PATH:
      response.end(
        JSON.stringify({ message: "Postagens por área de conhecimento" })
      );
      break;
    case USERS_ACTIVITY_PATH:
      response.end(JSON.stringify({ message: "Atividade dos usuários" }));
      break;
    case TOP_5_USERS_PATH:
      response.end(
        JSON.stringify({
          name: fakerPT_BR.person.firstName(),
          area: fakerPT_BR.person.jobArea(),
          occupation: fakerPT_BR.person.jobTitle(),
          city: fakerPT_BR.location.city(),
          state: fakerPT_BR.location.state(),
          country: fakerPT_BR.location.country(),
          group: "Núcleo Região Metropolitana de Campinas - RMC",
        })
      );
      break;
    case GROUPS_PATH:
      response.end(JSON.stringify({ message: "Grupos" }));
      break;
    case USERS_COUNT_BY_STATE_PATH:
      response.end(
        JSON.stringify({ message: "Contagem de usuários por estado" })
      );
      break;
    default:
      response.statusCode = 404;
      response.end(JSON.stringify({ error: "404 Page not found" }));
  }
};

const server = http.createServer(handleRequest);

const port = 8000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
