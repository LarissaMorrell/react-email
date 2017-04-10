import React from 'react';

export default function EmailList(props){

	console.log('props for emailList')
	console.log(props);
	console.log(props.emails);

	var emailsArr = [];

	for (var key in props.emails){
		emailsArr.push(props.emails[key]);
	}


	return(
		<div className='email-list'>
			{emailsArr.map(function(item, index){
				return (
					<div key={index}>
						<span className='sender'>{item.from}</span>
						<span className='subject'>{item.title}</span>
					</div>
				);
			})}
		</div>
	);
}