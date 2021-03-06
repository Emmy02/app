var Base = mongoose.model('Base');

router.route('/centrals/:id/bases')

//create a new post
.post(function(req, res) {

  //TODO create a new post in the database
  res.send({
    message: "New base"
  });
})

.get(function(req, res) {

  //TODO get all the posts in the database
  res.send({
    message: "get all bases"
  });
})

//api for a specfic post
router.route('/centrals/:id/bases/:id')

//create
.put(function(req, res) {
  return res.send({
    message: 'Updating' + req.params.id
  });
})

.get(function(req, res) {
  return res.send({
    message: 'TODO get an existing post by using param ' + req.params.id
  });
})

.delete(function(req, res) {
  return res.send({
    message: 'TODO delete an existing post by using param ' + req.params.id
  })
});
module.exports = router;