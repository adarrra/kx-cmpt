var generators = require('yeoman-generator');
var changeCase = require('change-case');
var chalk = require('chalk');

module.exports = generators.Base.extend({
    prompting: function() {
        return this.prompt([{
            type: 'input',
            name: 'author',
            message: 'Your name for copyright',
            store: true
        }, {
            type: 'input',
            name: 'mail',
            message: 'Your email for copyright',
            store: true
        }, {
            type: 'input',
            name: 'path',
            message: 'path to angular module e.g. app/map',
        }, {
            type: 'input',
            name: 'name',
            message: 'component name e.g. location editor',
        }]).then(function(props) {
            this.props = props;
            this.props.usedName = changeCase.upperCaseFirst(changeCase.camelCase(this.props.name));
            this.props.fsName = changeCase.snakeCase(this.props.name)
        }.bind(this));
    },
    writing: function() {
        const folder = this.props.fsName;

        const files = {
            component: `${folder}/${this.props.fsName}_cmpt.js`,
            template: `${folder}/${this.props.fsName}.html`,
            stylus: `${folder}/${this.props.fsName}.styl`,
        };

        this.fs.copyTpl(
            this.templatePath('component/template.html'),
            this.destinationPath(files.template),
            this.props
        );
        this.fs.copyTpl(
            this.templatePath('component/style.styl'),
            this.destinationPath(files.stylus),
            this.props
        );
        this.fs.copyTpl(
            this.templatePath('component/component.js'),
            this.destinationPath(files.component),
            this.props
        );
    }
});
