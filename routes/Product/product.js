var express = require('express');
var router = express.Router();
const db = require('../../modules/mysql_config');

// router.get('/', function (req, res, next) {
//     res.send('PRODUCT');
// });

router.get('/',async(req,res,next)=>{
    console.log(req);
    const sql = "SELECT * FROM product_main"
    const [datas] = await db.query(sql)
    res.json(datas)
    // console.log(datas)
})
router.get('/brand',async(req,res,next)=>{
    console.log(req);
    
    const sql = "SELECT * FROM product_brand"
    const [datas] = await db.query(sql)
    res.json(datas)
    // console.log(datas)
})




router.route('/introduce/:id')
    .get(async(req,res,next)=>{
        const id = req.params.id
        // console.log(id);
        // const getId = url.parse(req.url).query
        // console.log(getId)
        // res.json(1)
        const sql = "SELECT * FROM product_main WHERE product_id=?"
        const [datas] = await db.query(sql,[id])
        res.json(datas)
        // console.log(datas)
    })
    .put(async(req,res,)=>{
        const id = req.params.id
        const sql = "UPDATE product_main SET product_like=? WHERE product_id=?"
        const [datas] = await db.query(sql,[req.body.setLike, id])
        res.json(datas)
        console.log(datas)
    })

router.get('/category/:categoryDetail', async(req,res,next)=>{
    const categoryDetail = req.params.categoryDetail
    // console.log(categoryDetail);
    // const getId = url.parse(req.url).query
    // console.log(getId)
    // res.json(1)
    const sql = "SELECT * FROM product_main WHERE product_category_detail=?"
    const [datas] = await db.query(sql,[categoryDetail])
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
