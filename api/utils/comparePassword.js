import bcryptjs from "bcryptjs";

export default function comparePassword(password, dbPassword) {
  const comparePassword = bcryptjs.compareSync(password, dbPassword);
  return comparePassword;
}
