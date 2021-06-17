import { CommandContribution } from "@theia/core";
import { ContainerModule } from "inversify";
import { MyService, MyServicePath } from "../common/protocol";
import { MyserviceCommandContribution } from "./extension.contribution";
import {WebSocketConnectionProvider} from '@theia/core/lib/browser'
export default new ContainerModule(bind => {
	//register new widget (literally sidebar button)
	// bind(FrontendApplicationContribution).toService(MyserviceCommandContribution)
	bind(CommandContribution).to(MyserviceCommandContribution).inSingletonScope()
	bind(MyService).toDynamicValue(ctx => {
		const Connection = ctx.container.get(WebSocketConnectionProvider)
		return Connection.createProxy<MyService>(MyServicePath)
		}).inSingletonScope()
})