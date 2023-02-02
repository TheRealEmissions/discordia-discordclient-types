import BaseApp from "./BaseApp.js";
declare class App extends BaseApp {
    events: any[];
    constructor();
    init(): Promise<void>;
    private initModule;
    private ensureDependency;
    private loadFolders;
    private loadHeadFiles;
    private importEvents;
    pushEvent(name: string): Promise<void>;
    login(): Promise<void>;
}
export default App;
