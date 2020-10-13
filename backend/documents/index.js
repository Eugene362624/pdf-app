const pdf = ({name, surname, age, color, dogName, momName, dadName, group, model, timestamp}) => {
    return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>app work result</title>
                <style>
                    * { 
                    margin: 0;
                    }
                    header {
                        background-color: gray;
                        border-radius: .5rem;
                    }
                    main {
                        background-color: gray;
                        border-radius: 1rem;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <header>
                    <h3>App Work Result</h3>
                </header>
                <main>
                    <table>
                        <tr>
                            <td>
                                <h2>Name:</h2> <h3>${name}</h3>
                            <td>
                        </tr>
                        <tr>
                            <td>
                                <h2>Surname:</h2> <h3>${surname}</h3>
                            <td>
                        </tr>
                        <tr>
                            <td>
                                <h2>Color:</h2> <h3>${color}</h3>
                            <td>
                        </tr>
                        <tr>
                            <td>
                                <h2>Age:</h2> <h3>${age}</h3>
                            <td>
                        </tr>
                        <tr>
                            <td>
                                <h2>Dog Name:</h2> <h3>${dogName}</h3>
                            <td>
                        </tr>
                        <tr>
                            <td>
                                <h2>Mom Name:</h2> <h3>${momName}</h3>
                            <td>
                        </tr>
                        <tr>
                            <td>
                                <h2>Dad name:</h2> <h3>${dadName}</h3>
                            <td>
                        </tr>
                        <tr>
                            <td>
                                <h2>Group:</h2> <h3>${group}</h3>
                            <td>
                        </tr>
                        <tr>
                            <td>
                                <h2>Model:</h2> <h3>${model}</h3>
                            <td>
                        </tr>
                        <tr>
                            <td>
                                <h2>Timestamp:</h2> <h3>${timestamp}</h3>
                            <td>
                        </tr>
                    </table>
                </main>
            </body>
    `
}

export default pdf