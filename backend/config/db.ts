import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  database: "../good_corner.sqlite",
  entities: ["src/Entities/*.ts"],
  synchronize: true,
});

export default dataSource;