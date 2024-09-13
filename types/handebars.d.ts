declare module 'nodemailer-express-handlebars' {
    import { Options } from 'nodemailer/lib/mailer';
  
    interface TemplateOptions {
      viewEngine: any;
      viewPath: string;
      extName: string;
    }
  
    function hbs(options: TemplateOptions): (mailOptions: Options) => void;
  
    export default hbs;
  }