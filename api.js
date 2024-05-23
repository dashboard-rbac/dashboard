const BASE_URL = 'https://2517l.wiremockapi.cloud'

//PATHs
const GROUPS_AND_USERS_EVOLUTION_PATH = '/groups-and-users-evolution'
const POSTS_BY_KNOWLEDGE_AREA_PATH = '/posts-by-knowledge-area'
const USERS_ACTIVITY_PATH = '/users-activity'
const TOP_5_USERS_PATH = '/top5-users'
const GROUPS_PATH = '/groups'
const USERS_COUNT_BY_STATE_PATH = '/users-count-by-state'

//API URLs, these are the endpoints routes
// const GROUPS_AND_USERS_EVOLUTION_URL = BASE_URL + GROUPS_AND_USERS_EVOLUTION_PATH
// const POSTS_BY_KNOWLEDGE_AREA_URL = BASE_URL + POSTS_BY_KNOWLEDGE_AREA_PATH
// const USERS_ACTIVITY_URL = BASE_URL + USERS_ACTIVITY_PATH 
// const TOP_5_USERS_URL = BASE_URL + TOP_5_USERS_PATH
// const GROUPS_URL = BASE_URL + GROUPS_PATH
// const USERS_COUNT_BY_STATE_URL = BASE_URL + USERS_COUNT_BY_STATE_PATH

//MOCK URLs, these are the static files in this project
const GROUPS_AND_USERS_EVOLUTION_URL = "./api-mocked-responses/groups-and-users-evolution.json"
const POSTS_BY_KNOWLEDGE_AREA_URL = "./api-mocked-responses/posts-by-knowledge-area.json"
const USERS_ACTIVITY_URL = "./api-mocked-responses/users-activity.json"
const TOP_5_USERS_URL = "./api-mocked-responses/top-5-users.json"
const GROUPS_URL = "./api-mocked-responses/groups.json"
const USERS_COUNT_BY_STATE_URL = "./api-mocked-responses/users-count-by-state.json"

async function getGroupsAndUsersEvolution(queryParams = "") {
    const response = await fetch(GROUPS_AND_USERS_EVOLUTION_URL + queryParams);
    const data = await response.json();
    return data;
}

async function getPostsByKnowledgeArea(queryParams = "") {
    const response = await fetch(POSTS_BY_KNOWLEDGE_AREA_URL + queryParams);
    const data = await response.json();
    return data;
}

async function getUsersActivity(queryParams = "") {
    const response = await fetch(USERS_ACTIVITY_URL + queryParams);
    const data = await response.json();
    return data;
}

async function getGroups(queryParams = "") {
    const response = await fetch(GROUPS_URL + queryParams);
    const data = await response.json();
    return data;
}

async function getUsersCountByState(queryParams = "") {
    const response = await fetch(USERS_COUNT_BY_STATE_URL + queryParams);
    const data = await response.json();
    return data;
}

async function getTop5Evolution(queryParams = "") {
    const response = await fetch(TOP_5_USERS_URL + queryParams);
    const data = await response.json();
    return data;
}
