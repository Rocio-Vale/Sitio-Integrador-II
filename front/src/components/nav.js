'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Nav() {
    const pathname = usePathname();
    const isActive = (path) => path == pathname;

    return (
        <nav>
            <ul>
                <li><Link className={isActive("/") ? "activo" : ""} href="/">Home</Link></li>
                <li><Link className={isActive("/nosotros") ? "activo" : ""} href="/nosotros">Nosotros</Link></li>
                <li><Link className={isActive("/servicios") ? "activo" : ""} href="/servicios">Servicios</Link></li>
                <li><Link className={isActive("/galeria") ? "activo" : ""} href="/galeria">Galeria</Link></li>
                <li><Link className={isActive("/novedades") ? "activo" : ""} href="/novedades">Novedades</Link></li>
                <li><Link className={isActive("/contacto") ? "activo" : ""} href="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
};