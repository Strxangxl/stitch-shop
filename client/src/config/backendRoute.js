import axios from "axios";

const axiosUrl = axios.create({
  baseURL: "https://stitch-shop-server.onrender.com/",
  timeout: 5000,
});

axiosUrl.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!error.response || error.response.status === 404 || error.code === 'ECONNABORTED') {
      console.warn("Backend slow/down. Switching to local mock data.");

      const url = error.config.url;
      const method = error.config.method;

      try {
        // --- 1. REGISTRATION FALLBACK ---
        if (url.includes("/api/users") && method === "post" && !url.includes("/login")) {
          const { name, email } = JSON.parse(error.config.data);

          console.log("Demo Mode: Registration Successful");
          // Return the new user object to simulate a successful DB write
          return {
            data: {
              _id: Date.now().toString(), // Generate a temporary ID
              name,
              email,
              isAdmin: false,
              token: "mock_jwt_token_for_interview_demo"
            }
          };
        }

        // --- 2. LOGIN FALLBACK ---
        if (url.includes("/api/users/login")) {
          const { email } = JSON.parse(error.config.data);
          const res = await fetch("/data/users.json");
          const users = await res.json();
          const user = users.find((u) => u.email === email);

          if (user) {
            return { data: user };
          } else {
            return Promise.reject({
              response: { data: { message: "Invalid email or password" } }
            });
          }
        }

        // --- 3. PRODUCT FALLBACK ---
        const res = await fetch("/data/products.json");
        const localData = await res.json();

        if (url.includes("/api/products/") && url !== "/api/products") {
          const id = url.split("/").pop();
          const product = localData.find((p) => String(p._id) === String(id));
          return { data: product || {} };
        }

        return { data: localData };

      } catch (err) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosUrl;