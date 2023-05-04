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
                }
            })
        }
    }, [data, categories]);

    return (
        <TableContainer component={Paper} style={{ borderTop: "1px solid #ddd" }}>
            <div className='alert alert-primary'>
                <h6>Détail de {data && data.title} lancée depuis {dateParserFunction(data.createdAt)} avec un délai de 2 mois</h6>
            </div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody key={data.id}>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell width={200} style={{ fontWeight: "bold" }}>Nom</TableCell>
                        <TableCell width={200}>{data.title}</TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell width={200} style={{ fontWeight: "bold" }}>Description </TableCell>
                        <TableCell width={200}>{data.description}</TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell width={200} style={{ fontWeight: "bold" }}>Montant à atteindre </TableCell>
                        <TableCell width={200}>{data.montant}</TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell width={200} style={{ fontWeight: "bold" }}>Montant collecté </TableCell>
                        <TableCell width={200}>{inf ? inf.nom : data.categorie && data.categorie.nom}</TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell width={200} style={{ fontWeight: "bold" }}>Nombre de participants </TableCell>
                        <TableCell width={200}>{data.montant}</TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell width={200} style={{ fontWeight: "bold" }}>Montant collecté </TableCell>
                        <TableCell width={200}>{inf ? "Pas de données" : data.categorie && data.categorie.d}</TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell width={200} style={{ fontWeight: "bold" }}>Image principale </TableCell>
                        <TableCell width={200}>
                            <Avatar
                                style={{ cursor: "pointer" }}
                                onClick={() => showImage(data)}
                                alt={data && data.nom && data.nom.toUpperCase()}
                                src={baseUrlImage + "/" + data.url}
                                sx={{ width: 100, height: 100 }}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            {
                <DetailImage
                    show={showModal}
                    closeModal={closeModal}
                    data={row}
                />
            }
        </TableContainer>
    );
}