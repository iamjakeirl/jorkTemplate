module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', {
      // This will use your .prettierrc settings
    }],
  },
}; 