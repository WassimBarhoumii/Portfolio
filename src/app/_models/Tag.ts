export class Tag{
    static readonly ANGULAR = new Tag('Angular', '#dd0031');
    static readonly LARAVEL = new Tag('Laravel', '#ff2d20');
    static readonly PHP = new Tag('Php', '#777bb4');
    static readonly SQL = new Tag('Sql', '#336791');
    static readonly SPRINGBOOT = new Tag('Springboot', '#6db33f');
    static readonly WORDPRESS = new Tag('Wordpress', 'purple');
    static readonly JAVA = new Tag('Java', '007396');
    static readonly CSS = new Tag('Css', '#1572b6');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#D81159');
    static readonly MONGODB = new Tag('MongoDB', 'black');
    static readonly REACTJS = new Tag('React.JS', '#D81159');
    static readonly JAVASCRIPT = new Tag('Javascript', '#f7df1e');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
    static readonly HTML = new Tag('HTML', '#e34c26');

    private constructor(private readonly key: string, public readonly color: string){

    }
    toString() {
        return this.key;
    }
}