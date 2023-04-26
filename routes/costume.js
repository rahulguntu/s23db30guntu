var express = require('express');
const costume_controlers= require('../controllers/costume');
var router = express.Router();
/* GET costumes */
router.get('/', costume_controlers.costume_view_all_Page );


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('costume', { title: 'Search Result' });
});
router.get('/detail', costume_controlers.costume_view_one_Page);
router.get('/create', costume_controlers.costume_create_Page);
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }

router.get('/update', costume_controlers.costume_update_Page);
router.get('/delete', costume_controlers.costume_delete_Page);
module.exports = router;
