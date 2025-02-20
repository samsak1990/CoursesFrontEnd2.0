interface BasicConfig {
    protocol: string;
    port: number;
}

const serverNewConfig: BasicConfig = {
    protocol: "http",
    port: 3001,
};

const backupConfig: BasicConfig = {
    protocol: "http",
    port: 3000,
};

const startNewServer = (config: BasicConfig): "Server started" => {
    console.log(`Server started on ${config.protocol}://server:${config.port}`);
    return "Server started";
};

startNewServer