import { ContainerModule } from "inversify";
import { ConnectionHandler,JsonRpcConnectionHandler } from "@theia/core";
import { MyService ,MyServicePath} from "../common/protocol";
import { MyserviceBackend } from "./serviceBackend";


export default new ContainerModule(bind => {
	bind(MyserviceBackend).toSelf()
	bind(MyService).toService(MyserviceBackend)
	bind(ConnectionHandler).toDynamicValue(ctx => new JsonRpcConnectionHandler(MyServicePath,() => ctx.container.get<MyService>(MyService))).inSingletonScope()
})