import React from 'react';
import EMAILS from '../emails'

//go back and forth between inbox and spam (sidebar)
//parent container that has sidebar and the contents of whichever box in view
// import EmailContainer from './email-container';
// import SidebarContainer from './sidebar-container';

export default function MailboxListContainer(props){
	// console.log("props in MailList Contents ");
	// console.log(props.params != undefined);
	// console.log(props.params);
	
	if(props.params != undefined){
		console.log("props in MailList Contents ");
		return(
			<div className='mailbox-list'>
				<ul>{props.mailboxes.map(function(item, index){
					return (<li key={index}>{item}</li>);
				})}</ul> 
			</div>
		);
	} else {
		console.log('no emails');
		return (<div className='mailbox-list'>No mailboxes</div>);
	}
	//mailboxes for attr in parent
}