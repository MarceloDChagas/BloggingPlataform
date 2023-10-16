import { GmailMailRepository } from "../../../adapters/email/gmail/GmailMailRepository";
import { SendQuestionController } from "./SendQuestionController";
import SendQuestionCase from "./SendQuestionCase";
const gmailMailRepository = new GmailMailRepository();

const sendQuestionCase = new SendQuestionCase(gmailMailRepository);

export const sendQuestionController = new SendQuestionController(
  sendQuestionCase
);
