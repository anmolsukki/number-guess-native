const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};

module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['prettier'],
  rules: {
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'prettier/prettier': [RULES.ERROR, { endOfLine: 'auto' }],
    'comma-dangle': RULES.OFF,
    'space-before-function-paren': RULES.OFF,
    'no-shadow': RULES.OFF,
    semi: 0,
  },
};
