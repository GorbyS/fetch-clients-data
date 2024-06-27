import React, {useState, useEffect} from 'react';


export default function ContactList() {
    const [clients, setClients] = useState([])
    const [serverMessage, setServerMessage] = useState("")
    const [selectedClient, setSelectedClient] = useState(null)

    useEffect(() => {
        addingСlient();
    },[])

    const addingСlient = async () => {
        setServerMessage("Loading data")
        const data = await fetch("http://localhost:5000/get-client")
        const finalData = await data.json()
        const {msg, documents} = finalData
        setClients(documents)
        setServerMessage(msg)
    }

    const showClientDetails = (client) => {
        setSelectedClient(client)
    }


    return (
        <div>
            {clients.map((client, index) => (
                <button key={index} onClick={() => showClientDetails(client)}>
                    {client.firstName} {client.lastName}
                </button>
            ))}
            <div className="msg">{serverMessage}</div>
            {selectedClient && (
                <div className="client-details">
                    <h3>Client Details:</h3>
                    <p>Sex: {selectedClient.firstName}</p>
                    <p>Sex: {selectedClient.lastName}</p>
                    <p>Birth Date: {selectedClient.birthDate}</p>
                    <p>Sex: {selectedClient.sex}</p>
                </div>
            )}
        </div>
    )
}