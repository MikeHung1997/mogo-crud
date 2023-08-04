import { Collection, Db, MongoClient, Document } from "mongodb";
export declare class MongoCRUD {
    client: MongoClient;
    database: Db;
    collection: Collection<Document>;
    constructor(url: string, databaseName: string, collectionName: string);
    deleteDocument(id: string): Promise<boolean>;
    updateDocument(id: string, update: Document): Promise<import("mongodb").UpdateResult<Document>>;
    findDocument(id: string): Promise<import("mongodb").WithId<Document> | null>;
    findDocuments(filter: Document): Promise<import("mongodb").WithId<Document>[]>;
}
