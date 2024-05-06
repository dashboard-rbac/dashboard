const BASE_URL = 'https://2517l.wiremockapi.cloud'

//PATHs
const GROUPS_EVOLUTION_PATH = '/groups-evolution'
const POSTS_BY_KNOWLEDGE_AREA_PATH = '/posts-by-knowledge-area'
const USERS_ACTIVITY_PATH = '/users-activity'
const USERS_BY_CITIES_PATH = '/users-by-city'
const USERS_EVOLUTION_PATH = '/users-evolution'
const TOP_5_USERS_PATH = '/top5-users'

//URLs, these are the endpoints routes
const GROUPS_EVOLUTION_URL = BASE_URL + GROUPS_EVOLUTION_PATH
const POSTS_BY_KNOWLEDGE_AREA_URL = BASE_URL + POSTS_BY_KNOWLEDGE_AREA_PATH
const USERS_ACTIVITY_URL = BASE_URL + USERS_ACTIVITY_PATH 
const USERS_BY_CITIES_URL = BASE_URL + USERS_BY_CITIES_PATH
const USERS_EVOLUTION_URL = BASE_URL + USERS_EVOLUTION_PATH
const TOP_5_EVOLUTION_URL = BASE_URL + TOP_5_USERS_PATH

async function getGroupsEvolution() {
    const response = await fetch(GROUPS_EVOLUTION_URL);
    const data = await response.json();
    return data;
}

async function getPostsByKnowledgeArea() {
    const response = await fetch(POSTS_BY_KNOWLEDGE_AREA_URL);
    const data = await response.json();
    return data;
}

async function getUsersActivity() {
    const response = await fetch(USERS_ACTIVITY_URL);
    const data = await response.json();
    return data;
}

async function getUsersByCity() {
    const response = await fetch(USERS_BY_CITIES_URL);
    const data = await response.json();
    return data;
}

async function getUsersEvolution() {
    const response = await fetch(USERS_EVOLUTION_URL);
    const data = await response.json();
    return data;
}

async function getTop5Evolution() {
    const response = await fetch(TOP_5_EVOLUTION_URL);
    const data = await response.json();
    return data;
}
