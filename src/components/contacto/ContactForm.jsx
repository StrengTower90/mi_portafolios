import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import SpinningCircle from "../../shared-components/loaders/spinning-circle/SpinningCircle";
import "./ContactForm.css";

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("xzzgabzo");

    if (state.succeeded) {
        return (
            <div className="contact-greetings">
                <FontAwesomeIcon icon={faFaceSmileBeam} className="greetings-icon" />
                !Thanks for Join Us
            </div>
        )
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="form-inputs">
                <div className="email">
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className="name">
                    <label htmlFor="fullName">
                        Full Name:
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        name="fullName"
                    />
                </div>
            </div>
            <div className="message">
                <label htmlFor="message">
                    Message:
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <button type="submit" disabled={state.submitting}>
                {state.submitting && <SpinningCircle size={25} />}
                {!state.submitting &&
                    <div className="button-text">
                        Submit &nbsp;
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>}
            </button>
        </form>
    )
}

// export const ContactForm = () => {
//     return (
//         <form
//             action="https://formspree.io/f/xzzgabzo"
//             method="POST"
//         >
//             <label htmlFor="email">
//                 Your Email:
//             </label>
//             <input type="email" name="email"/>
//             <label htmlFor="message">
//                 Message
//             </label>
//             <textarea name="message" />
//             <button type="submit">Send</button>
//         </form>
//     )
// }; 