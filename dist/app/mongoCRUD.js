import { MongoClient, ObjectId } from "mongodb";
export class MongoCRUD {
    /* 建立連線 */
    constructor(url, databaseName, collectionName) {
        this.client = new MongoClient(url);
        this.database = this.client.db(databaseName);
        this.collection = this.database.collection(collectionName);
    }
    /*  新增資料
    async insertDocument(document: Document) {
      try {
        const result = await this.collection.insertOne(document);
        return result;
      } finally {
        await this.client.close();
      }
    } */
    /* 刪除資料 */
    async deleteDocument(id) {
        try {
            const result = await this.collection.deleteOne({
                _id: new ObjectId(id),
            });
            return result.deletedCount > 0;
        }
        finally {
            await this.client.close();
        }
    }
    /* 更新資料 */
    async updateDocument(id, update) {
        try {
            const result = await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: update });
            return result;
        }
        finally {
            await this.client.close();
        }
    }
    /* 查詢資料 */
    async findDocument(id) {
        try {
            const cursor = await this.collection.findOne({
                _id: new ObjectId(id),
            });
            return cursor;
        }
        finally {
            await this.client.close();
        }
    }
    //查詢多筆資料
    //toArray在巨量資料時會對伺服器造成負擔，需改成for loop
    async findDocuments(filter) {
        try {
            const cursor = await this.collection.find(filter).toArray();
            return cursor;
        }
        finally {
            await this.client.close();
        }
    }
}
//# sourceMappingURL=mongoCRUD.js.map