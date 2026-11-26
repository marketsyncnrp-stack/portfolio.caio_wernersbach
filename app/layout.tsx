import './style.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'Caio Wernersbach | Design & Desenvolvimento Digital',description:'Sites autorais, landing pages, redesign e sistemas digitais. Design e tecnologia sob medida para seu negócio.',openGraph:{title:'Caio Wernersbach | Digital Studio',description:'Sua marca merece mais do que um site.',type:'website',locale:'pt_BR'},icons:{icon:'/icon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
