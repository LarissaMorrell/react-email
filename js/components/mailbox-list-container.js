import React from 'react';
import EMAILS from '../emails';
import {Link} from 'react-router';

//go back and forth between inbox and spam (sidebar)
//parent container that has sidebar and the contents of whichever box in view`

export default function MailboxListContainer(props){
	
	return(
		<div className='mailbox-list'>
			<ul>{props.mailboxes.map(function(item, index){
				return (<li key={index}><Link to={'/' + item}>
                    {item}</Link></li>);
			})}</ul> 
		</div>
	);
}