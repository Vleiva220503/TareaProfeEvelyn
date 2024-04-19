import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60 h-screen flex items-center justify-center">
            <div className="max-w-md text-center">
                <h1 className="mb-5 text-2xl leading-tight md:text-4xl md:mb-10">Entre los dispositivos de Interconexión de Redes <br />
                    <TypeAnimation
                        sequence={[
                            'tenemos: routers',
                            1000,
                            'tenemos: switches',
                            1000,
                            'tenemos: hubs',
                            1000,
                            'tenemos: gateways',
                            1000,
                            'tenemos: modems',
                            1000,
                            'tenemos: bridges',
                            1000,
                            'tenemos: access points',
                            1000,
                            'tenemos: repeaters',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-secondary"
                    />
                </h1>

                <p className="mx-auto mb-8 text-xl md:text-xl">
                    Los dispositivos de interconexión de redes son componentes fundamentales en la infraestructura de las redes de computadoras. Estos dispositivos permiten la comunicación y el intercambio de datos entre diferentes dispositivos conectados a una red. Algunos de los dispositivos más comunes incluyen routers, switches, hubs, gateways, modems, firewalls, bridges, access points y repeater
                </p>
            </div>
        </div>
    );
}

export default Introduction;
