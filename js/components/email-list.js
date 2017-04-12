import React from 'react';
import {Link} from 'react-router';

export default function EmailList(props){

	var emailsArr = [];
	for (var key in props.emails){
		emailsArr.push(props.emails[key]);
	}

	return(
		<div className='email-list'>
			<ul>
				{emailsArr.map(function(item, index){
					return (
						<li key={index}>
							<Link to={'/' + props.mailbox + '/' + item.id}>
								<span className='sender'>{item.from}</span>
								<span className='subject'>{item.title}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}