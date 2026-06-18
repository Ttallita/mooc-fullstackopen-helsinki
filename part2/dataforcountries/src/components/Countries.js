
const Countries = ({ value }) => {
    if (value === null)
        return <></>

    if (value.length === 1) {

        return (
            <div>
                <h1>{value[0].name.common}</h1>
                <p>
                    <div>Capital {value[0].capital.map(capital => capital)}</div>
                    <div>Area {value[0].area}</div>
                </p>
                <h1>Languages</h1>
                <ul>
                    {Object.values(value[0].languages)
                        .map(language =>
                            <li key={language}>{language}</li>
                        )}
                </ul>
                <img src={value[0].flags.png} alt="Flag image"></img>
            </div>
        )
    }

    return (
        <ul>
            {value.map(country =>
                <li key={country.name.common}>{country.name.common}</li>
            )}
        </ul>
    )
}

export default Countries