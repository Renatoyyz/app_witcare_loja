import Sequelize, { Model } from 'sequelize';

class Tb_user extends Model {//Tb_user

    static init(sequelize){//init
        super.init(
            {
                desnome: Sequelize.STRING,
                desemail: Sequelize.STRING,
                dessenha: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

    }//init


}//Tb_user

export default Tb_user;