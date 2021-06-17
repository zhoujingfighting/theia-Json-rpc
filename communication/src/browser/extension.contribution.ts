import { inject,injectable } from "inversify";
import { CommandContribution ,CommandRegistry,MessageService,Command} from "@theia/core";

import { MyService } from "../common/protocol"
export const MyExtensionCommand:Command = {
	id:"MyExtension.command",
	label:"my extension"
}

@injectable()
export class MyserviceCommandContribution implements CommandContribution {
	constructor(
		@inject(MyService) protected readonly myServiceBackend: MyService,
		@inject(MessageService) protected readonly messageService: MessageService
	){}
	registerCommands(registry:CommandRegistry):void{
		registry.registerCommand(MyExtensionCommand,{
			execute:() => {
				// await this.messageService.info('setting')
				//下面这个setting没回来
				//前端拿不到后端的东西
				console.log("start")
				debugger
				this.myServiceBackend.getNameString("world")
				.then( res => {console.log(res)})
				.catch(err => {throw new Error("cuowu")})
			}
		})
	}
} 