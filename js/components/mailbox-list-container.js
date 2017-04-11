import React from 'react';
import EMAILS from '../emails'

//go back and forth between inbox and spam (sidebar)
//parent container that has sidebar and the contents of whichever box in view
// import EmailContainer from './email-container';
// import SidebarContainer from './sidebar-container';

export default function MailboxListContainer(props){
	console.log("props in MailList Contents ");
	console.log('MailboxListProps');
	console.log(props);
	
	return(
		<div className='mailbox-list'>
			<ul>{props.mailboxes.map(function(item, index){
				return (<li key={index}>{item}</li>);
			})}</ul> 
		</div>
	);
	//mailboxes for attr in parent
}