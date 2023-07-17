import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import { baseUrlImage } from '../../bases/basesUrl';
import { useSelector } from 'react-redux';
import { dateParserFunction } from '../../utils';
import DetailImage from './DetailImage';

export default function DetailListInfluenceur(props) {

    let data = props.data;

    const [showModal, setShowModal] = React.useState(false);
    const [row, setRow] = React.useState('');
    const [inf, setInf] = React.useState('');

    const showImage = (id) => {
        setShowModal(true);
        setRow(id)
    };

    const closeModal = () => {
        setShowModal(false);
    }

    let categories = useSelector((state) => state.categories);

    React.useEffect(() => {
        if (data) {
            categories && categories.value && categories.value.map(val => {
                if (val.id === data.categorieId) {
                    return setInf(val);
                }else{
                    return null
                }
            })
        }
    }, [data, categories]);

    return (
        <TableContainer component={Paper} style={{ borderTop: "1px solid #ddd" }}>
            <div className='alert alert-primary'>
                <h6>Détail de {data && data.title} lancée depuis {dateParserFunction(data.createdAt)} avec un délai de 2 mois</h6>
            </div>

            <div className='flexDataDetailCagnotte'>
                <div className='col-sm-8'>
                    <Table sx={{ minWidth: "auto", border: "1px solid #ddd" }} aria-label="simple table">
                        <TableBody key={data.id}>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ fontWeight: "bold" }}>Nom</TableCell>
                                <TableCell >{data.title}</TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell width={200} style={{ fontWeight: "bold" }}>Description </TableCell>
                                <TableCell >{data.description}</TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ fontWeight: "bold" }}>Montant à atteindre </TableCell>
                                <TableCell >{data.montant}</TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ fontWeight: "bold" }}>Devises </TableCell>
                                <TableCell >
                                    {data && data.devise && data.devise}
                                </TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ fontWeight: "bold" }}>Catégorie </TableCell>
                                <TableCell >{inf ? inf.nom : data.categorie && data.categorie.nom}</TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ fontWeight: "bold" }}>Nombre de participants </TableCell>
                                <TableCell >0</TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ fontWeight: "bold" }}>Montant collecté </TableCell>
                                <TableCell >{inf ? "Pas de données" : data.categorie && data.categorie.d}</TableCell>
                            </TableRow>

                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ fontWeight: "bold" }}>Image principale </TableCell>
                                <TableCell >
                                    <Avatar
                                        style={{ cursor: "pointer" }}
                                        onClick={() => showImage(data)}
                                        alt={data && data.nom && data.nom.toUpperCase()}
                                        src={baseUrlImage + "/" + data.url}
                                        sx={{ width: 100, height: 100 }}
                                    />
                                    <span>Cliquer pour agrandir</span>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className='col-sm-3 imagesCagnotte'>
                    <h6>Images secondaires, Cliquer pour agrandir</h6>
                    <div className='grilleCards mt-2'>

                        {
                            data && data.images && data.images.map(val => {
                                return <div className='card'> <div className='card-body'>
                                    <img style={{ cursor: "pointer" }} src={val && baseUrlImage + '/' + val.url} alt="Image1" onClick={() => showImage(val)} />
                                </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>

            {
                <DetailImage
                    show={showModal}
                    closeModal={closeModal}
                    data={row}
                />
            }
        </TableContainer >
    );
}