const BASE_URL = 'https://2517l.wiremockapi.cloud'

//PATHs
const GROUPS_EVOLUTION_PATH = '/groups-evolution'
const POSTS_BY_KNOWLEDGE_AREA_PATH = '/posts-by-knowledge-area'
const LIST_CITIES_PATH = '/list-cities'
const USERS_ACTIVITY_PATH = '/users-activity'
const USERS_BY_CITIES_PATH = '/users-by-city'
const USERS_EVOLUTION_PATH = '/users-evolution'
const TOP_5_EVOLUTION_PATH = '/top5-users'

//URLs, these are the endpoints routes
const LIST_CITIES_URL = BASE_URL + LIST_CITIES_PATH
const GROUPS_EVOLUTION_URL = BASE_URL + GROUPS_EVOLUTION_PATH
const POSTS_BY_KNOWLEDGE_AREA_URL = BASE_URL + POSTS_BY_KNOWLEDGE_AREA_PATH
const USERS_ACTIVITY_URL = BASE_URL + USERS_ACTIVITY_PATH
const USERS_BY_CITIES_URL = BASE_URL + USERS_BY_CITIES_PATH
const USERS_EVOLUTION_URL = BASE_URL + USERS_EVOLUTION_PATH
const TOP_5_EVOLUTION_URL = BASE_URL + TOP_5_EVOLUTION_PATH

async function listCities() {
    const response = await fetch(LIST_CITIES_URL);
    const cities = await response.json();
    return cities;
}

async function groupsEvolution() {
    const response = await fetch(GROUPS_EVOLUTION_URL);
    const data = await response.json();
    return data;
}

async function postsByKnowledgeArea() {
    const response = await fetch(POSTS_BY_KNOWLEDGE_AREA_URL);
    const data = await response.json();
    return data;
}

async function usersActivity() {
    const response = await fetch(USERS_ACTIVITY_URL);
    const data = await response.json();
    return data;
}

async function usersByCity() {
    const response = await fetch(USERS_BY_CITIES_URL);
    const data = await response.json();
    return data;
}

async function usersEvolution() {
    const response = await fetch(USERS_EVOLUTION_URL);
    const data = await response.json();
    return data;
}

async function top5Evolution() {
    const response = await fetch(TOP_5_EVOLUTION_URL);
    const data = await response.json();
    return data;
}
