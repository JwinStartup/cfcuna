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
    countQse:null,
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
    countQse: countQse(),
    listerTroisPremier: listerTroisPremier(),
    preinscritListe: preinscritListe(),
    preinscritListeQse: preinscritListeQse(),
    preinscritListeVdaf: preinscritListeVdaf(),
    preinscritListeSid: preinscritListeSid(),
    sid_premier: sid_premier(),
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
  function sid_premier() {
    return createAsyncThunk(`${name}/sid_premier`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/preinscription/sid_premier`
      );
      return res;
    });
  }
  function countQse() {
    return createAsyncThunk(`${name}/countQse`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/preinscription/countQse`
      );
      return res;
    });
  }
  function listerTroisPremier() {
    return createAsyncThunk(`${name}/listerTroisPremier`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/preinscription/listerTroisPremier`
      );
      return res;
    });
  }
  function preinscritListe() {
    return createAsyncThunk(`${name}/preinscritListe`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/preinscription/preinscritListe`
      );
      return res;
    });
  }
  function preinscritListeQse() {
    return createAsyncThunk(`${name}/preinscritListeQse`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/preinscription/preinscritListeQse`
      );
      return res;
    });
  }
  function preinscritListeSid() {
    return createAsyncThunk(`${name}/preinscritListeSid`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/preinscription/preinscritListeSid`
      );
      return res;
    });
  }
  function preinscritListeVdaf() {
    return createAsyncThunk(`${name}/preinscritListeVdaf`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/preinscription/preinscritListeVdaf`
      );
      return res;
    });
  }
  
}

function createExtraReducers() {
  return (builder) => {
    faire();
    lister();
    preinscritListeQse();
    sid_premier();
    preinscritListeVdaf();
    preinscritListeSid();
    countQse();
    listerTroisPremier();
    preinscritListe();
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
          console.log(liste)
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function preinscritListeQse() {
      var { pending, fulfilled, rejected } = extraActions.preinscritListeQse;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const liste = action.payload;
          state.liste = liste;
          console.log(liste)
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function sid_premier() {
      var { pending, fulfilled, rejected } = extraActions.sid_premier;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const liste = action.payload;
          state.liste = liste;
          console.log(liste)
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function preinscritListeVdaf() {
      var { pending, fulfilled, rejected } = extraActions.preinscritListeVdaf;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const liste = action.payload;
          state.liste = liste;
          console.log(liste)
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function preinscritListeSid() {
      var { pending, fulfilled, rejected } = extraActions.preinscritListeSid;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const liste = action.payload;
          state.liste = liste;
          console.log(liste)
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function preinscritListe() {
      var { pending, fulfilled, rejected } = extraActions.preinscritListe;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const liste = action.payload;
          state.liste = liste;
          console.log(liste)
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function countQse() {
      var { pending, fulfilled, rejected } = extraActions.countQse;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const countQse = action.payload;
          state.countQse = countQse;
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function listerTroisPremier() {
      var { pending, fulfilled, rejected } = extraActions.listerTroisPremier;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const preinscritPost = action.payload;
          console.log(preinscritPost)
          state.preinscritPost = preinscritPost;
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
  };
}
