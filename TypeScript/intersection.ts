let msg: 'Hello' = 'Hello' 

const port3000: number = 3000
const port443: number = 443

type Config = {
    protocol: 'http' | 'https',
    port: 3000 | 443
}

type Role = {
    role: string
}

type Config_Role = Config & Role

type StartFunction = (protocol: 'http' | 'https', port: 3000 | 443) => string

const serverConf: Config_Role = {
    protocol: 'https',
    port: 443,
    role: 'admin'
}

const backupConfig: Config_Role = {
    protocol: 'https',
    port: 443,
    role: 'user'
}

const startServer: StartFunction  = (
    protocol: 'http' | 'https', 
    port: 3000 | 443): 'Server started' | "Server didn't start" => {
    if(port === port3000 || port === port443){
        console.log(`Server started on ${protocol}://server:${port}`)
        return  'Server started'
    } else{
        console.error('Invalid port')
        return "Server didn't start"
    }
    
}

startServer(serverConf.protocol, serverConf.port)

type AnimationTimingFunction = 'ease'|'ease-out'|'ease-in'
type ID = string | number

function createAnimation(
    id: ID, 
    animName: string, 
    timingFn: AnimationTimingFunction = 'ease',
    duration: number,
    iterCount: 'infinite' | number
):void{
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    // if(elem){
        console.log(`${animName} ${timingFn} ${duration} ${iterCount}`)
        // elem.style.animation = `${animName} ${timingFn} ${duration} ${iterCount}`
    // }
    
}

createAnimation('anim', 'Around', 'ease', 1, 'infinite')

export{}