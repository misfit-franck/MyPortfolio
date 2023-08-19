import '../../css/index.css';
import '../../css/Contact.css';
import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactFragment: React.FC = () => {
  const subjectSelectedRef = useRef<HTMLSelectElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const sendMsgButtonRef = useRef<HTMLButtonElement | null>(null);
  const notificationPopRef = useRef<HTMLDivElement | null>(null);

  const EMJS_KEY = 'dB7691vk2QTX1ueRk';

  useEffect(() => {
    emailjs.init(EMJS_KEY);
  }, []);

  const disableControllers = (confirm: boolean) => {
    if (confirm) {
      nameRef.current!.disabled = true;
      emailRef.current!.disabled = true;
      subjectSelectedRef.current!.disabled = true;
      messageRef.current!.disabled = true;
      sendMsgButtonRef.current!.disabled = true;
    } else {
      nameRef.current!.disabled = false;
      emailRef.current!.disabled = false;
      subjectSelectedRef.current!.disabled = false;
      messageRef.current!.disabled = false;
      sendMsgButtonRef.current!.disabled = false;
    }
  };

  const clearControllers = () => {
    nameRef.current!.value = '';
    emailRef.current!.value = '';
    messageRef.current!.value = '';
  };

  const hideNotifPopsOnTimer = (timer: number) => {
    setTimeout(() => {
      notificationPopRef.current!.style.display = 'none';
      notificationPopRef.current!.style.transition = 'display .4s all';
    }, timer);
  }

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMsgButtonRef.current!.textContent = 'Dispatching...';
    disableControllers(true);

    const templateParams = {
      to_name: nameRef.current!.value,
      from_email: emailRef.current!.value,
      interrests: subjectSelectedRef.current!.value,
      message: messageRef.current!.value,
    };

    // sending...
    emailjs
      .send('service_kla9gxi', 'contact_form-temp', templateParams)
      .then((response) => {
        console.table({'message': response, 'dispatched': true});
        notificationPopRef.current!.style.display = 'inherit';
        notificationPopRef.current!.style.color = 'green';
        sendMsgButtonRef.current!.textContent = 'Dispath.';

        hideNotifPopsOnTimer(5000);

        disableControllers(false);
        clearControllers();
        nameRef.current!.focus();
      }, (reason) => {
        console.table({'message': reason, 'dispatched': false});
        notificationPopRef.current!.textContent = 'Failed to dispatch your message, error occurend';
        notificationPopRef.current!.style.display = 'inherit';
        notificationPopRef.current!.style.color = 'red';
        sendMsgButtonRef.current!.textContent = 'Dispath.';

        hideNotifPopsOnTimer(5000);
        disableControllers(false);
      });
  };

  return (
    <>
      <div className='app-contact-content'>
        <div className='app-contact-content__review'>
          <h1 data-aos='fade-up'>
            I'D LOVE TO HEAR FROM YOU,
            <br />
            Get in touch.
          </h1>
          <p data-aos='fade-right'>
            Contact me using the form on this page or by using the network links
            below.
          </p>
          <h4>
            <br />
            <br />
            Hire me on
          </h4>
          <div className='flex-center'>
            <div>
              <a href='https://www.linkedin.com/in/franck-mekoulou/' target='_blank' rel='noopener'>
                <img src='../../src/assets/icons/linkedln.png' alt='Linkedin' />
              </a>
            </div>
            <div>
              <a href='https://www.facebook.com/profile.php?id=100091249239627' target='_blank' rel='noopener'>
                <img src='../../src/assets/icons/facebook.png' alt='Facebook' />
              </a>
            </div>
            <div>
              <a href='https://twitter.com/FMekoulou01001' target='_blank' rel='noopener'>
                <img src='../../src/assets/icons/twitter.png' alt='Twitter' />
              </a>
            </div>
            <div>
              <a href='https://github.com/misfit-franck' target='_blank' rel='noopener'>
                <img src='../../src/assets/icons/github.png' alt='Github' />
              </a>
            </div>
            <a href='mailto:log.franckmekoulou@outlook.com'>
              log.franckmekoulou@outlook.com
            </a>
          </div>
        </div>
        <div className='app-contact-content__form' data-aos='fade-left'>
          <form id='form' onSubmit={(e) => sendMessage(e)}>
            <div>
              <label htmlFor='usr-input-name'>Your Name</label>
              <input
                type='text'
                id='usr-name'
                name='usr-input-name'
                className='usr-input-name'
                placeholder='Write your name'
                required
                ref={nameRef}
              />
            </div>
            <div>
              <label htmlFor='usr-input-email'>You Email</label>
              <input
                type='text'
                id='usr-email'
                name='usr-input-email'
                className='usr-input-email'
                placeholder='Write your email here'
                required
                ref={emailRef}
              />
            </div>
            <div>
              <label htmlFor='usr-input-interest'>What your interested</label>
              <select
                name='usr-input-interest'
                id='usr-input-interest'
                ref={subjectSelectedRef}
              >
                <option defaultValue='New Development'>New Development</option>
                <option value='Collaboration'>Collaboration</option>
                <option value='Build a project'>Build a project</option>
                <option value='Become a open source project'>
                  Become a open source project
                </option>
                <option value='Meet me'>Meet me</option>
              </select>
            </div>
            <div>
              <label htmlFor='usr-input-email'>Message</label>
              <textarea
                name='message-area'
                id='usr-message'
                cols={30}
                rows={4}
                placeholder='Write your message here.'
                required
                ref={messageRef}
              ></textarea>
            </div>
            <button
              type='submit'
              className='primary-btn'
              ref={sendMsgButtonRef}
            >
              Dispatch.
            </button>
          </form>
        </div>
      </div>
      <div id='notif-msg' ref={notificationPopRef}>
        I have been received your message. thank you.
      </div>
    </>
  );
};
export default ContactFragment;
