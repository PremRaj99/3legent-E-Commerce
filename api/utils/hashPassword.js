import bcryptjs from "bcryptjs";

export default function hashPassword(password) {
  const salt = bcryptjs.genSaltSync(10);
  const hashPassword = bcryptjs.hashSync(password, salt);
  return hashPassword;
}
