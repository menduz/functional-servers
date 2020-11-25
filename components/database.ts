export interface IDatabase {
  query<T>(sql: string): Promise<IDatabase.IQueryResult<T>>
}

export namespace IDatabase {
  export interface IQueryResult<T extends Record<string, any>> {
    rows: T[]
    rowCount: number
  }
}
