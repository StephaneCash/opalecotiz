import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LoaderBlue from '../../components/loader/LoaderBlue';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { FaInfo, FaRegTrashAlt } from 'react-icons/fa';
import { dateParserFunction } from '../../utils';
import { deleteTalent } from '../../features/Talents';

export default function ListTalents(props) {
    let data = props.data && props.data;
    let valueSearch = props.valueSearch && props.valueSearch.toLowerCase();

    const [showBtnAddInf, setShowBtnAddInf] = React.useState(true);
    const [cunt, setCunt] = React.useState(5);

    let dispatch = useDispatch();

    const deleteTalentJeune = (id) => {
        swal({
            text: "Etes-vous sûr de vouloir supprimer ce jeune talent ?",
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(deleteTalent(id));
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    const handleCheckBox = (id) => {
        setShowBtnAddInf(!showBtnAddInf);
    };

    const [currentPage, setCurrentPage] = React.useState(1);
    const lastIndex = currentPage * cunt;
    const firstIndex = lastIndex - cunt;
    const records = data && data.length > 0 && data.slice(firstIndex, lastIndex);
    const nbPage = Math.ceil(data && data.length > 0 && data.length / cunt);
    const numbers = [...Array(data && nbPage + 1).keys()].slice(1);

    return (
        <TableContainer component={Paper}>
            <div className='headTable' style={{
                background: '#009c4e', color: "#fff",
                border: "1px solid #ddd", padding: "1rem", display: "flex",
                justifyContent: "space-between", alignItems: "center", borderRadius: "5px"
            }}>
                <div>
                    <span>Pages</span> / <span>Jeunes Talents {data && data.length > 0 ? `(${data.length})` :
                        `(0)`}</span>
                    <br />
                    <h6>Jeunes Talents</h6>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end"
                }}>
                    <label>Choisir le nombre d'items à afficher</label>
                    <select style={{ width: "20%", textAlign: "center" }} onChange={(e) => setCunt(e.target.value)} className='form-control'>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
            </div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <input
                                style={{ border: "2px solid silver", width: 20, height: 20 }}
                                className="form-check-input" type="checkbox" value=""
                                id="flexCheckDefault"
                            />
                        </TableCell>
                        <TableCell>ID</TableCell>
                        <TableCell>Noms</TableCell>
                        <TableCell align="left">Commune</TableCell>
                        <TableCell align="left">Occupation</TableCell>
                        <TableCell align="left">Date ajout</TableCell>
                        <TableCell align="left">Options</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {records ? records.length > 0 ? records.filter(val => {
                        const nom = val && val.nom && val.nom.toLowerCase();
                        return nom && nom.includes(valueSearch && valueSearch)
                    })
                        .map((row, i) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell width={60}>
                                    <input
                                        className="form-check-input" type="checkbox"
                                        value="" id="flexCheckDefault"
                                        onClick={() => handleCheckBox(row && row.id)}
                                        style={{ border: "2px solid silver", width: 20, height: 20 }}
                                    />
                                </TableCell>
                                <TableCell width={60}>{i + 1}</TableCell>
                                <TableCell width={300}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        gap: "5px"
                                    }}>
                                        <div style={{ fontWeight: "600", }}>
                                            {
                                                row && row.nom && row.nom && row.nom.length > 20 ?
                                                    row.nom.substring(0, 20) + "..." : row && row.nom !== undefined && row.nom
                                            }
                                            {" "}
                                            {
                                                row && row.prenom && row.prenom && row.prenom.length > 20 ?
                                                    row.prenom.substring(0, 20) + "..." : row && row.prenom !== undefined && row.prenom
                                            }
                                        </div>
                                        <div className='text-success' style={{ fontWeight: "500", }}>{row && row.categorie}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell align="left" width={500} style={{ fontWeight: "400", lineHeight: "1.4rem" }}>
                                    {
                                        row.occupation && row.occupation.length > 50 ? row.occupation.substring(0, 50) + "..."
                                            : row.occupation
                                    }
                                </TableCell>
                                <TableCell align="left" width={500} style={{ fontWeight: "400", lineHeight: "1.4rem" }}>
                                    {
                                        row.commune && row.commune.length > 50 ? row.commune.substring(0, 50) + "..."
                                            : row.commune
                                    }
                                </TableCell>
                                <TableCell width={300}>
                                    {
                                        dateParserFunction(row.createdAt)
                                    }
                                </TableCell>
                                <TableCell align="left" width={140}>
                                    <Link to={{ pathname: `detail/${row.nom}` }} state={{ data: row }} style={{ color: "#111" }} className="me-1">
                                        <FaInfo size={18} />
                                    </Link>
                                    <FaRegTrashAlt size={18} style={{ cursor: 'pointer' }} onClick={() => deleteTalentJeune(row.id)} />
                                </TableCell>
                            </TableRow>
                        )) :
                        data && data.length === 0 ?
                            <TableCell colSpan="6px"
                                style={{
                                    textAlign: "center",
                                }}
                            >
                                Pas de données disponibles.
                            </TableCell> :

                            <TableRow
                            >
                                <TableCell
                                    align='center'
                                    colSpan="7px"
                                >
                                    <LoaderBlue />
                                </TableCell>
                            </TableRow> :
                        <TableRow
                        >
                            <TableCell
                                align='center'
                                colSpan="7px"
                            >
                                Pas de données disponibles
                            </TableCell>
                        </TableRow>
                    }

                </TableBody>
            </Table>
            {
                <nav className='paginationNav'>
                    <ul className='pagination'>
                        <li className='page-item'>
                            <Link to="#" className='page-link'
                                onClick={prePage}
                            >Retour</Link>
                        </li>
                        {
                            numbers && numbers.map((n, i) => {
                                return (
                                    <li key={i} className={`page-item ${currentPage === n} ? 'active' : ''`}>
                                        <Link to="#" className='page-link'
                                            onClick={() => changePage(n)}
                                        >{n}</Link>
                                    </li>
                                )
                            })
                        }
                        <li className='page-item'>
                            <Link to="#" className='page-link'
                                onClick={nextPage}
                            >Suivant</Link>
                        </li>
                    </ul>
                </nav>
            }
        </TableContainer>
    );

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changePage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if (currentPage !== nbPage) {
            setCurrentPage(currentPage + 1)
        }
    }
}