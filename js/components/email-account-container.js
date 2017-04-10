import React from 'react';
import EMAILS from '../emails';
import MailboxListContainer from './mailbox-list-container';
import MailboxContentContainer from './mailbox-content-container';

export default function EmailAccountContainer(props){

	var emailsArr = [];

	for (var key in EMAILS[props.params.mailbox-name]){
		emailsArr.push(EMAILS[props.params.mailbox-name][key]);
	}

	return(
		<div>
			<MailboxListContainer mailboxes={Object.keys(EMAILS)}/> 
			<MailboxContentContainer emails={emailsArr}/>
		</div>
	)
}