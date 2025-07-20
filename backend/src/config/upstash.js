import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";
dotenv.config();

const redis = Redis.fromEnv(); // use your environment variables for config

// allows 10 requests every 10 seconds (sliding window)
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, "60s"), 
});

export default ratelimit;
