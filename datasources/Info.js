import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Infos extends MongoDataSource {
  async getInfos() {
    return await this.model.find();
  }

  async getInfo(id) {
    return await this.findOneById(id);
  }

  async createInfo({ Country,Year,Total_population,Area }) {
    return await this.model.create({ Country,Year,Total_population,Area });
  }
}