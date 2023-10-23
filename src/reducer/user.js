import { fetchWrapper} from "../helper/helper";
//import { URL_SERVER } from "@env";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const name = "users";
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

// exports

export const userActions = { ...slice.actions, ...extraActions };
export const userReducer = slice.reducer;

function createInitialState() {
  return {
    // initialize state from local storage to enable user to stay logged in
    user: null,
    error: null,
    isLoader: false,
    sms: null,
    userToken: null,
    isLogger: false,
  };
}
function createExtraActions() {
  return {
   // login: login(),
    //userListe: userListe(),
    inscription: inscription(),
    //envoieSms: envoieSms(),
  };

 /* function login() {
    return createAsyncThunk(
      `${name}/login`,
      async (body) =>
        await fetchWrapper.post(`${URL_SERVER}` + "users/connexion", body)
    );
  }
*/
  function inscription() {
    return createAsyncThunk(`${name}/inscription`, async (body) => {
      const res = await fetchWrapper.post(
        `https://cfc-una-server.onrender.com` + "users/inscription",
        body
      );
      return res;
    });
  }
  }

 /* function userListe() {
    return createAsyncThunk(`${name}/lister`, async () => {
      const res = await fetchWrapper.get(`${URL_SERVER}` + "users/lister");
      return res;
    });
  }
  function envoieSms() {
    return createAsyncThunk(`${name}/envoieSms`, async (body) => {
      const res = await fetchWrapper.post(
        `${URL_SERVER}` + "users/envoieSms",
        body
      );
      return res;
    });
  }
}*/
function createReducers() {
  return {
    logout,
  };

  function logout(state) {
    state.isLogger = false;
    state.userToken = null;
    // history.navigate("/login");
  }
}
function createExtraReducers() {
  return (builder) => {
    inscription();
    function inscription() {
      var { pending, fulfilled, rejected } = extraActions.inscription;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const user = action.payload;
          state.user = user;
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
} 
}
  
  

