export const validateField = (field, message, res) => {

  try {
    if(!field) {
      return res.status(422).json({ message: message });
    };
    return;

  } catch (err) {
    console.log(err.message);
  };
};
