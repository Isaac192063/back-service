export const  verfiedToken = (req, res, next) =>{
 const token = req.header("Authorization");

 console.log(token);

 res.status(200).json({
    sucess: true,
    token : token
 })
}