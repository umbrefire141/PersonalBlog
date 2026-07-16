import Info from './Info';
import Main from './Main';
import SelectedWorks from './SelectedWorks';
import Works from './Works';

export default function HomePage() {
	return (
		<div className="min-h-screen">
			<Main />
			<SelectedWorks />
			<Works />
			<Info />
			<style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
		</div>
	);
}
