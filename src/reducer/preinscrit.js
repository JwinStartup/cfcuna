import { fetchWrapper } from "../helper/helper";
//import { URL_SERVER } from "@env";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const name = "preinscrits";
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

export const preinscritActions = { ...slice.actions, ...extraActions };
export const preinscritReducer = slice.reducer;

// exports
function createInitialState() {
  return {
    // initialize state from local storage to enable user to stay logged in
    preinscritPost: [],
    responsePost:null,
    liste: [],
    error: null,
    isLoader: false,
  };
}
function createReducers() {
  return {
    eventPostDelete,
  };

  function eventPostDelete(state) {
    state.preinscritPost = null;
    // history.navigate("/login");
  }

}

function createExtraActions() {
  return {
    // userListe: userListe(),
    faire: faire(),
    lister: lister(),
  };

  function faire() {
    return createAsyncThunk(`${name}/faire`, async (body) => {
      const res = await fetchWrapper.post(
        `https://cfc-una-server.onrender.com/api/preinscription/faire`,
        body
      );
      return res;
    });
  }
  function lister() {
    return createAsyncThunk(`${name}/lister`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/preinscription/lister`
      );
      return res;
    });
  }
}

function createExtraReducers() {
  return (builder) => {
    faire();
    lister();
    function faire() {
      var { pending, fulfilled, rejected } = extraActions.faire;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const liste = action.payload;
          state.liste = [...state.liste,liste];
          state.isLoader = false;
        })
          
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function lister() {
      var { pending, fulfilled, rejected } = extraActions.lister;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const liste = action.payload;
          state.liste = liste;
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
  };
}
