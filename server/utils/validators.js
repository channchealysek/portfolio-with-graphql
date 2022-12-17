module.exports.validateRegisterInput = (
  username,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }

  if (password === "") {
    errors.password = "Password must not empty";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateNewProjectInput = (
  title,
  description,
  imageURL,
  githubURL,
  liveURL
) => {
  const errors = {};
  if (title.trim() === "") {
    errors.title = "Title must not be empty";
  }
  if (description.trim() === "") {
    errors.description = "Description must not be emty";
  }
  if (imageURL.trim() === "") {
    errors.imageURL = "URL image must not be emty";
  }
  if (githubURL.trim() === "") {
    errors.githubURL = "URL Github must not be emty";
  }
  if (liveURL.trim() === "") {
    errors.liveURL = "URL live project must not be emty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};
