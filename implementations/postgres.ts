import { Pool, PoolConfig } from "pg"
import { IDatabase } from "../components/database"

export function createPostgresDb(dbSettings: PoolConfig): IDatabase {
  const pool = new Pool(dbSettings)

  return {
    async query(sql) {
      const client = await pool.connect()

      try {
        return client.query(sql)
      } finally {
        client.release()
      }
    },
  }
}
