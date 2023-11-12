export function login({ email, password }) {
  return new Promise((resolve, reject) => {
    console.log(email+"-"+password);
    setTimeout(() => {
      if (password === "123" && !!email) {
        resolve();
      } else {
        reject(new Error("Invalid email or password!"));
      }
    }, 2500);
  });
}
