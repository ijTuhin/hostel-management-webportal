const changeAcountValidity = ({ id}) => {
    console.log(id)
  /* fetch(`https://hms-server-side.onrender.com/user/account/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Beared ${token}`,
    },
  })
    .then((response) => response.json())
    .then((value) => {
      console.log(value.message);
    }); */
};

export default changeAcountValidity;
