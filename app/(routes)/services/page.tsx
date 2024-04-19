import SliderServices from "@/components/slider-services";
import SliderServices2 from "@/components/silder-services2";
import SliderServices3 from "@/components/silder-services3";
import SliderServices4 from "@/components/silder-services4";
import SliderServices5 from "@/components/silder-services5";
import SliderServices6 from "@/components/silder-services6";
import SliderServices7 from "@/components/silder-services7";
import SliderServices8 from "@/components/silder-services8";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2" style={{marginTop: "80px"}}>
                <div className="max-w-[450px] flex flex-col items-center md:items-start">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5"> <span className="font-bold text-secondary">Routers.</span></h1>
                    <p className="mb-3 text-xl text-gray-300 text-center md:text-left">Los routers son dispositivos que dirigen el tráfico de datos entre redes o subredes. Funcionan en la capa de red del modelo OSI y toman decisiones basadas en direcciones IP para enviar datos al destino correcto. También realizan funciones como NAT, filtrado de paquetes y seguridad de red.</p>
                </div>
                {/* SLIDER */}
                <div style={{marginTop: "20px"}}>
                    <SliderServices />
                </div>
            </div>
            <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2" style={{marginTop: "50px"}}>
                <div className="max-w-[450px] flex flex-col items-center md:items-start">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5"> <span className="font-bold text-secondary">Switches.</span></h1>
                    <p className="mb-3 text-xl text-gray-300 text-center md:text-left">Los switches conectan dispositivos dentro de una red local y facilitan la comunicación entre ellos. Trabajan en la capa de enlace de datos, usando direcciones MAC para dirigir el tráfico. A diferencia de los routers, los switches no toman decisiones de enrutamiento, simplemente envían datos a los dispositivos correctos según su dirección MAC. Son esenciales para redes locales eficientes y conexiones rápidas entre dispositivos.</p>
                </div>
                {/* SLIDER */}
                <div>
                    <SliderServices2 />
                </div>
            </div>
            <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2" style={{marginTop: "50px"}}>
                <div className="max-w-[450px] flex flex-col items-center md:items-start">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5"> <span className="font-bold text-secondary">Hubs.</span></h1>
                    <p className="mb-3 text-xl text-gray-300 text-center md:text-left">Los hubs son dispositivos básicos de interconexión de redes que funcionan en la capa física del modelo OSI. Actúan como puntos de conexión centralizados para dispositivos en una red local, facilitando la comunicación al transmitir los datos recibidos a todos los dispositivos conectados. Sin embargo, carecen de la capacidad de tomar decisiones inteligentes sobre la dirección de los datos y pueden causar congestión en la red al transmitir indiscriminadamente todos los datos a todos los dispositivos.</p>
                </div>
                {/* SLIDER */}
                <div>
                    <SliderServices3 />
                </div>
            </div>

            <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2" style={{marginTop: "50px"}}>
                <div className="max-w-[450px] flex flex-col items-center md:items-start">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5"> <span className="font-bold text-secondary">Gateways.</span></h1>
                    <p className="mb-3 text-xl text-gray-300 text-center md:text-left">Los Gateways son dispositivos que actúan como puntos de entrada o salida entre dos redes diferentes. Sirven como intermediarios para facilitar la comunicación entre redes que utilizan diferentes protocolos o tecnologías. Además de traducir entre diferentes formatos de datos, los Gateways también pueden proporcionar funciones de seguridad y gestión del tráfico. Son fundamentales para la interoperabilidad entre redes y para conectar redes locales con internet u otras redes externa</p>
                </div>
                {/* SLIDER */}
                <div>
                    <SliderServices4 />
                </div>
            </div>

            <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2" style={{marginTop: "50px"}}>
                <div className="max-w-[450px] flex flex-col items-center md:items-start">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5"> <span className="font-bold text-secondary">Modems.</span></h1>
                    <p className="mb-3 text-xl text-gray-300 text-center md:text-left">Los modems son dispositivos que convierten las señales digitales de una computadora en señales analógicas para ser transmitidas a través de líneas de telecomunicaciones, como líneas telefónicas o cables coaxiales. También realizan la función opuesta, convirtiendo las señales analógicas recibidas en señales digitales interpretables por la computadora. Los modems son fundamentales para la conexión a Internet a través de tecnologías como DSL, cable módem o fibra óptica, permitiendo la comunicación de datos entre dispositivos y redes</p>
                </div>
                {/* SLIDER */}
                <div>
                    <SliderServices5 />
                </div>
            </div>

            
            <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2" style={{marginTop: "50px"}}>
                <div className="max-w-[450px] flex flex-col items-center md:items-start">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5"> <span className="font-bold text-secondary">Bridges.</span></h1>
                    <p className="mb-3 text-xl text-gray-300 text-center md:text-left">Un bridge es un dispositivo de red que opera en la capa de enlace de datos del modelo OSI y se utiliza para interconectar dos o más segmentos de red que utilizan el mismo protocolo de comunicación. Su función principal es filtrar y reenviar tramas de datos basándose en las direcciones MAC de origen y destino. Esto permite segmentar el tráfico de red y mejorar la eficiencia y seguridad de la comunicación entre dispositivos conectados a diferentes segmentos de red. Los bridges son especialmente útiles en entornos donde se requiere una división lógica de la red para evitar congestiones y mejorar el rendimiento general.</p>
                </div>
                {/* SLIDER */}
                <div>
                    <SliderServices6 />
                </div>
            </div>

            <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2" style={{marginTop: "50px"}}>
                <div className="max-w-[450px] flex flex-col items-center md:items-start">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5"> <span className="font-bold text-secondary">Access points</span></h1>
                    <p className="mb-3 text-xl text-gray-300 text-center md:text-left">Un Access Point (Punto de Acceso) es un dispositivo de red que permite la conexión inalámbrica de dispositivos a una red cableada existente. Actúa como un puente entre dispositivos inalámbricos, como laptops, teléfonos inteligentes o tablets, y la infraestructura de red física, como routers o switches. Los Access Points permiten la creación de redes WLAN (Wireless Local Area Network), proporcionando acceso a internet y recursos de red a dispositivos inalámbricos dentro de su rango de alcance.</p>
                </div>
                {/* SLIDER */}
                <div>
                    <SliderServices7 />
                </div>
            </div>

            <div className="grid items-center justify-center max-w-5xl gap-6 mx-auto md:grid-cols-2" style={{marginTop: "50px"}}>
                <div className="max-w-[450px] flex flex-col items-center md:items-start">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5"> <span className="font-bold text-secondary">Repeater</span></h1>
                    <p className="mb-3 text-xl text-gray-300 text-center md:text-left">Los repetidores son dispositivos utilizados en redes de comunicaciones para extender el alcance de una señal de red, amplificándola y retransmitiéndola a una distancia mayor. Su función principal es mejorar la cobertura y la calidad de la señal inalámbrica, especialmente en áreas donde la señal original es débil o atenuada. Los repetidores reciben la señal entrante, la amplifican y la transmiten nuevamente, lo que permite aumentar el área de cobertura de la red sin necesidad de cables adicionales.</p>
                </div>
                {/* SLIDER */}
                <div>
                    <SliderServices8 />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;
