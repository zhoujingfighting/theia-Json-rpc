import { injectable } from "inversify";
import { MyService } from '../common/protocol'

@injectable()
export class MyserviceBackend implements MyService {
	getNameString(name:string):Promise<string>{
		return new Promise<string>(resolve => resolve('Hello' + name))
	}
}