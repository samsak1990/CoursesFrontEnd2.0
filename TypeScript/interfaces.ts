let msg: 'Hello' = 'Hello' 

const port3000: number = 3000
const port443: number = 443

// type Config = {
//     protocol: 'http' | 'https',
//     port: 3000 | 443
// }

interface IConfig {
    protocol: 'http' | 'https',
    port: 3000 | 443,
    log: (msg: string) => void
}

interface IRole{
    role: string
}

interface IConfigRole extends IConfig, IRole {
    date: Date
    id: number | string
}

const serverConf: IConfigRole = { 
    protocol: 'https',
    port: 443,
    role: 'admin',
    date: new Date(),
    id: 45587845,
    log: (msg: string): void => console.log(`Log function: ${msg}`) 
}

type StartFunction = (protocol: 'http' | 'https', port: 3000 | 443, log: (msg: string)=>void) => string

const startServer: StartFunction  = (
    protocol: 'http' | 'https', 
    port: 3000 | 443,
    log: (msg: string)=>void
    ): 'Server started' | "Server didn't start" => {
        if(port === port3000 || port === port443){
            log(`Server started on ${protocol}://server:${port}`)
            return  'Server started'
        } else{
            console.error('Invalid port')
            return "Server didn't start"
        }
        
    }

startServer(serverConf.protocol, serverConf.port, serverConf.log)


interface IStyles {
    [key: string]: string
}

const styles: IStyles = {
    position: 'absolute',
    top: '20px',
    left: '50px'
}
 

export{}