
export const editEmail = (desemail) => {

    return{
        type: 'editEmail',
        payload: {
            desemail:desemail
        }
    };

};

export const editSenha = (dessenha) => {

    return{
        type: 'editSenha',
        payload: {
            dessenha:dessenha
        }
    };

};

export const editNome = (desnome) => {

    return{
        type: 'editNome',
        payload: {
            desnome:desnome
        }
    };

};

export const editId = (iduser) => {

    return{
        type: 'editId',
        payload: {
            iduser:iduser
        }
    };

};