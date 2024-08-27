const app = require("./src/app");
const config = require("./src/config/config")
const connectdb = require("./src/config/db");

const startServer = async () => {
    try {
        await connectdb(); // Ensure database connection is successful

        const port = config.port || 3000;
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

startServer();
