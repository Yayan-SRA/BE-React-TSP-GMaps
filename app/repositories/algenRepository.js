const { algenModel } = require("../models");

module.exports = {
  create(createArgs) {
    console.log("masuk repo")
    return algenModel.create(createArgs);
  },

  update(id, updateArgs) {
    return algenModel.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    console.log("masuk repo")
    return algenModel.destroy({where: {id:id}});
  },

  find(id) {
    return algenModel.findByPk(id);
  },

  findAll() {
    return algenModel.findAll({
      order: [
        ['startingPoint', 'DESC'],
        ['id', "ASC"]
      ]
    });
  },

  getTotalalgenModel() {
    return algenModel.count();
  },
};
