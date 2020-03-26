import React from 'react'

const ListSurat = (props) => {
    return (
        <div className="row justify-content-center">

            {
                (props.dataSeluruhSurat && !props.dataKeseluruhan)
                    ? props.dataSeluruhSurat.map((item, index) => (
                        <div
                            className="col-md-4 col-6 col-lg-3 my-2"
                            key={index}>

                            <div
                                className="col-12 bg-white text-dark p-2 rounded shadow-lg"
                                style={{ minHeight: '215px' }}>
                                <h2>{item.asma}</h2>
                                <p>{item.nama}</p>
                                <p>{item.arti}</p>
                                <button
                                    className="btn btn-default btn-success">
                                    Baca Surat
                                </button>
                            </div>

                        </div>
                    ))
                    : props.dataKeseluruhan
                        ? props.dataKeseluruhan.map((item, index) => (
                            <div
                                className="col-md-4 col-6 col-lg-3 my-2"
                                key={index}>

                                <div
                                    className="col-12 bg-white text-dark p-2 rounded shadow-lg"
                                    style={{ minHeight: '200px' }}>
                                    <h3>{item.asma}</h3>
                                    <p>{item.nama}</p>
                                    <p>{item.arti}</p>
                                    <button
                                        className="btn btn-default btn-success">
                                        Baca Surat
                                    </button>
                                </div>

                            </div>
                        ))
                        : null
            }

        </div>
    )
}

export default ListSurat