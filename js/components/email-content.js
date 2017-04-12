import React from 'react';
import EMAILS from '../emails';

export default function EmailContent(props) {

    return (
        <div className="email-content">
        	<ul>
        		<li>From: {props.email.from}</li>
        		<li>To: {props.email.to}</li>
        		<li>Subject: {props.email.title}</li>
        	</ul>
        	<p>{props.email.content}</p>
        </div>
    );
};