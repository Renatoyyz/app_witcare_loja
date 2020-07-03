import * as yup from 'yup';


export const validaEmail =  yup.object().shape({

    email: yup
      .string()
      .email()
      .required(),

});

export const validaNome = yup.object().shape({

    nome: yup
      .string()
      .min(3)
      .required(),

});

export const validaSenha = yup.object().shape({

    senha: yup
      .string()
      .min(6)
      .required(),

});

    