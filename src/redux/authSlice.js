import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fbAuth, fbCreateUserWithEmailAndPassword, fbSignInWithEmailAndPassword, fbSignOut, fbUpdateCurrentUser } from "../firebase/config";

const initialState = {
    name: "",
    email: "",
    password: "",

    error: null,
}

export const register = createAsyncThunk(
    "auth/register", 
    async ({name, email, password}, { rejectWithValue }) => {
        try {
            await fbCreateUserWithEmailAndPassword(fbAuth, email, password);
            await fbUpdateCurrentUser(fbAuth, { displayName: name })
        } catch (e) {
            return rejectWithValue(e.code)
        }
})

export const login = createAsyncThunk(
    "auth/login",
    async ({email, password}, { rejectWithValue }) => {
        try {
            await fbSignInWithEmailAndPassword(fbAuth, email, password)
        } catch (e) {
            return rejectWithValue(e.code)
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
       await fbSignOut(fbAuth)
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        },
        changeEmail: (state, action) => {
            state.email = action.payload
        },
        changePassword: (state, action) => {
            state.password = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.rejected, (state, action) => {
                state.error = action.payload;
        })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload;
        })
    }
})

export const { changeName, changeEmail, changePassword } = authSlice.actions
export default authSlice.reducer