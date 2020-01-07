let express = require('express');
let db = require('./db/mysql')
let router = express.Router();

router.post('/queryXuanShang', (req,res)=>{
	db.queryXuanShangByKeyWords(req.body.keyword, res); //在queryFengMoByKeyWords返回结果，避免异步发送操作
})


router.post('/queryFengMo', (req, res)=>{
	db.queryFengMoByKeyWords(req.body.keyword, res);
})


module.exports = router;
