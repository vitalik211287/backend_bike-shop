const {Product} = require("../../models/product")


const add = async (req, res) => {
  const{_id: owner} = req.user;
   const result =  await Product.create({...req.body, owner});
  res.status(201).json(
    // {
    // status: "success",
    // code: 201,
    // data: {
      // result: 
      result,
  //   },
  // }
  );
};

module.exports = add;
