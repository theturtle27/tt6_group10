import { generateToken } from "../utils/generateToken.js";
import userJson from "../data/user.js";
import { v4 as uuidv4 } from "uuid";

export const register = (req, res, next) => {
  console.log("register");
  console.log(userJson);
  const { name, username, password } = req.body;
  if (!name || !username || !password) {
    res.status(400);
    return next(new Error("Please include all fields"));
  }

  // Check if there is an existing user
  let existingUser;

  existingUser = userJson.find((user) => {
    return user.username === username;
  });

  console.log(existingUser);

  if (existingUser) {
    res.status(422);
    return next(
      new Error("Signup failed. The email address is already in use")
    );
  }

  // Create the user
  const createdUser = {
    id: uuidv4(),
    name,
    username,
    password,
  };

  // Generate the jwt token
  const token = generateToken(createdUser.id);

  // Add the user in
  userJson.push(createdUser);

  // Return the response
  res.status(201).json({
    id: createdUser.id,
    name: createdUser.name,
    username: createdUser.username,
    token: token,
  });
};

export const login = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400);
    return next(new Error("Please include all fields"));
  }

  // Check if there is an existing user
  let existingUser;

  existingUser = userJson.find((user) => {
    return user.username === username;
  });

  console.log(existingUser);

  if (!existingUser) {
    res.status(401);
    return next(new Error("Login failed. Invalid username or password"));
  }

  // Check if the password match
  let passwordMatch;
  passwordMatch = password === existingUser.password;

  if (!passwordMatch) {
    res.status(401);
    return next(new Error("Login failed. Invalid username or password"));
  }

  // Generate the token
  const token = generateToken(existingUser.id);

  console.log(token);

  // Return the response
  res.status(200).json({
    id: existingUser.id,
    name: existingUser.name,
    username: existingUser.username,
    token: token,
  });
};
