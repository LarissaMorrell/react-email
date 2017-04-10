import React from 'react';
import EMAILS from '../emails';

export default function EmailContent(props) {

    return (
        <div className="email-content">
        	<ul>
        		<li>From: {props.from}</li>
        		<li>To: {props.to}</li>
        		<li>Subject: {props.title}</li>
        	</ul>
        	<p>{props.content}</p>
        </div>
    );
};