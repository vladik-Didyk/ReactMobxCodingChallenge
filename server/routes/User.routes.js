const { Router } = require('express')
const router = Router()
const userModel = require('../../userModel')


router.post('/Update',

async (req, res)=>{
try{
  const reqUserModel = req.body
  const newUserModel = await userModel.findOne({reqUserModel})
  if(newUserModel) return res.status(400).json({message : 'This user is already exists'})

  const newUser = new UserModel(reqUserModel)
  await newUser.save()
  res.status(200).json({message: ' Created'})
} catch(error){
  res.status(501).json({ message: 'Errors' })
}
  if (!checkErrorValidation.isEmpty()) return res.status(404).json({
    errors: checkErrorValidation.array(),
    message: 'Error in validation'
})

})


module.exports = router