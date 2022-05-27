var express = require('express');
var router = express.Router();
const db = require('../../modules/mysql_config');

// router.get('/', function (req, res, next) {
//     res.send('PRODUCT');
// });

router.route('/')
.get(async(req,res,next)=>{
    const sql = "SELECT * FROM product_main"
    const [datas] = await db.query(sql)
    res.json(datas)
})

// router.get('/',function(req,res,next){
//     db.query(
//         'SELECT * FROM product_main order by product_name',function(err,results,fields){
//             res.json(results)
//             console.log(results)
//         }
//     )
// })



module.exports = router;
