let msg: 'Hello' = 'Hello' 

const port3000: number = 3000
const port443: number = 443

const serverConf: {
    protocol: 'http' | 'https',
    port: 3000 | 443
} = {
    protocol: 'https',
    port: 443
}

const startServer: (protocol: 'http' | 'https', port: 3000 | 443) => string = (
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

