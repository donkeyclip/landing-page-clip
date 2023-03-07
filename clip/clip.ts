import { HTMLClip } from "@donkeyclip/motorcortex";
import css from "./clip.css";
import html from "./clip.html";
import { width } from "./effects/width";
import { scale } from "./effects/scale";
import { opacity } from "./effects/opacity";
import { left } from "./effects/left";

import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";

const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap`,
    },
  ],
});

clip.addIncident(scale(1,".clip-wrapper",500,"easeInOutCubic"),0);
clip.addIncident(scale(1,".clip-wrapper .item .image-wrapper",200,"easeInOutCubic","@stagger(0,600)"),600);


 clip.addIncident(width("460px",".content-wrapper",500,"easeInOutCubic"),1300);
 clip.addIncident(left("-160px",".clip-wrapper .item",500,"easeInOutCubic"),1300);
 clip.addIncident(width("250px",".line1",300,"easeInOutCubic"),1800);
 clip.addIncident(width("205px",".line2",300,"easeInOutCubic"),1900);
 clip.addIncident(width("90px",".line3",300,"easeInOutCubic"),2000);

clip.addIncident(left("170px",".clip-wrapper",700,"easeInOutCubic"),2300);
clip.addIncident(opacity(1,".d-title",300,"easeInOutCubic"),3000);
clip.addIncident(scale(1,".d-wrapper .box",300,"easeInOutCubic"),3300);
clip.addIncident(opacity(1,".d-item.item1",1,"easeInOutCubic"),3800);
clip.addIncident(opacity(1,".d-item.item2",1,"easeInOutCubic"),4200);
clip.addIncident(opacity(1,".d-item.item3",1,"easeInOutCubic"),4600);

clip.addIncident(opacity(1,".image",500,"easeInOutCubic"),5000);

clip.addIncident(opacity(1,".p-title",300,"easeInOutCubic"),6200);
clip.addIncident(scale(1,".p-wrapper .box",300,"easeInOutCubic"),6500);

clip.addIncident(left("36%",".p-item",500,"easeInOutCubic"),6900);
clip.addIncident(opacity(0.2,".p-item",1,"easeInOutCubic"),6900);
clip.addIncident(opacity(1,".p-item.item1",300,"easeInOutCubic"),7400);
clip.addIncident(scale(1.3,".p-item.item1",300,"easeInOutCubic"),7400);
clip.addIncident(opacity(1,".blue.cw",400,"easeInOutCubic"),7400);

clip.addIncident(left("0%",".p-item",300,"easeInOutCubic"),8400);
clip.addIncident(opacity(0.2,".p-item.item1",300,"easeInOutCubic"),8400);
clip.addIncident(scale(1,".p-item.item1",300,"easeInOutCubic"),8400);
clip.addIncident(opacity(1,".p-item.item2",300,"easeInOutCubic"),8700);
clip.addIncident(scale(1.3,".p-item.item2",300,"easeInOutCubic"),8700);
clip.addIncident(opacity(1,".purple.cw",400,"easeInOutCubic"),8700);

clip.addIncident(left("-36%",".p-item",300,"easeInOutCubic"),9700);
clip.addIncident(opacity(0.2,".p-item.item2",300,"easeInOutCubic"),9700);
clip.addIncident(scale(1,".p-item.item2",300,"easeInOutCubic"),9700);
clip.addIncident(opacity(1,".p-item.item3",300,"easeInOutCubic"),10000);
clip.addIncident(scale(1.3,".p-item.item3",300,"easeInOutCubic"),10000);
clip.addIncident(opacity(1,".pink.cw",400,"easeInOutCubic"),10000);

clip.addIncident(left("-100%",".p-item",500,"easeInOutCubic"),11000);
clip.addIncident(opacity(0,".p-item",300,"easeInOutCubic"),11000);
clip.addIncident(scale(1,".p-item.item3",300,"easeInOutCubic"),11000);
clip.addIncident(opacity(0,".blue.cw,.purple.cw,.pink.cw",300,"easeInOutCubic"),11000);
clip.addIncident(scale(0,".p-wrapper .box",300,"easeInOutCubic"),11300);
clip.addIncident(opacity(0,".p-title",300,"easeInOutCubic"),11300);

clip.addIncident(opacity(0,".image,.d-item",300,"easeInOutCubic"),11700);
clip.addIncident(scale(0,".d-wrapper .box",300,"easeInOutCubic"),12000);
clip.addIncident(opacity(0,".d-title",300,"easeInOutCubic"),12000);

clip.addIncident(left("570px",".clip-wrapper",500,"easeInOutCubic"),12500);


clip.addIncident(opacity(0,".line",1,"easeInOutCubic"),13100);
clip.addIncident(width("0px",".content-wrapper",500,"easeInOutCubic"),13100);
clip.addIncident(left("0px",".clip-wrapper .item",500,"easeInOutCubic"),13100);

clip.addIncident(scale(0,".clip-wrapper .item .image-wrapper",300,"easeInOutCubic"),13800);
clip.addIncident(scale(0,".clip-wrapper",500,"easeInOutCubic"),14300);

export { clip };
