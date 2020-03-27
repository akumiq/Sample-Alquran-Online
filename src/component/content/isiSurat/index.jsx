import React from 'react'

const IsiSurat = (props) => {
    return (
        <div>

            <h4
                className="alert alert-info p-3"
                style={{ color: '#4a7c94' }}>
                {props.namaSurat}
            </h4>

            <div
                className="col-12 pt-3">
                <ol>
                    {
                        props.isiSurat.map((item, index) => (

                            <li
                                className="my-3 text-right"
                                key={index}
                                style={{ fontSize: '20px' }}>
                                {item.teks}
                            </li>

                        ))
                    }
                </ol>
            </div>

            <div
                className="pt-3">
                <button
                    className="btn btn-default btn-info"
                    style={{ color: 'rgb(179, 224, 230)' }}
                    onClick={() => props.backHome()}>
                    Back Home
                </button>
            </div>

        </div>
    )
}

export default IsiSurat