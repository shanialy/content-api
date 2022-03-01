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
<<<<<<< HEAD
    url
});


=======
  url,
});

>>>>>>> f1d230f152924e8201a1cbeb0c15d4aa3890422e
// redisClient.connect();

const esRedisExpireTime = 3600;

export default client;
<<<<<<< HEAD
export {
    esRedisGlobalKey,
    esRedisExpireTime
};


=======
export { esRedisGlobalKey, esRedisExpireTime };
>>>>>>> f1d230f152924e8201a1cbeb0c15d4aa3890422e
