module.exports = {
  rules: {
    // Template-related
    'vue/no-multiple-template-root': 'error',
    'vue/no-v-model-argument': 'error',
    'vue/no-deprecated-v-bind-sync': 'error',
    'vue/no-deprecated-v-on-native-modifier': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-deprecated-filter': 'error',

    // Other
    'vue/no-deprecated-dollar-listeners-api': 'error',
    'vue/require-explicit-emits': 'error',

    // enforce alternative exports from `@vue-bridge/runtime`
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'vue',
            importNames: ['defineComponent'],
            message:
              "Please use `import { defineComponent } from '@vue-bridge/runtime'` instead.",
          },
          {
            name: '@vue/testing-library',
            message:
              'Please use `@vue-bridge/testing` instead. It has all of the exports of `@vue/testing-library available`',
          },
        ],
      },
    ],
    'no-restricted-properties': [
      'error',
      {
        property: '$attrs',
        message: 'Please use $_attrs from attrsListenersMixin instead',
      },
      {
        property: '$listeners',
        message: 'Please use $_listeners from attrsListenersMixin instead',
      },
      {
        property: '$set',
        message: 'Please use `set()` exported from `@vue-bridge/runtime`',
      },
      {
        property: '$delete',
        message: 'Please use `del()` exported from `@vue-bridge/runtime`',
      },
    ],
  },
}