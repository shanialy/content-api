// import redis from "redis"
// const redisPort = process.env.REDIS_PORT || 6379;
// const client = redis.createClient(redisPort);
// const esRedisGlobalKey = "ES_Global";
// const esRedisExpireTime = 3600;

// export default client;
// export {
//     esRedisGlobalKey,
//     esRedisExpireTime
// };
import redis from "redis";
const redisPort = process.env.REDIS_PORT || 6379;

const esRedisGlobalKey = "ES_Global";

const url = `redis://43.251.253.107:1500`;

const client = redis.createClient({
  url,
});

// redisClient.connect();

const esRedisExpireTime = 3600;

export default client;
export { esRedisGlobalKey, esRedisExpireTime };
