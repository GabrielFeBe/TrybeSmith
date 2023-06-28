import bcrypt from 'bcryptjs';


export const validLogin = {
  username: 'validUsername',
  password: 'validPassword'
}
export const invalidUsername = {
  username: 'invalidUsername',
  password: bcrypt.hashSync('validPassword')
}
export const invalidPassword = {
  username: 'validUsername',
  password: bcrypt.hashSync('invalidPassword')
}

export const userToBuild = {
  username: 'validUsername',
  vocation: 'Warrior',
  level: 20,
  password: bcrypt.hashSync('validPassword')
};

export const nullValuesLogin = {
  username: '',
  password: ''
}

export const validReq = {
  status: 'SUCESS',
  message: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJIYWdhciIsImlhdCI6MTY4Njc1NDc1Nn0.jqAuJkcLp0RuvrOd4xKxtj_lm3Z3-73gQQ9IVmwE5gA"
}