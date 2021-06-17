/**
 * Generated using theia-extension-generator
 */
import { LabelProviderContribution} from "@theia/core/lib/browser";
import { CommandContribution} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";
import { TheiaExtLabelProviderContribution,TheiaExtensionCommandContribution } from './theia-ext-contribution';
import '../../src/browser/style/example.css';

export default new ContainerModule(bind => {
    bind(LabelProviderContribution).to(TheiaExtLabelProviderContribution);
    bind(CommandContribution).to(TheiaExtensionCommandContribution);
});
