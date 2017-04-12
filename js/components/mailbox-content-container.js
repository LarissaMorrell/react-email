import React from 'react';
import EmailList from './email-list';
import EmailContent from './email-content';
import EMAILS from '../emails';

export default function MailboxContentContainer(props){

		return (
			<div className='mailbox-content'>
				<h1>{props.mailbox}</h1>
				<EmailList emails={props.emails} mailbox={props.mailbox}/>
			</div>
		);

}