import React from 'react';
import EMAILS from '../emails';
import MailboxListContainer from './mailbox-list-container';
import MailboxContentContainer from './mailbox-content-container';

export default function EmailAccountContainer(props){

	var emailsArr = [];
	console.log('IN account container');

	for (var key in EMAILS[props.params.mailbox-name]){
		console.log('account container');
		console.log(EMAILS[props.params.mailbox-name][key]);
		
		emailsArr.push(EMAILS[props.params.mailbox-name][key]);
	}

	return(
		<div>
			<MailboxListContainer mailboxes={Object.keys(EMAILS)}/> 
			<MailboxContentContainer emails={emailsArr}/>
		</div>
	)
}