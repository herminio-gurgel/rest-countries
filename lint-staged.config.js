export default {
  '*.{js,ts,vue}': ['eslint --fix', 'prettier --write'],
  '*.{html,css,yaml,md,json}': 'prettier --write',
  '*.{ts,vue}': 'vitest related --run',
  '**/*.{ts,vue}': () => 'vue-tsc --build',
  '*.{scss,css,vue}': 'stylelint --fix',
}
