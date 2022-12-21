// import react and usestate module for search engine from react library
import React, { useState } from 'react';

/*  This function is designed for creating a searchable table in react js
Information include is cited from Characterization_of_Blockchain_Interoperability_Landscape-4.pdf paper.
This function would generate a table with nine rows of data, and a search input on the top of the table,
The handleSearchChange function updates the search state when the user types in the input field, and
the filteredData constant uses the filter method to return only the rows that match the search query.
Finally, the map method is used to render the table rows for the filtered data.
*/
function SearchableTable() {
    const [data, setData] = useState([
        { Name: "Overledger", Summary: 'Message layer for multi-chain applications', Integration_Mode: 'Decentralized Relay', Validation: 'Hybrid',
        Upgradability: 'Through plugins', Adoptability: 'Allow metadata field', Governance: 'Off-chain', Open_Source: 'FALSE', Trust: 'Trusted'},
        { Name: "Hyperledger Cactus", Summary: 'Integration framework for multi-chain transactions', Integration_Mode: 'Decentralized Relay', Validation: 'Third Party',
        Upgradability: 'Through plugins', Adoptability: 'Implement plugin', Governance: 'Off-chain', Open_Source: 'TRUE', Trust: 'Trusted'},
        { Name: "Hyperledger Firefly", Summary: 'API layer for multi-chain applications', Integration_Mode: 'Decentralized Relay', Validation: 'Third Party',
        Upgradability: 'Through plugins', Adoptability: 'Implement plugin', Governance: 'Off-chain', Open_Source: 'TRUE', Trust: 'Trusted'},
        { Name: "Polkadot", Summary: 'Enable value and data to be sent across multiple chains', Integration_Mode: 'Hub and Spoke', Validation: 'Native',
        Upgradability: 'No hard fork', Adoptability: 'Implement protocol/build in Substrate', Governance: 'On-chain', Open_Source: 'TRUE', Trust: 'Trustless'},
        { Name: "Cosmos", Summary: 'Enables transfer of value between chains', Integration_Mode: 'Hub and Spoke', Validation: 'Native',
        Upgradability: 'Possible hard fork', Adoptability: 'Implement protocol/build in Tendermint', Governance: 'On-chain', Open_Source: 'TRUE', Trust: 'Trustless'},
        { Name: "Loom", Summary: 'Enable interoperability for Etherum DApps', Integration_Mode: 'Hub and Spoke', Validation: 'Native',
        Upgradability: 'Possible hard fork', Adoptability: 'Loom sidechain must be implemented ', Governance: 'On-chain', Open_Source: 'TRUE', Trust: 'Trustless'},
        { Name: "Hybrix", Summary: 'Loom sidechain must be implemented ', Integration_Mode: 'Decentralized Relay', Validation: 'Hybrid',
        Upgradability: 'Through P2P daemon', Adoptability: 'Allow metadata field', Governance: 'Off-chain ', Open_Source: 'TRUE', Trust: 'Trusted'},
        { Name: "Chainlink", Summary: 'Network of Decentralized Oracle Networks (DON)', Integration_Mode: 'Oracle', Validation: 'Native',
        Upgradability: 'Contract can self-generate', Adoptability: 'No requirement', Governance: 'Onchain', Open_Source: 'TRUE', Trust: 'Trustless'},
        { Name: "Poly Network", Summary: 'Interoperability protocol for heterogenous blockchains ', Integration_Mode: 'Hub and Spoke', Validation: 'Hybrid',
        Upgradability: 'Possible hard fork', Adoptability: 'Implement, Smart contract & Relayer ', Governance: 'Onchain', Open_Source: 'TRUE', Trust: 'Trustless'},
    ]);
    const [search, setSearch] = useState('');

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const filteredData = data.filter((row) => {
        return (row.Name.toLowerCase().includes(search.toLowerCase()) || row.Summary.toLowerCase().includes(search.toLowerCase()) || 
                row.Integration_Mode.toLowerCase().includes(search.toLowerCase()) || row.Validation.toLowerCase().includes(search.toLowerCase()) ||
                row.Upgradability.toLowerCase().includes(search.toLowerCase()) || row.Adoptability.toLowerCase().includes(search.toLowerCase()) ||
                row.Governance.toLowerCase().includes(search.toLowerCase()) || row.Open_Source.toLowerCase().includes(search.toLowerCase()) ||
                row.Trust.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <div>
            <input type="text" value={search} onChange={handleSearchChange} />
            <table>
                <thead>
                    <tr>
                        <th width="12%">Name</th>
                        <th width="16%">Summary</th>
                        <th width="12%">Integration Mode</th>
                        <th width="8%">Validation</th>
                        <th width="15%">Upgradability</th>
                        <th width="14%">Adoptability</th>
                        <th width="13%">Governance</th>
                        <th width="14%">Open Source</th>
                        <th width="16%">Trust</th>
                    </tr>
                </thead>
                <tbody>
                  {filteredData.map((row) => (
                      <tr key={row.Name}>
                          <td>{row.Name}</td>
                          <td>{row.Summary}</td>
                          <td>{row.Integration_Mode}</td>
                          <td>{row.Validation}</td>
                          <td>{row.Upgradability}</td>
                          <td>{row.Adoptability}</td>
                          <td>{row.Governance}</td>
                          <td>{row.Open_Source}</td>
                          <td>{row.Trust}</td>
                          
                      </tr>
                  ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchableTable;