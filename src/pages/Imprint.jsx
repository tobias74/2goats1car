import React from 'react';

export default function Imprint({ }) {


    return <React.Fragment>


        <div className="p-4 flex justify-center items-center">
            <div>
                <h1 className="font-bold mt-8">Impressum</h1>

                <pre>
                    {`
tobiga UG (haftungsbeschränkt)
Tobias Gassmann
Bodenseestr. 4a
81241 München
HRB 219431
USt-IdNr.: DE 301206623

Email: mail@tobiga.com
Tel: +49 160 96 24 83 98
			`}
                </pre>

                <h1 className="font-bold mt-8">Quelltext</h1>
                <div>
                    <a href="https://github.com/tobias74/rechendreiecke" target="_blank">
                        <span style={{ fontSize: '0.9rem' }} >
                            https://github.com/tobias74/2goats1car
                        </span>
                    </a>
                </div>

            </div>

        </div>

    </React.Fragment>


}


