import gulp from 'gulp'
import { gulp as i18nextParser } from 'i18next-parser'

export const locales = ['en', 'ru', 'es']

const config = {
  verbose: true,
  sort: true,
  lexers: {
    js: ['JsxLexer'],
    default: ['JavascriptLexer'],
    handlebars: [
      {
        lexer: 'HandlebarsLexer',
        functions: ['t'],
      },
    ],
  },
  locales,
  output: 'locales/$LOCALE.json',
  createOldCatalogs: false,
  defaultNamespace: 'translation',
}

gulp.task('i18next', function () {
  return gulp
    .src(
      'src/{_core,components,domains,hooks,layouts,schemas,_libs,types}/**/*.{ts,tsx}'
    )
    .pipe(new i18nextParser(config))
    .pipe(gulp.dest('./'))
})
