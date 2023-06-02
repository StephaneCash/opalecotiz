import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../bases/basesUrl";

export const getAllparticipants = createAsyncThunk("participants/getData", async (arg, {
    rejectWithValue
}) => {
    try {
        const { data } = await axios.get(`${baseUrl}/participants`);
        const arr = data.slice(0, arg)
        return arr
    } catch (error) {
        rejectWithValue(error.response);
    }
});

export const newparticipant = createAsyncThunk("participants/create",
    async (data) => {
        try {
            const resp = await axios.post(`${baseUrl}/participants`, data);
            toast.success('Participant ajouté avec succès');
            return resp.data;
        } catch (error) {
            console.log(error.response);
            if (error.response && error.response.status === 400) {
                toast.error(error && error.response && error.response.data && error.response.data.message[0]);
                console.log("kk", error.response.data && error.response.data.message[0])
            }
        }
    });

export const updateparticipant = createAsyncThunk("participants/update",
    async (data) => {
        try {
            const resp = await axios.put(`${baseUrl}/participants/${data && data.id}`, data && data.form);
            toast.success('Participant modifié avec succès');
            //navigate("/categories");
            return resp.data;
        } catch (error) {
            console.log(error.response);
        }
    });

export const deleteparticipant = createAsyncThunk("participants/delete",
    async (id) => {
        try {
            //  let navigate = useNavigate();
            await axios.delete(`${baseUrl}/participants/${id}`);
            toast.success('participant supprimé avec succès');
            //navigate("/categories");
            return id;
        } catch (error) {
            console.log(error.response)
        }
    })

export const participantslice = createSlice({
    name: "participants",
    initialState: {
        value: [],
        isSuccess: false,
        loading: false
    },
    extraReducers: {
        //GET ALL participants
        [getAllparticipants.pending]: (state, { payload }) => {
            state.loading = true;
            state.isSuccess = false;
        },
        [getAllparticipants.fulfilled]: (state, action) => {
            state.loading = false;
            state.value = action.payload;
            state.isSuccess = true;
        },
        [getAllparticipants.rejected]: (state, { payload }) => {
            state.loading = false;
            state.isSuccess = false;
        },
        //CREATE participants
        [newparticipant.pending]: (state, action) => {
            state.loading = true;
        },
        [newparticipant.fulfilled]: (state, action) => {
            state.loading = false;
            state.value.push(action.payload)
            state.isSuccess = true;
        },
        [newparticipant.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        },
        // DELETE participants
        [deleteparticipant.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteparticipant.fulfilled]: (state, action) => {
            state.loading = false;
            state.value = state.value.filter(val => {
                return val.id !== action.payload
            })
            state.isSuccess = true;
        },
        [deleteparticipant.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        },
        // UPDATE participants
        [updateparticipant.pending]: (state, action) => {
            state.loading = true;
        },
        [updateparticipant.fulfilled]: (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.value = state.value.filter(val => {
                return val.id !== action.payload.id;
            })
            state.value.push(action.payload);
        },
        [updateparticipant.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        }
    }
});

export default participantslice;