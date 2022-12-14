module.exports = {
  extends: ['@commitlint/config-conventional'], // 继承的规则
  // 自己新增规则
  rules: {
    'type-enum': [
      2, // 验证的错误级别 error == 2
      'always', // 什么情况下验证 任何情况下验证
      [
        // 验证范型 和 上面 type 对应
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build'
      ]
    ],
    'subject-case': [0] // 大小写不做校验
  }
}
