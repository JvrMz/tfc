const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendQuery } = require('../../db/connectToDB.js');

async function loginUserController (req, res, next) {

	const { email, password } = req.body;

	try {
		const [result] = await sendQuery(
			'SELECT * FROM users WHERE email = ?', [email]
			);
			
		if (!result) {
			res.status(401).send('Credenciales invalidas');
		} 

		const passwordmatch = await bcrypt.compare(password, result.password);
		
		if(!passwordmatch){
			return res.status(401).send('Usuario y login incorrectos');
		}
	

		const infoUser = {
			user_id: result.id,
			username: result.username,
		};

		const token = jwt.sign(infoUser, process.env.JWT_SECRET, { expiresIn: '1w'});

		res.header({'x-access-token': token});

		res.send({
			ok: true,
			username: result.username,
			data: token, 
			role: result.role,
			mensaje: 'Se ha iniciado sesion' });
	} catch (error) {
		next(error);
	}
};

module.exports = loginUserController;