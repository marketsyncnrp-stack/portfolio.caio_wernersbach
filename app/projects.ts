// Replace illustrative previews with authorized screenshots and verified URLs before launch.
export type Project = {id:string;name:string;category:string;type:string;description:string;url?:string;desktop?:string;mobile?:string;theme:string;headline:string;featured:boolean};
export const projects:Project[]=[
{id:'architecture',name:'Arquitetura & interiores',category:'Arquitetura',type:'Sites institucionais',description:'Direção editorial para valorizar espaços, materialidade e identidade de um escritório de arquitetura.',theme:'architecture',headline:'Espaços com significado.',featured:true},
{id:'health',name:'Health & Wellness',category:'Saúde',type:'Landing pages',description:'Uma direção visual centrada em clareza, acolhimento e comunicação de serviços de saúde.',theme:'health',headline:'Cuidado em cada detalhe.',featured:true},
{id:'analytics',name:'MarketSync',category:'Tecnologia',type:'Sistemas',description:'Plataforma de análise de performance, disciplina e comportamento de traders.',theme:'analytics',headline:'Performance, com propósito.',featured:true}];
export const contactUrl=process.env.NEXT_PUBLIC_CONTACT_URL || '';