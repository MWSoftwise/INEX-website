'use client'
const ContactForm = () => {

    return(
        <form className="flex flex-col gap-[20px] w-full max-w-[900px]">
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="name" className="font-semibold ml-3">Imię i nazwisko</label>
                        <input id="name" type="text" autoComplete="off" required className="h-[60px] text-[#f7f7f7] font-semibold py-2 px-4 rounded-[10px] bg-form outline-none" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="email" className="font-semibold ml-3">Twój email</label>
                        <input id="email" type="email" autoComplete="off" required className="h-[60px] text-[#f7f7f7] font-semibold py-2 px-4 rounded-[10px] bg-form outline-none" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="message" className="font-semibold ml-3">Twoja wiadomość</label>
                        <textarea id="message" rows={6} minLength={10} maxLength={500} required className="text-[#f7f7f7] font-semibold py-2 px-4 rounded-[10px] bg-form outline-none" />
                    </div>
                    <div className="flex gap-y-2">
                        <input id="consent" type="checkbox" className="w-5 h-5 border-2 border-white bg-blue-900" />
                        <label htmlFor="consent" className="font-semibold ml-3">Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na wiadomość</label>
                    </div>
                    <button type="submit" className="w-[100px] bg-[#f7f7f7] text-[#000022] text-[18px] py-2 px-3 rounded-md font-medium shadow-btn self-end">Wyślij</button>
                </form>
    )
}

export default ContactForm;