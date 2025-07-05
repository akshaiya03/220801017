import axios from "axios";

const AUTH_URL = "http://20.244.56.144/evaluation-service/auth";

export const credentials = {
  clientID: "8e576cc4-1a73-465b-8135-d21b8656d84d",
  clientSecret: "NDZnuEzNmAkEChPE",
};

// Use this if you want to fetch dynamically
export async function getAuthToken() {
  try {
    const res = await axios.post(AUTH_URL, credentials);
    return res.data.token;
  } catch (err) {
    console.error("Auth failed:", err.message);
    return null;
  }
}

// Or export directly if using hardcoded token
export const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJha3NoYWl5YTA0QGdtYWlsLmNvbSIsImV4cCI6MTc1MTY5NTI2OCwiaWF0IjoxNzUxNjk0MzY4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiN2MwZmIyMzYtM2RkYy00ZjBiLWI5YjEtNGNkMzE1ZmUwNWFkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYWtzaGFpeWEiLCJzdWIiOiI4ZTU3NmNjNC0xYTczLTQ2NWItODEzNS1kMjFiODY1NmQ4NGQifSwiZW1haWwiOiJha3NoYWl5YTA0QGdtYWlsLmNvbSIsIm5hbWUiOiJha3NoYWl5YSIsInJvbGxObyI6IjIyMDgwMTAxNyIsImFjY2Vzc0NvZGUiOiJjV3lhWFciLCJjbGllbnRJRCI6IjhlNTc2Y2M0LTFhNzMtNDY1Yi04MTM1LWQyMWI4NjU2ZDg0ZCIsImNsaWVudFNlY3JldCI6Ik5EWm51RXpObUFrRUNoUEUifQ.kZJuLeZbmY4mMeMIJTEDbFc_hwf6D4BhGydDKscwtOI";
