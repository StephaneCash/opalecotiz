import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import { baseUrlImage } from '../../bases/basesUrl';
import LoaderBlue from '../../components/loader/LoaderBlue';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { FaInfo, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import InfiniteScroll from 'react-infinite-scroll-component';
import { dateParserFunction } from '../../utils';
import { deleteCagnotte, getAllCagnottes } from '../../features/Cagnotte';

export default function ListInfluenceurs(props) {
    let data = props.data;
    let valueSearch = props.valueSearch && props.valueSearch.toLowerCase();

    const [showBtnAddInf, setShowBtnAddInf] = React.useState(false);

    const [cagnottes, setCagnottes] = React.useState([]);
    const [hasMore, setHasMore] = React.useState(true);
    const [count, setCount] = React.useState(10);

    const [id, setId] = React.useState(null);
    const [valC, setC] = React.useState(null);

    let dispatch = useDispatch();

    React.useEffect(() => {
        setCagnottes(data && data.value && data.value)
    }, [data]);

    React.useEffect(() => {
        dispatch(getAllCagnottes(count));
    }, [dispatch, count]);

    const deleCagnotte = (id) => {
        swal({
            text: "Etes-vous sûr de vouloir supprimer cette cagnotte ?",
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(deleteCagnotte(id && id));
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    const loadMore = () => {
        if (cagnottes.length === count) {
            setCagnottes(cagnottes && cagnottes.concat(cagnottes))
            setHasMore(true)
            setCount(count + 10);
        }
        else {
            setHasMore(false)
            setCount(count + 10);
        }
    };

    const handleCheckBox = (val) => {
        setShowBtnAddInf(true);
        setId(val.id);
    };

    return (
        <TableContainer component={Paper} id="scrollableDiv"
            style={{
                height: 510,
                overflow: 'auto',
            }}>
            <div style={{ background: '#fff', border: "1px solid #ddd", padding: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                    <span>Pages</span> / <span>Productions {cagnottes && cagnottes.length > 0 ? `(${cagnottes.length})` :
                        `(0)`}</span>
                    <br />
                    <h6>Productions</h6>
                </div>
                {
                    showBtnAddInf &&
                    <Link
                        to={{
                            pathname: `/admin/add-images/${id && id}`
                        }}
                    >
                        <button
                            className='btn'
                            style={{
                                border: "1px solid #009c4e", color: "#009c4e"
                            }}>
                            Ajouter des images
                        </button>
                    </Link>

                }
            </div>
            <InfiniteScroll
                dataLength={cagnottes && cagnottes.length}
                next={loadMore}
                hasMore={hasMore}
                loader={
                    <div style={{
                        width: '100%',
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <LoaderBlue />
                    </div>
                }
                endMessage={
                    <div style={{
                        width: '100%',
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: '1rem'
                    }}>
                        Plus de données disponibles
                    </div>
                }
                scrollableTarget="scrollableDiv"
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <input
                                    style={{ border: "2px solid silver", width: 20, height: 20 }}
                                    className="form-check-input" type="checkbox" value=""
                                    id="checkBox"
                                />
                            </TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Titre</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Date création</TableCell>
                            <TableCell align="left">Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {cagnottes && cagnottes.length > 0 ? cagnottes.filter(val => {
                            const nom = val && val.title !== undefined && val.title.toLowerCase();
                            return nom && nom.includes(valueSearch)
                        })
                            .map((row, i) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell width={60}>
                                        <input
                                            className="form-check-input checkForm" type="checkbox"
                                            value="" id="checkBoxV"
                                            onClick={() => {
                                                handleCheckBox(row);
                                            }}
                                            style={{ border: "2px solid silver", width: 20, height: 20, }}
                                        />
                                    </TableCell>
                                    <TableCell width={60}>{i + 1}</TableCell>
                                    <TableCell width={300}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <div>
                                                <Avatar alt="Remy Sharp" sx={{ width: 40, height: 40 }} src={baseUrlImage + "/" + row.url} />
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: "600", }}>{row.title}</div>
                                                <div className='mt-1' style={{ color: "#666", fontSize: '13px' }}>{row && row.categorie && row.categorie.nom}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell align="left" width={500} style={{ textAlign: "justify", fontWeight: "400", lineHeight: "1.4rem" }}>
                                        {
                                            row && row.description && row.description.split(".") ? row.description.split(".")[0] + "..." : row.description
                                        }
                                    </TableCell>
                                    <TableCell width={300}>
                                        {
                                            dateParserFunction(row.createdAt)
                                        }
                                    </TableCell>
                                    <TableCell align="left" width={130}>
                                        <Link to={{ pathname: `detail/${row.id}` }} state={{ data: row }} style={{ color: "#111" }} className="me-1">
                                            <FaInfo size={18} />
                                        </Link>
                                        <Link to={{ pathname: "add" }} state={{ data: row }} style={{ color: "#111" }} className="me-1">
                                            <FaRegEdit size={18} />
                                        </Link>
                                        <FaRegTrashAlt size={18} style={{ cursor: 'pointer' }} onClick={() => deleCagnotte(row.id)} />
                                    </TableCell>
                                </TableRow>
                            )) :
                            data && data.value && data.value.length === 0 ?
                                <TableCell colSpan="6px"
                                    style={{
                                        textAlign: "center",
                                    }}
                                >
                                    Pas de données disponibles.
                                </TableCell> :

                                <TableCell align="left" style={{ textAlign: "center" }} colSpan="6px">
                                    ''
                                </TableCell>
                        }

                    </TableBody>
                </Table>
            </InfiniteScroll>
        </TableContainer>
    );
}