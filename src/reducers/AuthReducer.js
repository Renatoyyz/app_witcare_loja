const initialState = {
    iduser: 0,
    desnome: '',
    desemail: '',
    dessenha: ''
};

const AuthReducer = (state = [], action) => {

    if( state.length == 0 ){
        return initialState;
    }

    if( action.type == 'editEmail' ){
        return{
            ...state, desemail: action.payload.desemail
        };
    }

    if( action.type == 'editSenha' ){
        return{
            ...state, dessenha: action.payload.dessenha
        };
    }

    if( action.type == 'editNome' ){
        return{
            ...state, desnome: action.payload.desnome
        };
    }

    if( action.type == 'editId' ){
        return{
            ...state, iduser: action.payload.iduser
        };
    }

    return state;
};

export default AuthReducer; 