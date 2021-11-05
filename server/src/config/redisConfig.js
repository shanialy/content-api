import redis from "redis"
const redisPort = process.env.REDIS_PORT || 6379;
const client = redis.createClient(redisPort);
export default client;