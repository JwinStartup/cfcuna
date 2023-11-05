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
    modife:"",
    sms: null,
    userToken: null,
    listeUser:[],
    isLogger: false,
  };
}
function createExtraActions() {
  return {
    inscription: inscription(),
    liste: liste(),
    login: login(),
    supprime: supprime(),
    modifierRole: modifierRole(),
  };


  function inscription() {
    return createAsyncThunk(`${name}/inscription`, async (body) => {
      const res = await fetchWrapper.post(
        "https://cfc-una-server.onrender.com/api/users/inscription",
        body
      );
      return res;
    });
  }
  function liste() {
    return createAsyncThunk(`${name}/liste`, async (body) => {
      const res = await fetchWrapper.get(
        "https://cfc-una-server.onrender.com/api/users/lister"
      );
      return res;
    });
  }
  function supprime() {
    return createAsyncThunk(`${name}/supprime`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/users/supprime/${body}`
      );
      return res;
    });
  }
  function login() {
    return createAsyncThunk(`${name}/login`, async (body) => {
      const res = await fetchWrapper.post(
        "https://cfc-una-server.onrender.com/api/users/connexion",
        body
      );
      return res;
    });
  }
  }
  function modifierRole() {
    return createAsyncThunk(`${name}/modifierRole`, async (body) => {
      const res = await fetchWrapper.post(
        "https://cfc-una-server.onrender.com/api/users/modifierRole",
        body
      );
      return res;
    });
  }
  


function createReducers() {
  return {
    logout,
  };

  function logout(state) {
    state.user = null;
    state.userToken = null;
  }
}
function createExtraReducers() {
  return (builder) => {
    inscription();
    login();
    liste();
    supprime();
    modifierRole()
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
    function supprime() {
      var { pending, fulfilled, rejected } = extraActions.supprime;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const modifie = action.payload;
          state.modifie = modifie;
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function modifierRole() {
      var { pending, fulfilled, rejected } = extraActions.modifierRole;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const modifie = action.payload;
          state.modifie = modifie;
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function login() {
      var { pending, fulfilled, rejected } = extraActions.login;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const user = action.payload;
          state.userToken = user;
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function liste() {
      var { pending, fulfilled, rejected } = extraActions.liste;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const user = action.payload;
          state.listeUser = user;
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
} 
}
  
  

