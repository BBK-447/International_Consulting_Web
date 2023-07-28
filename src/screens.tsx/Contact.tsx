import { type } from "os"
import {useForm, SubmitHandler} from "react-hook-form"
import emailjs from "@emailjs/browser"

type formInputs = {
    subject: string;
    email : string;
    message : string;
}

export const Contact = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<formInputs>()
    const onSubmit: SubmitHandler<formInputs> = (data) => {
        //console.log(data)
        emailjs.send(
            'service_aphnulc' , 
            'template_26xtk88',
            {
                subject: data.subject,
                email: data.email,
                message: data.message
            },

            'pmATlYzTD0VQe_GJ3'
        )
    }

    return (
        <main>
            <h3 className="text-3xl font-extrabold">Contact</h3>
            

            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                <label className="block" htmlFor="subject">Quel est le sujet du mail</label>
                <input {...register("subject", {required:true})} className="border" name="subject" id="subject" type="text" placeholder="Sujet du mail"/>
                </div>
                
                <div className="mb-3">
                <label className="block" htmlFor="email">Entrer votre mail</label>
                <input {...register("email", {required: true})} className="border" name="email" id="email" type="email" placeholder="Votre mail"/>
                </div>
                {errors.email && <p className="text-[red]">Email requis</p> }

                <div className="mb-3">
                <label className="block" htmlFor="message">Votre message</label>
                <textarea {...register("message")} rows={6} className="border resize-none" name="message" id="message" placeholder="Votre Message"/>
                </div>

                

                 <input type='submit' className="block bg-[gray] text-[white] py-3 px-2 hover:bg-[blue]" />
            </form>
        </main> 
    )
}