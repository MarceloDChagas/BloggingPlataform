import { IMailService } from "../../../adapters/email/IMailService";
import { findQuestionCase } from "../FindQuestion/FindQuestionConfig";
import { findUserUseCase } from "../FindUser/FindUserConfig";
import { from } from "../../../adapters/email/gmail/GmailMailRepository";

export class SendQuestionCase {
  constructor(private MailRepository: IMailService) {}
  async executeSendQuestion() {
    try {
      const user = await findUserUseCase.executeFindAllUsers();
      if (user === null) {
        throw new Error("User not found");
      }
      console.log(user);
      const question = await findQuestionCase.executeFindRandomQuestion();
      const mailOptions = {
        to: `${user[3].email}`,
        subject: `Exercício de ${question.schoolSubject}`,
        from: `from`,
        body: "Cansou de enviar   e-mails? Use o Nodemailer!",
        html: `<p><strong>Bom dia, ${user[3].name} do </strong> ${user[3].college}</p>
        <p><strong>Título:</strong> ${question.title}</p>
               <p><strong>Nível:</strong> ${question.level}</p>
               <p><strong>Matéria Escolar:</strong> ${question.schoolSubject}</p>
               <p><strong>Corpo da Pergunta:</strong></p>
               <p>${question.body}</p>`,
      };

      await this.MailRepository.sendMail(mailOptions);
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
    }
  }
}

export default SendQuestionCase;
