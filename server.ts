import app from "./app";
import { connection } from "./config/dbConnection";

const port:number = 3001;

connection();
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
