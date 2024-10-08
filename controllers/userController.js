const userService = require('../services/userService');

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user){ return res.status(404).json({ message: 'Usuário não encontrado' });
        res.status(200).json(user);}
        else{
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createUser,
    getUserById
};