let config = require('../config')

const mysql = require('mysql');

let db = mysql.createConnection(config.db);

let entries = require('./entries');




// 逢魔密信查询
exports.queryFengMoByKeyWords = (keyword,response) => {
	let ens = Object.assign({}, entries); 
	let sqlStr = `select id, question, answer from fengmomixin where question like '%${keyword}%'`;

	db.query(sqlStr, (err,res) => {
		if(err){
			// throw err;
			ens.code = 0;
			ens.data = {};
			ens.msg = '抱歉，服务器开小差了，请联系开发人员';
			response.status(500).json(ens);
		}
		else {
			ens.code = 1;
			ens.data = res;
			response.json(ens);
		}
	})
}

//悬赏封印查询
exports.queryXuanShangByKeyWords = (keyword, response) =>{
	let ens = Object.assign({}, entries);

	//去除首尾字符串并以空格分割
	let temp = keyword.trim();
	if (temp === ''){
		ens.code = 2;
		ens.data = {};
		response.json(ens);
	}
	let arr = temp.split(' ');

	//条件拼接
	let sqlStr = `select id, clue, god, recommend from xuanshangfengyin where clue like '%${arr[0]}%'`;
	let len = arr.length;
	for(let i=1; i<len; ++i){
		sqlStr += ` and clue like '%${arr[i]}%'`;
	}
	sqlStr += 'order by id'

	console.log(sqlStr)

	db.query(sqlStr, (err,res) => {
		if(err){
			// throw err;
			ens.code = 0;
			ens.data = {};
			ens.msg = '抱歉，服务器开小差了，请联系开发人员';
			response.status(500).json(ens);
		}
		else {
			ens.code = 1;
			ens.data = res;
			response.json(ens);
		}
	})
}