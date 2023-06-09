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
import { getAllcategories } from '../../features/Categories';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { FaFilter, FaRegEdit, FaRegTrashAlt, FaUsers } from 'react-icons/fa';
import InfiniteScroll from 'react-infinite-scroll-component';
import { deleteUser } from '../../features/Users';
import { ContextApp } from '../../context/AppContext';

export default function ListUsers(props) {
    let data = props.data;
    let valueSearch = props.valueSearch && props.valueSearch.toLowerCase();

    const [showBtnAddInf, setShowBtnAddInf] = React.useState(true);

    const [categories, setCategories] = React.useState([]);
    const [hasMore, setHasMore] = React.useState(true);
    const [count, setCount] = React.useState(10);

    let dispatch = useDispatch();

    React.useEffect(() => {
        setCategories(data && data.value && data.value)
    }, [data]);

    React.useEffect(() => {
        dispatch(getAllcategories(count));
    }, [dispatch, count]);

    const deleteCategorie = (id) => {
        swal({
            text: "Etes-vous sûr de vouloir supprimer cet utilsateur ?",
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

    const loadMore = () => {
        if (categories.length === count) {
            setCategories(categories && categories.concat(categories));
            setHasMore(true);
            setCount(count + 10);
        }
        else {
            setHasMore(false);
            setCount(count + 10);
        }
    };

    const handleCheckBox = (id) => {
        setShowBtnAddInf(!showBtnAddInf);
        console.log(id)
    };

    React.useEffect(() => {
        setShowBtnAddInf(false);
    }, []);

    const { userConnected } = React.useContext(ContextApp);


    return (
        <TableContainer component={Paper} id="scrollableDiv"
            style={{
                height: 510,
                overflow: 'auto',
            }}>
            <div className='alert alert-primary' style={{ background: '#fff', border: "1px solid #ddd" }}>
                <div className='headerListCategorie'>
                    <div>
                        <span>Pages</span> / <span>Utilisateurs {data && data.value && data.value.length > 0 ? `(${data.value.length})` : `(0)`}</span>
                        <br />
                        <h6>Utilisateurs</h6>
                    </div>
                    <div>
                        {
                            showBtnAddInf ? <button
                                className='btn btn-success'
                                style={{
                                    backgroundColor: '#ddd', color: "#333",
                                    border: "1px solid #fff", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                                }}>
                                <FaUsers /> Ajouter des influenceurs
                            </button>
                                : <FaFilter />
                        }
                    </div>
                </div>
            </div>
            <InfiniteScroll
                dataLength={categories && categories.length}
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
                                    id="flexCheckDefault"
                                />
                            </TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Pseudo</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Role</TableCell>
                            <TableCell align="left">Statut</TableCell>
                            <TableCell align="left">Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {categories && categories.length > 0 ? categories.filter(val => {
                            const nom = val && val.email !== undefined && val.email.toLowerCase();
                            return nom && nom.includes(valueSearch)
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
                                    <TableCell width={200} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <Avatar alt={row && row.pseudo && row.pseudo} sx={{ width: 50, height: 50 }} src={baseUrlImage + "/" + row.url} />
                                        <div>
                                            <div>{row.pseudo}</div>
                                            {
                                                userConnected && userConnected.id === row.id &&
                                                <div className='text-primary'>
                                                    ( Vous )
                                                </div>
                                            }
                                        </div>
                                    </TableCell>
                                    <TableCell align="left" width={400}
                                        style={{ fontFamily: "Roboto", textAlign: "justify", fontWeight: "400", lineHeight: "1.4rem" }}>
                                        {
                                            row && row.email
                                        }
                                    </TableCell>
                                    <TableCell align="left" width={200}
                                        style={{ fontFamily: "Roboto", textAlign: "justify", fontWeight: "400", lineHeight: "1.4rem" }}>
                                        {
                                            row && row.role === 0 ? "Admin" : "Super Admin"
                                        }
                                    </TableCell>

                                    <TableCell align="left" width={200}
                                        style={{ fontFamily: "Roboto", textAlign: "justify", fontWeight: "400", lineHeight: "1.4rem" }}>
                                        {
                                            row && row.isActive === true ? <span className='alert alert-danger'>Désactivé</span> : <span className='alert alert-success'>Activé</span>
                                        }
                                    </TableCell>
                                    <TableCell align="left" width={130}>
                                       
                                        <Link to={{ pathname: "add" }} state={{ data: row }} style={{ color: "#111" }} className="me-1">
                                            <FaRegEdit size={18} />
                                        </Link>
                                        {
                                            userConnected &&  userConnected.id === row.id ? "" :
                                            <FaRegTrashAlt size={18} style={{ cursor: 'pointer' }} onClick={() => deleteCategorie(row.id)} />
                                            
                                        }
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