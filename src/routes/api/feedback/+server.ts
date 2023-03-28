// TODO: Feedback form through xlsx or other service
// import type { RequestHandler } from './$types';
// import nodemailer from 'nodemailer';
// import { MAIL_SMPT, MAIL_ADDRESS, MAIL_PASSWORD } from '$env/static/private';

// export const POST: RequestHandler = async ({ request }) => {
// 	const { body } = await request.json();

// 	const transporter = nodemailer.createTransport({
// 		host: MAIL_SMPT,
// 		service: 'outlook',
// 		secure: false,
// 		tls: {
// 			ciphers: 'SSLv3'
// 		},
// 		port: 587,
// 		auth: {
// 			user: MAIL_ADDRESS,
// 			pass: MAIL_PASSWORD
// 		}
// 	});

// 	const html = `
// 	<h1>Feedback op de hitloop</h1>
// 	<p>${body}</p>
// 	`;

// 	const info = await transporter.sendMail({
// 		from: 'Hitloop Feedback <daank2000@hotmail.nl>',
// 		to: 'daank2000@hotmail.nl',
// 		subject: 'Feedback Hitloop',
// 		html: html
// 	});

// 	//TODO: Handle errors
// 	// console.log(info.messageId);

// 	return new Response(JSON.stringify({ message: 'Mail sent!' }));
// };
