import React from 'react';
import EmailList from './email-list';
import EmailContent from './email-content';

export default function MailboxContentContainer(props){
	console.log("props in Mailbox Contents ");
	console.log(props);

	return (
		<div className='mailbox-content'>
			<EmailList emails={props.emails}/>
			
		</div>
	);

	// <EmailContent to={props.emails[props.params.emailId]}/>
	//the emails passed in then the id from the param route

	//params will take data from url and then 
	//route is determined from index.js <route>
}