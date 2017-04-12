import React from 'react';
import EMAILS from '../emails';
import MailboxListContainer from './mailbox-list-container';
import MailboxContentContainer from './mailbox-content-container';
import EmailContent from './email-content';

export default function EmailAccountContainer(props){

	var emailsArr = [];
	console.log('IN account container');

	var mailboxId;
	var mailboxContent; 
	var email;

	//if we have a mailbox endpoint... 
	if(props.params.mailbox != undefined){
		mailboxContent = <MailboxContentContainer emails={EMAILS[props.params.mailbox]} 
		mailbox={props.params.mailbox} />;
	}

	if(props.params.id != undefined){
		email = <EmailContent email={EMAILS[props.params.mailbox][props.params.id]}/>
	}


	//JS objects used because we may not always have those endpoints
	return(
		<div className='account-container'>
			<MailboxListContainer mailboxes={Object.keys(EMAILS)}/> 
			{mailboxContent}
			{email}
		</div>
	)
}