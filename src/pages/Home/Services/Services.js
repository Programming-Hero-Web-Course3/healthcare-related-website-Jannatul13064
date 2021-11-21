
import useDoctor from '../../../hooks/useDoctor';
import Serv from '../Serv/Serv';

const Services = () => {
    const { services } = useDoctor();
    return (
        <div>
            <h2>Hello from Services</h2>
            <div className="container">
                <div className="row">
                    {
                        services.map(serv => <Serv
                            key={serv.id}
                            serv={serv}
                        ></Serv>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;