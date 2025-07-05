import axios from "axios";
import { TOKEN } from "./authService"; // or hardcode the token here
import { validStacks, validLevels, validPackages } from "./constants";

const LOGGING_API = "http://20.244.56.144/evaluation-service/logs";

export async function Log(stack, level, pkg, message) {
  if (
    !validStacks.includes(stack) ||
    !validLevels.includes(level) ||
    !validPackages.includes(pkg)
  ) {
    console.error("❌ Invalid log input");
    return;
  }

  try {
    const res = await axios.post(
      LOGGING_API,
      { stack, level, package: pkg, message },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("✅ Log ID:", res.data.logID);
  } catch (err) {
    console.error("❌ Logging failed:", err.message);
  }
}
