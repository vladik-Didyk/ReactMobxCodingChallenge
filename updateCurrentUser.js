import UserSchema from './userModel';



const updateCurrentUser = async (currentUserID, update) => {
  try {

    const userSettings = await UserSchema.findOneAndUpdate(currentUserID, update);

    if (!userSettings) {
      return await Promise.reject('User does not exist')
      // res.status(404).json({message : 'User does not exist' })  
    }

    userSettings.updatedAt;

  } catch (err) {
    const newUser = await new UserSchema.create({ id: currentUserID });
    await newUser.save()

    newUser.createdAt;
    newUser.updatedAt;
    newUser.createdAt instanceof Date;

  }
};

// Please comment out all your code when you are finished.
