import React from 'react';
import EmailList from './email-list';
import EmailContent from './email-content';
import EMAILS from '../emails';

export default function MailboxContentContainer(props){

	if(props.params != undefined){
		const oneEmail = EMAILS[props.params.mailbox][props.params.id];
		return (
			<div className='mailbox-content'>
				<h1>{props.params.mailbox}</h1>
				<EmailList emails={EMAILS[props.params.mailbox]}/>
				<EmailContent to={oneEmail.to} from={oneEmail.from} title={oneEmail.title} content={oneEmail.content}/>
			</div>
		);
	} else {
		return (
			<div className='mailbox-content'></div>
		);
	}
}