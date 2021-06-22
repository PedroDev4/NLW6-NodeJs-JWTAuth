import { createConnection } from "typeorm";

const connectToDB = async () => {

    const connection = await createConnection();

    console.log(`App Connected on Database: ${connection.options.database}`);

}
export { connectToDB };