import elasticsearch from "elasticsearch";

// Core ES variables for this project
export const index = "content_system_v1";
const type = "_doc";

// const host = "http://43.251.253.107:1200";


const host = "https://s0oskhnou6:l7y6497d4v@contentgizmo-9661164665.us-east-1.bonsaisearch.net:443";

export const client = new elasticsearch.Client({
  host: host,
});

/** Check the ES connection status */
export const checkConnection = async () => {
  let isConnected = false;
  while (!isConnected) {
    console.log("Connecting to ES");
    try {
      const health = await client.cluster.health({});
      return health;
      console.log(health);
      isConnected = true;
    } catch (err) {
      console.log("Connection Failed, Retrying...", err);
    }
  }
};
