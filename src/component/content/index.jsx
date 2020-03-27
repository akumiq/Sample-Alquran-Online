import React from 'react'
import SearchBar from '../searchBar'
import ListSurat from './listSurat'
import IsiSurat from './isiSurat'

const Content = (props) => {
    return (
        <div
            className='container mt-3 py-3'
            style={{ background: 'rgb(179, 224, 230)' }}>
            <div
                className='container-fluid'>

                {
                    props.dataSeluruhSurat && !props.isiSurat
                        ? <div>

                            {/*component search bar*/}
                            <SearchBar
                                onHandleInput={props.onHandleInput}
                                searchValue={props.searchValue}
                            />

                            <h2
                                className="p-3"
                                style={{ color: '#4a7c94' }}>
                                Daftar Surat
                            </h2>

                            {/* list surat */}
                            <ListSurat
                                dataSeluruhSurat={props.dataSeluruhSurat}
                                dataKeseluruhan={props.dataKeseluruhan}
                                bacaSurat={props.bacaSurat}
                            />

                        </div>
                        : props.isiSurat
                            ? <IsiSurat
                                isiSurat={props.isiSurat}
                                namaSurat={props.namaSurat}
                                backHome={props.backHome}
                            />
                            : null
                }

            </div>
        </div>
    )
}

export default Content