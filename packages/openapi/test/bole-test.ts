import fse from 'fs-extra';
import { generateService } from '../src';

const serversFolder = './services';

if (!fse.existsSync(serversFolder)) {
  fse.mkdirSync(serversFolder);
}

generateService({
  requestLibPath: "import { request } from '@/utils/request'",
  schemaPath: 'http://localhost:57190/swagger/v1/swagger.json',
  serversPath: './services',
  mockFolder: '',
});
