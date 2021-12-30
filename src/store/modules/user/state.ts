import { TECHNOLOGY } from "@/core/technology";
import { UserState } from "./interfaces";

export const state: UserState = {
  userItems: [
    {
      id: "1",
      name: " Quill",
      contact: {
        email: "quill.liang@gmail.com",
        phone: "0989898989",
      },
      birthDate: new Date("1998-10-15"),
      image:
        "https://ipatinyios.weeblysite.com/uploads/b/ab093ed8f733b211f916e3cd775ec83eb2d00e1e5a8ab843e966f232bc24560c/cute-animal-showing-fuck-you-symbol_23-2148678716-removebg-preview_1602581999.png",
      introduction: "I am Nodejs Developer",
      certificate: [
        {
          title: "Oracle 8",
          content: "Java Oracle 8 Certificate",
          receivedAt: new Date(),
          image:
            "https://certwizard.com/sites/default/files/2020-05/Certified-Associate-JAVA-SE8-PROGRAMMER%20CertWizard.png",
          priority: true,
        },
      ],
      exp: [
        {
          company: "Mely Soft",
          job: "Cocos Creator Developer",
          start: new Date("2020-03-12"),
          leave: new Date("2021-08-02"),
          location: "Ha Noi",
          position: "Fresher Game Cocos Creator",
          website: "https://melysoft.com/",
          projects: [
            {
              title: "Win Zombies: Heroes of killing zombies",
              content: "Create new function and update UI for game",
              technology: [
                TECHNOLOGY.TYPESCRIPT,
                TECHNOLOGY.JAVASCRIPT,
                TECHNOLOGY.COCOS_CREATOR,
                TECHNOLOGY.I18N,
              ],
              type: "Game",
            },
          ],
        },
        {
          company: "Techvify",
          job: "Nodejs Developer",
          start: new Date("2021-08-12"),
          location: "Ha Noi",
          position: "Fresher BackEnd Nodejs",
          website: "https://techvify.com.vn/",
          projects: [
            {
              title: "Diginex ESG",
              content: "Create new function and fix bug for Web",
              technology: [
                TECHNOLOGY.TYPESCRIPT,
                TECHNOLOGY.POSTGRESQL,
                TECHNOLOGY.NEST_JS,
                TECHNOLOGY.NODEJS,
                TECHNOLOGY.TYPE_ORM,
                TECHNOLOGY.VUE_JS,
              ],
              type: "Web",
            },
          ],
        },
      ],
    },
  ],
};
