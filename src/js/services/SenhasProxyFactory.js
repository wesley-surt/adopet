class SenhasProxyFactory{

    static create(objeto, ...propsOcultas){
        return new Proxy(objeto, {
            
            get(target, prop, receiver){
                
                if(typeof(target[prop]) === typeof(Function)){
                    return function(){
                        Reflect.apply(target[prop], target, arguments);
                    }
                }
                else if (propsOcultas.includes(prop)){
                    throw new Error('Esta propriedade não pode ser visualizada por questões de segurança!');
                }
                return Reflect.get(target, prop, receiver);
            }
        })
    }
}
