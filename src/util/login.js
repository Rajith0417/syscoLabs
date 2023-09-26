export function login({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "111111" && !!email) {
        resolve();
      } else {
        reject(new Error("Invalid email or password!"));
      }
    }, 2500);
  });
}
