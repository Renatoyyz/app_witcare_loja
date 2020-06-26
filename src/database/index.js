import React from 'react';
import Sequelize from 'sequelize';
import datavaseConfig from '../config/database';

import Tb_user from '../models/Tb_user';

const models = [Tb_user];

class Database {//Database
    constructor(){//constructor
        this.init();
    }//constructor

    init(){//init
        this.connection = new Sequelize(datavaseConfig);
        models.map( model = model.init(this.connection));
    }//init

}//Database

export default new Database();