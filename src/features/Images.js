import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../bases/basesUrl";

export const getAllImages = createAsyncThunk("images/getData", async (arg, {
    rejectWithValue
}) => {
    try {
        const { data } = await axios.get(`${baseUrl}/images`);
        const arr = data.slice(0, arg)
        return arr
    } catch (error) {
        rejectWithValue(error.response);
    }
});

export const newImage = createAsyncThunk("images/create",
    async (arg) => {
        try {
            const resp = await axios.post(`${baseUrl}/images`,  arg.data, arg.config);
            toast.success('Image ajoutée avec succès');
            console.log(resp , " RESPONSE")
            return resp.data;
        } catch (error) {
            console.log(error.response);
            if (error.response && error.response.status === 400) {
                toast.error(error && error.response && error.response.data && error.response.data.message[0]);
                console.log("kk", error.response.data && error.response.data.message[0])
            }
        }
    });

export const updateImage = createAsyncThunk("images/update",
    async (data) => {
        try {
            const resp = await axios.put(`${baseUrl}/images/${data && data.id}`, data && data.form);
            toast.success('Image modifiée avec succès');
            //navigate("/categories");
            return resp.data;
        } catch (error) {
            console.log(error.response);
        }
    });

export const deleteImage = createAsyncThunk("images/delete",
    async (id) => {
        try {
            //  let navigate = useNavigate();
            await axios.delete(`${baseUrl}/images/${id}`);
            toast.success('Image supprimée avec succès');
            //navigate("/categories");
            return id;
        } catch (error) {
            console.log(error.response)
        }
    })

export const imageSlice = createSlice({
    name: "images",
    initialState: {
        value: [],
        isSuccess: false,
        loading: false
    },
    extraReducers: {
        //GET ALL ImageS
        [getAllImages.pending]: (state, { payload }) => {
            state.loading = true;
            state.isSuccess = false;
        },
        [getAllImages.fulfilled]: (state, action) => {
            state.loading = false;
            state.value = action.payload;
            state.isSuccess = true;
        },
        [getAllImages.rejected]: (state, { payload }) => {
            state.loading = false;
            state.isSuccess = false;
        },
        //CREATE Image
        [newImage.pending]: (state, action) => {
            state.loading = true;
        },
        [newImage.fulfilled]: (state, action) => {
            state.loading = false;
            state.value.push(action.payload)
            state.isSuccess = true;
        },
        [newImage.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        },
        // DELETE Image
        [deleteImage.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteImage.fulfilled]: (state, action) => {
            state.loading = false;
            state.value = state.value.filter(val => {
                return val.id !== action.payload
            })
            state.isSuccess = true;
        },
        [deleteImage.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        },
        // UPDATE Image
        [updateImage.pending]: (state, action) => {
            state.loading = true;
        },
        [updateImage.fulfilled]: (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.value = state.value.filter(val => {
                return val.id !== action.payload.id;
            })
            state.value.push(action.payload);
        },
        [updateImage.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        }
    }
});

export default imageSlice;