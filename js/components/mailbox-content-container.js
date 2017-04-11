import React from 'react';
import EmailList from './email-list';
import EmailContent from './email-content';
import EMAILS from '../emails';

export default function MailboxContentContainer(props){
	console.log("props in Mailbox Contents ");
	console.log(props);
	console.log(EMAILS[props.params.mailbox][props.params.id]);
	return (
		<div className='mailbox-content'>
			
			<h1>{props.params.mailbox}</h1>
			<EmailList emails={EMAILS[props.params.mailbox]}/>
		</div>
	);
	// <EmailList emails={props.emails}/>
	// <EmailContent to={props.emails[props.params.emailId]}/>
	//<EmailContent email-content={props.emails[props.params.emailId]}/>
	//the emails passed in then the id from the param route

	//params will take data from url and then 
	//route is determined from index.js <route>
}