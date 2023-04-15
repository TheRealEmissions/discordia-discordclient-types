import BaseApp from "./BaseApp.js";
declare class App extends BaseApp {
    events: any[];
    constructor();
    init(): Promise<void>;
    private initUnsharded;
    private initSharded;
    private initOnShard;
    private initModule;
    private ensureDependency;
    private loadFolders;
    private loadHeadFiles;
    private importEvents;
    private pushEvent;
    login(): Promise<void>;
}
export default App;
