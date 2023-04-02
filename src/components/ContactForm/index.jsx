import "./styles.css"
import { useForm } from 'react-hook-form'

/**
 * A form using the react-hook-form with great error handling for many scenarios and multiple issues while writing the same input as long as it doesn't meet the requirements.
 */

export function ContactForm() {

  const { register, handleSubmit, formState: {errors} } = useForm();

  return (
    <main>
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
      })} className="formStyling">
        <h1>Contact Form</h1>
        <div>
          <p>Full name</p>
          <input {...register("fullName", { required: "Please enter your full name.", minLength: { value: 3, message: "It must be at least 3 letters long" } })} placeholder="Billy Bob"/>
          <p className='errorMessage'>{errors.fullName?.message}</p>
        </div>
        <div>
          <p>Email</p>
          <input {...register("email", { required: "Please enter a valid email.", pattern: { value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/, message: "Please enter a valid email"}})} placeholder="example@email.com"/>
          <p className='errorMessage'>{errors.email?.message}</p>
        </div>
        <div>
          <p>Subject</p>
          <input {...register("subject", { required: "Please enter the subject.", minLength: { value: 3, message: "Min length is 3" } })} placeholder="Subject"/>
          <p className='errorMessage'>{errors.subject?.message}</p>
        </div>
        <div>
          <p>Body</p>
          <textarea rows="7" {...register("bodyText", { required: "Please describe the subject matter.", minLength: { value: 3, message: "Please describe it in more than 2 characters." } })} placeholder="Body text"/>
          <p className='errorMessage'>{errors.bodyText?.message}</p>
        </div>
        <input type="submit" className='formButton'/>
      </form>
    </main>
  )
}