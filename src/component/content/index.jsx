import React from 'react'

const Content = (props) => {
    return (
        <div
            className='container mt-3 py-3'
            style={{ background: 'rgb(179, 224, 230)' }}>
            <div
                className='container-fluid'>
                <h1
                    style={{ color: '#4a7c94' }}>
                    Daftar Surat
                </h1>

                <div
                    className='row justify-content-center'>
                    {
                        props.dataSeluruhSurat.map((item, index) => (
                            <div
                                className="col-md-4 col-6 col-lg-3 my-3"
                                key={index}>
                                <div
                                    className="col-12 bg-white text-dark p-2 rounded shadow-lg"
                                    style={{ minHeight: '200px' }}>
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
                    }
                </div>
            </div>
        </div>
    )
}

export default Content