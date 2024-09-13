declare module 'nodemailer-express-handlebars' {
    import { Options } from 'nodemailer/lib/mailer';
    import { PluginFunction } from 'nodemailer/lib/mailer';
  
    interface NodemailerExpressHandlebarsOptions {
      viewEngine: {
        extName: string;
        partialsDir: string;
        layoutsDir?: string;
        defaultLayout?: string | false;
      };
      viewPath: string;
      extName: string;
    }
  
    function nodemailerExpressHandlebars(
      options: NodemailerExpressHandlebarsOptions
    ): PluginFunction<any>;
  
    export = nodemailerExpressHandlebars;
  }
  