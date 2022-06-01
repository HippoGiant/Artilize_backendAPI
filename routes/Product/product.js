var express = require('express');
var router = express.Router();
const db = require('../../modules/mysql_config');

// router.get('/', function (req, res, next) {
//     res.send('PRODUCT');
// });

router.get('/',async(req,res,next)=>{
    console.log(req);
    const sql = "SELECT * FROM product_main LEFT JOIN product_brand ON product_main.product_id = product_brand.product_brand_id"
    const [datas] = await db.query(sql)
    res.json(datas)
    // console.log(datas)
})


router.get('/introduce/:id', async(req,res,next)=>{
    const id = req.params.id
    console.log(id);
    // const getId = url.parse(req.url).query
    // console.log(getId)
    // res.json(1)
    const sql = "SELECT * FROM product_main WHERE product_id=?"
    const [datas] = await db.query(sql,[id])
    res.json(datas)
    // console.log(datas)
})

// .get(async(req,res,next)=>{
//     const brandSql = "SELECT * FROM product_brand"
//     const [brandDatas] = await  db.query(brandSql)
//     res.json(brandDatas)
//     console.log(brandDatas)
// })

// router.get('/',function(req,res,next){
//     db.query(
//         'SELECT * FROM product_main order by product_name',function(err,results,fields){
//             res.json(results)
//             console.log(results)
//         }
//     )
// })



module.exports = router;
