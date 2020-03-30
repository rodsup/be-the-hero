const connection = require('../database/connection');
const crypto = require('crypto'); //módulo de criptografia para gerar numeros aleatórios

module.exports = {
    
    //serve para listar os dados cadastrados no banco de dados
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    // seve para postar os dados no banco de dados de acordo com as funcionalidades do app
    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    },

    async delete (request, response){
        const { id } = request.body;
        const ong_id = request.headers.authorization;
        
        if (ong_id != id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('ongs').where('id', ong_id).delete();

        return response.status(204).send();
    }   
};