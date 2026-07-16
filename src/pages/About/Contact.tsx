import { ArrowRight, Github, Instagram, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface IContactProps {
	email?: string;
}

const Contact = ({ email }: IContactProps) => {
	return (
		<div
			className="mx-8 md:mx-16 p-10 md:p-16 relative overflow-hidden"
			style={{
				background: '#111120',
				border: '1px solid rgba(124,58,237,0.25)',
			}}
		>
			<div
				className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] opacity-20"
				style={{ background: '#7c3aed' }}
			/>
			<div
				className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-[60px] opacity-15"
				style={{ background: '#dc2626' }}
			/>
			<p
				className="text-xs tracking-[0.35em] uppercase opacity-50 mb-4"
				style={{ position: 'relative' }}
			>
				Available for Projects
			</p>
			<h2
				className="text-4xl md:text-5xl font-extrabold mb-8 relative"
				style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
			>
				Let&apos;s make something
				<br />
				<span style={{ color: '#c4b5fd' }}>unforgettable.</span>
			</h2>
			<div className="flex flex-wrap gap-4 relative">
				<a
					href={`mailto:${email || 'ana@studiovasquez.com'}`}
					className="flex items-center gap-2 text-sm tracking-widest uppercase border px-6 py-3 hover:bg-violet-600 hover:border-violet-600 transition-all duration-200"
					style={{ borderColor: '#7c3aed', color: '#c4b5fd' }}
				>
					<Mail size={14} />
					Email Me
				</a>
				<Link
					to="/gallery"
					className="flex items-center gap-2 text-sm tracking-widest uppercase px-6 py-3 transition-all duration-200"
					style={{ color: '#8b7fb8' }}
				>
					See Work <ArrowRight size={14} />
				</Link>
			</div>

			<div className="flex gap-4 mt-8 relative">
				{[
					{ Icon: Github, href: '#' },
					{ Icon: Twitter, href: '#' },
					{ Icon: Instagram, href: '#' },
				].map(({ Icon, href }, i) => (
					<a
						key={i}
						href={href}
						className="w-8 h-8 flex items-center justify-center border transition-all duration-200 hover:border-violet-500"
						style={{ borderColor: 'rgba(124,58,237,0.3)', color: '#8b7fb8' }}
					>
						<Icon size={14} />
					</a>
				))}
			</div>
		</div>
	);
};

export default Contact;
