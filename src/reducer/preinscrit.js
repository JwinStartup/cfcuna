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
    preLoad:null,
    preinscritPost: [],
    countQse:null,
    countVdaf:null,
    countSid:null,
    liste: [],
    liste_sid: [],
    liste_qse: [],
    liste_vdaf: [],
    listeDec: [],
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
    modifie: modifie(),
    countQse: countQse(),
    countSid: countSid(),
    countVdaf: countVdaf(),
    listerTroisPremier: listerTroisPremier(),
    preinscritListe: preinscritListe(),
    preinscritListeQse: preinscritListeQse(),
    preinscritListeVdaf: preinscritListeVdaf(),
    preinscritListeSid: preinscritListeSid(),
    decision_traite: decision_traite(),
    sid_premier: sid_premier(),
    qse_premier: qse_premier(),
    vdaf_premier: vdaf_premier(),
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
  function modifie() {
    return createAsyncThunk(`${name}/modifie`, async (body) => {
      const res = await fetchWrapper.post(
        `https://cfc-una-server.onrender.com/api/preinscription/modifie`,
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
  function qse_premier() {
    return createAsyncThunk(`${name}/qse_premier`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/preinscription/qse_premier`
      );
      return res;
    });
  }
  function vdaf_premier() {
    return createAsyncThunk(`${name}/vdaf_premier`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/preinscription/vdaf_premier`
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
  function countSid() {
    return createAsyncThunk(`${name}/countSid`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/preinscription/countSid`
      );
      return res;
    });
  }
  function countVdaf() {
    return createAsyncThunk(`${name}/countVdaf`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/preinscription/countVdaf`
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
  function decision_traite() {
    return createAsyncThunk(`${name}/decision_traite`, async (body) => {
      const res = await fetchWrapper.get(
        `https://cfc-una-server.onrender.com/api/preinscription/decision_traite`
      );
      return res;
    });
  }
  
}

function createExtraReducers() {
  return (builder) => {
    faire();
    modifie();
    lister();
    preinscritListeQse();
    sid_premier();
    qse_premier();
    vdaf_premier();
    preinscritListeVdaf();
    preinscritListeSid();
    countQse();
    countVdaf();
    countSid();
    listerTroisPremier();
    decision_traite();
    preinscritListe();
    function modifie() {
      var { pending, fulfilled, rejected } = extraActions.modifie;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const preLoad = action.payload;
          state.preLoad = preLoad
          state.isLoader = false;
        })
          
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
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
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function decision_traite() {
      var { pending, fulfilled, rejected } = extraActions.decision_traite;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const listeDec = action.payload;
          state.listeDec = listeDec;
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
          const liste_sid = action.payload;
          state.liste_sid = liste_sid;
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function qse_premier() {
      var { pending, fulfilled, rejected } = extraActions.qse_premier;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const liste_qse = action.payload;
          state.liste_qse = liste_qse;
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function vdaf_premier() {
      var { pending, fulfilled, rejected } = extraActions.vdaf_premier;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const liste_vdaf = action.payload;
          state.liste_vdaf = liste_vdaf;
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
    function countSid() {
      var { pending, fulfilled, rejected } = extraActions.countSid;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          const countSid = action.payload;
          state.countSid = countSid;
          state.isLoader = false;
        })
        .addCase(rejected, (state, action) => {
          state.isLoader = false;
          state.error = action.error;
        });
    }
    function countVdaf() {
      var { pending, fulfilled, rejected } = extraActions.countVdaf;
      builder
        .addCase(pending, (state) => {
          state.error = null;
          state.isLoader = true;
        })
        .addCase(fulfilled, (state, action) => {
          console.log(action.payload)
          const countVdaf = action.payload;
          state.countVdaf = countVdaf;
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
