import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
import { Workspaces } from '../../entities/Workspaces';
import { Channels } from '../../entities/Channels';

export class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Workspaces)
      .values([{ id: 1, name: 'Sleact', url: 'sleact' }]);
    await connection
      .createQueryBuilder()
      .insert()
      .into(Channels)
      .values([{ id: 1, name: '일반', WorkspaceId: 1, private: false }]);
  }
}
