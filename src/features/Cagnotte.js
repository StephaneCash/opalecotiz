import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../bases/basesUrl";

export const getAllCagnottes = createAsyncThunk("cagnottes/getData", async (arg, {
    rejectWithValue
}) => {
    try {
        const { data } = await axios.get(`${baseUrl}/cagnottes`);
        const arr = data.slice(0, arg)
        return arr
    } catch (error) {
        rejectWithValue(error.response);
    }
});

export const newCagnotte = createAsyncThunk("cagnottes/create",
    async (data) => {
        try {
            const resp = await axios.post(`${baseUrl}/cagnottes`, data);
            toast.success('Cagnotte ajoutée avec succès');
            return resp.data;
        } catch (error) {
            console.log(error.response);
            if (error.response && error.response.status === 400) {
                toast.error(error && error.response && error.response.data && error.response.data.message[0]);
                console.log("kk", error.response.data && error.response.data.message[0])
            }
        }
    });

export const updateCagnotte = createAsyncThunk("cagnottes/update",
    async (data) => {
        try {
            const resp = await axios.put(`${baseUrl}/cagnottes/${data && data.id}`, data && data.form);
            toast.success('Cagnotte modifiée avec succès');
            //navigate("/categories");
            return resp.data;
        } catch (error) {
            console.log(error.response);
        }
    });

export const deleteCagnotte = createAsyncThunk("cagnottes/delete",
    async (id) => {
        try {
            //  let navigate = useNavigate();
            await axios.delete(`${baseUrl}/cagnottes/${id}`);
            toast.success('Cagnotte supprimée avec succès');
            //navigate("/categories");
            return id;
        } catch (error) {
            console.log(error.response)
        }
    })

export const cagnotteSlice = createSlice({
    name: "cagnottes",
    initialState: {
        value: [],
        isSuccess: false,
        loading: false
    },
    extraReducers: {
        //GET ALL CAGNOTTES
        [getAllCagnottes.pending]: (state, { payload }) => {
            state.loading = true;
            state.isSuccess = false;
        },
        [getAllCagnottes.fulfilled]: (state, action) => {
            state.loading = false;
            state.value = action.payload;
            state.isSuccess = true;
        },
        [getAllCagnottes.rejected]: (state, { payload }) => {
            state.loading = false;
            state.isSuccess = false;
        },
        //CREATE CAGNOTTE
        [newCagnotte.pending]: (state, action) => {
            state.loading = true;
        },
        [newCagnotte.fulfilled]: (state, action) => {
            state.loading = false;
            state.value.push(action.payload)
            state.isSuccess = true;
        },
        [newCagnotte.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        },
        // DELETE CAGNOTTE
        [deleteCagnotte.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteCagnotte.fulfilled]: (state, action) => {
            state.loading = false;
            state.value = state.value.filter(val => {
                return val.id !== action.payload
            })
            state.isSuccess = true;
        },
        [deleteCagnotte.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        },
        // UPDATE CAGNOTTE
        [updateCagnotte.pending]: (state, action) => {
            state.loading = true;
        },
        [updateCagnotte.fulfilled]: (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.value = state.value.filter(val => {
                return val.id !== action.payload.id;
            })
            state.value.push(action.payload);
        },
        [updateCagnotte.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        }
    }
});

export default cagnotteSlice;