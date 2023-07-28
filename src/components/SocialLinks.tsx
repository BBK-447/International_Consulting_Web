import {FaYoutube, FaTwitter, FaDiscord } from 'react-icons/fa'
export const SocialLinks = () => {
    return (
        <section className="mt-5">
            <h3 className="text-3xl font-extrabold"> Mes réseaux sociaux </h3>
            <ul>
                <li className='flex items-center'><FaYoutube className='mr-3'/><a className="hover:text-[#4d47f4]" href="">Youtube</a></li>
                <li className='flex items-center'><FaTwitter className='mr-3'/><a className="hover:text-[#4d47f4]" href="">Twitter</a></li>
                <li className='flex items-center'><FaDiscord className='mr-3'/><a className="hover:text-[#4d47f4]" href="">Discord</a></li>
            </ul>
        </section>
    )
}