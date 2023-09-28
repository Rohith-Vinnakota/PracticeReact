import { useState } from 'react';
function Selected() {
    const countries = [
        "india", "America", "SriLanka", "Dudai"
    ];
    const [selectname, setselect] = useState([]);
    function handleresult(e) {
        e.preventDefault();
    }
    function selectOption(e) {
        const option = e.target.options;
        let name = null;
        for (let a of option) {
            if (a.selected === true) {
                name = a.textContent;
            }
        }
        setselect(name);
    }
    return (
        <>
            {
                selectname.length === 0 ? <h3> Not Selected Please Selected any thing</h3> : <h3> You selected {selectname}</h3>
            }

            <hr />
            <form onSubmit={(e) => handleresult(e)}>
                <select onChange={(e) => selectOption(e)}>
                    <option>Select Country</option>
                    {
                        countries.map((each, index) => {
                            return <option key={index} value={each}>{each}</option>
                        })
                    }
                </select>

            </form>
        </>
    );
}
export default Selected;