import BaseApp from "./BaseApp.js";
declare class App extends BaseApp {
    events: any[];
    constructor();
    init(): Promise<void>;
    importEvents(): Promise<void>;
    login(): Promise<void>;
}
export default App;
