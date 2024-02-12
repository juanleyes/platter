import {
  contact__wrapper,
  contact__title,
  form__container,
  form__field,
  form__input,
  form__btn,
  label,
} from "./ContactForm.module.css";

function ContactForm() {
  return (
    <div id={contact__wrapper}>
      <h1 className={contact__title}>CONTÁCTATE CON NOSOTROS</h1>
      <form className={form__container}>
        <div className={form__field}>
          <label htmlFor="name" className={label}>
            Nombre
          </label>
          <input
            name="name"
            type="text"
            placeholder="Steven"
            className={form__input}
            autoComplete="off"
          />
        </div>
        <div className={form__field}>
          <label htmlFor="surname" className={label}>
            Apellido
          </label>
          <input
            name="surname"
            type="text"
            placeholder="Adler"
            className={form__input}
            autoComplete="off"
          />
        </div>
        <div className={form__field}>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="steven@platter.com"
            className={form__input}
            autoComplete="off"
          />
        </div>
        <div className={form__field}>
          <label htmlFor="email" className={label}>
            Mensaje
          </label>
          <input
            name="msg"
            type="text"
            className={form__input}
            autoComplete="off"
          />
        </div>
        <input type="submit" className={form__btn} value="Enviar" />
      </form>
    </div>
  );
}

export default ContactForm;
