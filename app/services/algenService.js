const algenRepository = require('../repositories/algenRepository')

module.exports = {
    create(requestBody) {
        console.log("masuk service")
        return algenRepository.create(requestBody);
    },
    update(id, requestBody) {
        return algenRepository.update(id, requestBody);
      },
    
      delete(id) {
        console.log("masuk serv")
        return algenRepository.delete(id);
      },
    
      async list() {
        try {
          const posts = await algenRepository.findAll();
          const postCount = await algenRepository.getTotalalgenModel();
    
          return {
            data: posts,
            count: postCount,
          };
        } catch (err) {
          throw err;
        }
      },
    
      get(id) {
        return algenRepository.find(id);
      },
}