import './style.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {title:'Caio Wernersbach — Design & Digital Development',description:'Websites autorais, landing pages e experiências digitais.'};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body>{children}</body></html>}