import { FileStatNode } from "@theia/filesystem/lib/browser/file-tree/file-tree";
import { FileTreeLabelProvider } from "@theia/filesystem/lib/browser/file-tree/file-tree-label-provider";
import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MessageService  } from "@theia/core/lib/common";
/**
 * 这个是创建的文件前面的符号表示
 */
@injectable()
export class TheiaExtLabelProviderContribution extends FileTreeLabelProvider {
    
    canHandle(element: object): number {
        if (FileStatNode.is(element)) {
            let uri = element.uri;
            if (uri.path.ext === '.my') {
                return super.canHandle(element)+1;
            }
        }
        return 0;
    }

    getIcon(): string {
        return 'fa fa-star-o';
    }

    getName(fileStatNode: FileStatNode): string {
        return super.getName(fileStatNode) + ' (with my label)';
    }
}
export const TheiaExtensionCommand = {
    id:"HelloWorld.extension",
    label:"zhoujing"
}
@injectable()
export class TheiaExtensionCommandContribution implements CommandContribution {
    constructor(
         @inject(MessageService) private readonly messageservice:MessageService
    ){}
    registerCommands(registry:CommandRegistry): void{
        registry.registerCommand(TheiaExtensionCommand ,{
            execute:() => this.messageservice.info('大笨猪')
        })
    }
}