import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AmoCRMComponent = () => {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://digmen68.amocrm.ru/api/v4/leads', {
                    headers: {
                        'Authorization': 'def50200202e36b87dc0f81dd9f142ef41808bb2aa3d223954369f5a2602faf67b26394bbc5bb2ac96caf333cf377a6953d20b0d4db6688c4772862b59c5820ed3f750bf4f92687629559fabe3324868b0bedb0aae074bf97fdd83ba9e62d34ff2f1853904104c23049b1256728228e3baad34230d9edcd6f64947328aac71bf61569b0e0e62b74947d039f9e175145248a36817a6e74065f9ec91ad867d1e63baa87334e88f90cc6f924b72231d3ef75281acfed17aea6bbd669d11964bc0e989be8fdea791fc810607914933175f7b697d30ab8ea1ad7a8297f2885e29228e68a05cdcb253e8184939b124bb2e7326f16921809400c59c98e8aa36fb3304ac510f7495558d624afddca395b3ac885b7204421c484eaa845a9a2de807e8b9a9ed1a56b8999fb9ffee44592a241bcc84bb12729e05932bdd15254820e5fed48a5ea66d68eebc0839b881fa11abdf62224584919f505e005f5aa778b3cbfdca8683b43139a1328e6ce0e4536be80dd7db1ced1b41e8cb3fe587b20a6e1e09eaf0cd3dc919f645e41026ab8d51f881b8c4cdad1e33876b294ef9b3c3bff1da450703fed041afcd9ba23847fd2f8ecda58163f8f922435248de791b6cc6fe69463d8ee3d61fa2757ed0f310b13b56d275081bd1f6b396b88ffb16ac3728614747f6f433ad6fc146',
                        'Content-Type': 'application/json'
                    }
                });
                setLeads(response.data._embedded.leads); // Предполагается, что ответ содержит массив leads
            } catch (error) {
                console.error('Error fetching data from amoCRM:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <ul>
                {leads.map((lead) => (
                    <li key={lead.id}>
                        {lead.name} - {lead.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AmoCRMComponent;
