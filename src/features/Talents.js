import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../bases/basesUrl";

export const getAllTalents = createAsyncThunk("talents/getData", async (arg, {
    rejectWithValue
}) => {
    try {
        const { data } = await axios.get(`${baseUrl}/talents`);
        const arr = data.slice(0, arg)
        return arr
    } catch (error) {
        rejectWithValue(error.response);
    }
});

export const newTalent = createAsyncThunk("talents/create",
    async (data) => {
        try {
            const resp = await axios.post(`${baseUrl}/talents`, data);
            toast.success('Talent ajouté avec succès');
            return resp.data;
        } catch (error) {
            console.log(error.response);
            if (error.response && error.response.status === 400) {
                toast.error(error && error.response && error.response.data && error.response.data.message[0]);
                console.log("kk", error.response.data && error.response.data.message[0])
            }
        }
    });

export const updateTalent = createAsyncThunk("talents/update",
    async (data) => {
        try {
            const resp = await axios.put(`${baseUrl}/talents/${data && data.id}`, data && data.form);
            toast.success('Talent modifié avec succès');
            //navigate("/categories");
            return resp.data;
        } catch (error) {
            console.log(error.response);
        }
    });

export const deleteTalent = createAsyncThunk("talents/delete",
    async (id) => {
        try {
            //  let navigate = useNavigate();
            await axios.delete(`${baseUrl}/talents/${id}`);
            toast.success('Talent supprimé avec succès');
            //navigate("/categories");
            return id;
        } catch (error) {
            console.log(error.response)
        }
    })

export const talentSlice = createSlice({
    name: "talents",
    initialState: {
        value: [],
        isSuccess: false,
        loading: false
    },
    extraReducers: {
        //GET ALL TalentS
        [getAllTalents.pending]: (state, { payload }) => {
            state.loading = true;
            state.isSuccess = false;
        },
        [getAllTalents.fulfilled]: (state, action) => {
            state.loading = false;
            state.value = action.payload;
            state.isSuccess = true;
        },
        [getAllTalents.rejected]: (state, { payload }) => {
            state.loading = false;
            state.isSuccess = false;
        },
        //CREATE Talent
        [newTalent.pending]: (state, action) => {
            state.loading = true;
        },
        [newTalent.fulfilled]: (state, action) => {
            state.loading = false;
            state.value.push(action.payload)
            state.isSuccess = true;
        },
        [newTalent.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        },
        // DELETE Talent
        [deleteTalent.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteTalent.fulfilled]: (state, action) => {
            state.loading = false;
            state.value = state.value.filter(val => {
                return val.id !== action.payload
            })
            state.isSuccess = true;
        },
        [deleteTalent.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        },
        // UPDATE Talent
        [updateTalent.pending]: (state, action) => {
            state.loading = true;
        },
        [updateTalent.fulfilled]: (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.value = state.value.filter(val => {
                return val.id !== action.payload.id;
            })
            state.value.push(action.payload);
        },
        [updateTalent.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        }
    }
});

export default talentSlice;