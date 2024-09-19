import user from "../models/user-model.js";

export const postUserData = async ( req, res) => {
    try {
        const { name, email, password,userName} = req.body;
        console.log(name, email, password,userName);
      
      const userExists = await user.findOne({ email:email });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }

      const userData =  new user({ name, email, password,userName});
      await userData.save();
     return res.status(201).json({ message: "User data saved successfully", success: true, data: userData });   
    } catch (error) {
        res.status(500).json(error.message);
    }   
}

export const getUsersData = async (req, res) => {
    try {
        const getUsers = await user.find();
        return res.status(200).json({ message: "User data fetched successfully", success: true, data: getUsers });
    } catch (error) {
       return res.status(500).json(error.message);
    }
}   

export const getUserById = async (req, res) => {
    try {
        const { getuserId } = req.params;
        const getUser = await user.findById(getuserId);
        return res.status(200).json({ message: "User data fetched successfully", success: true, data: getUser });
    } catch (error) {
        return res.status(500).json(error.message);
     }
 }

 
 export const delUser = async (req, res) => {
     try {
         const { deluserId } = req.params.id;
         const delUser = await user.findByIdAndDelete(deluserId);
         return res.status(200).json({ message: "User data deleted successfully", success: true, data: delUser });
     } catch (error) {
        return res.status(500).json(error.message);
     }
 }