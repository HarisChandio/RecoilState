import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const notifications = {
  messaging: 12,
  networks: 13,
  jobs: 43,
  notifications: 14
};

app.get("/notifications", (req, res) => {
  return res.json(notifications);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
