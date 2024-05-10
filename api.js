const BASE_URL = 'https://2517l.wiremockapi.cloud'

//PATHs
const GROUPS_AND_USERS_EVOLUTION_PATH = '/groups-and-users-evolution'
const POSTS_BY_KNOWLEDGE_AREA_PATH = '/posts-by-knowledge-area'
const USERS_ACTIVITY_PATH = '/users-activity'
const TOP_5_USERS_PATH = '/top5-users'
const GROUPS_PATH = '/groups'
const USERS_COUNT_BY_STATE_PATH = '/users-count-by-state'

//URLs, these are the endpoints routes
const GROUPS_AND_USERS_EVOLUTION_URL = BASE_URL + GROUPS_AND_USERS_EVOLUTION_PATH
const POSTS_BY_KNOWLEDGE_AREA_URL = BASE_URL + POSTS_BY_KNOWLEDGE_AREA_PATH
const USERS_ACTIVITY_URL = BASE_URL + USERS_ACTIVITY_PATH 
const TOP_5_USERS_URL = BASE_URL + TOP_5_USERS_PATH
const GROUPS_URL = BASE_URL + GROUPS_PATH
const USERS_COUNT_BY_STATE_URL = BASE_URL + USERS_COUNT_BY_STATE_PATH

async function getGroupsAndUsersEvolution() {
    const response = await fetch(GROUPS_AND_USERS_EVOLUTION_URL);
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

async function getGroups() {
    const response = await fetch(GROUPS_URL);
    const data = await response.json();
    return data;
}

async function getUsersCountByState() {
    const response = await fetch(USERS_COUNT_BY_STATE_URL);
    const data = await response.json();
    return data;
}

async function getTop5Evolution() {
    const response = await fetch(TOP_5_USERS_URL);
    const data = await response.json();
    return data;
}
