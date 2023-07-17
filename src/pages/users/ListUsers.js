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
import { FaEdit, FaInfo, FaRegTrashAlt } from 'react-icons/fa';
import { dateParserFunction } from '../../utils';
import { deleteUser } from '../../features/Users';

export default function ListUsers(props) {
    let data = props.data && props.data;
    let valueSearch = props.valueSearch && props.valueSearch.toLowerCase();

    const [showBtnAddInf, setShowBtnAddInf] = React.useState(true);
    const [cunt, setCunt] = React.useState(5);

    let dispatch = useDispatch();

    const deleteTalentJeune = (id) => {
        swal({
            text: "Etes-vous sûr de vouloir supprimer cet utilisateur ?",
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(deleteUser(id));
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
                    <span>Pages</span> / <span>Utilisateurs {data && data.length > 0 ? `(${data.length})` :
                        `(0)`}</span>
                    <br />
                    <h6>Utilisateurs</h6>
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
                        <TableCell>Nom</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Role</TableCell>
                        <TableCell align="left">Date ajout</TableCell>
                        <TableCell align="left">Options</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {records ? records.length > 0 ? records.filter(val => {
                        const nom = val && val.pseudo && val.pseudo.toLowerCase();
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
                                                row && row.pseudo && row.pseudo && row.pseudo.length > 20 ?
                                                    row.pseudo.substring(0, 20) + "..." : row && row.pseudo !== undefined && row.pseudo
                                            }                                           
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell align="left" width={500} style={{ fontWeight: "400", lineHeight: "1.4rem" }}>
                                {
                                                row && row.email && row.email && row.email.length > 20 ?
                                                    row.email.substring(0, 20) + "..." : row && row.email !== undefined && row.email
                                            }
                                </TableCell>
                                <TableCell align="left" width={500} style={{ fontWeight: "400", lineHeight: "1.4rem" }}>
                                    {
                                        row && row.role === 0 ? "Admin" : "Super Admin"
                                    }
                                </TableCell>
                                <TableCell width={300}>
                                    {
                                        dateParserFunction(row.createdAt)
                                    }
                                </TableCell>
                                <TableCell align="left" width={140}>
                                    <Link to={{ pathname: `add` }} state={{ data: row }} style={{ color: "#111" }} className="me-1">
                                        <FaEdit size={18} />
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