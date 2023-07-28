import {BsLink} from 'react-icons/bs'

export const Resources = () => {
    return(
        <main>
            <h3 className="text-3xl font-extrabold mb-4">Ressources du Site</h3>
            <ul>
                <li className='flex items-center'><BsLink className='mr-3'/><a className="hover:underline" href="">Télécharger Document d'immigration</a></li>
                <li className='flex items-center'><BsLink className='mr-3'/><a className="hover:underline" href="">Créer un compte immigration</a></li>
                <li className='flex items-center'><BsLink className='mr-3'/><a className="hover:underline" href="">Site de l'immigration</a></li>
            </ul>
        </main>
    )
} 