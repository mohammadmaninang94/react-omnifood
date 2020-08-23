import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './section-form.styles.css';

const SectionForm = () => (
    <section className='section-form'>
        <div className='row'>
            <h2>We're happy to hear from you</h2>
        </div>
        <div className='row'>
            <form method='post' action='#' className='contact-form'>
                <div className='row'>
                    <div className='col span-1-of-3'>
                        <label htmlFor='name'>Name</label>
                    </div>
                    <div className='col span-2-of-3'>
                        <input type='text' id='name' name='name' placeholder='Your name' required />
                    </div>
                </div>
                <div className='row'>
                    <div className='col span-1-of-3'>
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className='col span-2-of-3'>
                        <input type='email' id='email' name='email' placeholder='Your email' required />
                    </div>
                </div>
                <div className='row'>
                    <div className='col span-1-of-3'>
                        <label htmlFor='find-us'>How did you find us?</label>
                    </div>
                    <div className='col span-2-of-3'>
                        <select id='find-us' name='find-us'>
                            <option value='friends' defaultValue>Friends</option>
                            <option value='search'>Search engine</option>
                            <option value='ad'>Advertisement</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col span-1-of-3'>
                        <label htmlFor='news'>Newsletter?</label>
                    </div>
                    <div className='col span-2-of-3'>
                        <input type='checkbox' id='news' name='newsletter' required defaultChecked /><span> Yes, Please</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='col span-1-of-3'>
                        <label htmlFor='message'>Drop us a line</label>
                    </div>
                    <div className='col span-2-of-3'>
                        <textarea id='message' name='message' placeholder='Your message'></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div className='col span-1-of-3'>
                        <label>&nbsp;</label>
                    </div>
                    <div className='col span-2-of-3'>
                        <CustomButton isButton='true' className='btn btn-full' type='submit' >Send it!</CustomButton>
                    </div>
                </div>
            </form>
        </div>
    </section>
);

export default SectionForm;