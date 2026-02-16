import { useState, useRef, useEffect } from "react";
import { Music, Pause, Play } from "lucide-react";
import bgMusic from "../music/4638426740007368127.mp3";

const MusicPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);
	const fadeIntervalRef = useRef(null);

	const fadeIn = () => {
		if (audioRef.current) {
			audioRef.current.volume = 0;
			let vol = 0;
			const interval = 200; // 0.2s
			const duration = 4000; // 4s total fade
			const step = 0.6 / (duration / interval);

			clearInterval(fadeIntervalRef.current);
			fadeIntervalRef.current = setInterval(() => {
				if (audioRef.current && vol < 0.6) {
					vol = Math.min(vol + step, 0.6);
					audioRef.current.volume = vol;
				} else {
					clearInterval(fadeIntervalRef.current);
				}
			}, interval);
		}
	};

	const togglePlay = () => {
		if (isPlaying) {
			audioRef.current.pause();
			clearInterval(fadeIntervalRef.current);
		} else {
			audioRef.current.volume = 0.6;
			audioRef.current.play().catch(err => {
				console.log("Play failed:", err);
			});
		}
		setIsPlaying(!isPlaying);
	};

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		// Try to play immediately on mount
		const attemptPlay = () => {
			audio.play()
				.then(() => {
					setIsPlaying(true);
					fadeIn();
				})
				.catch((error) => {
					console.log("Initial autoplay blocked:", error);
				});
		};

		attemptPlay();

		// Robust fallback for interaction
		const playOnInteraction = () => {
			if (audioRef.current && !isPlaying) {
				audioRef.current.play()
					.then(() => {
						setIsPlaying(true);
						fadeIn();
						removeListeners();
					})
					.catch(console.error);
			}
		};

		const interactions = ['click', 'touchstart', 'scroll', 'mousedown'];
		const removeListeners = () => {
			interactions.forEach(type => {
				window.removeEventListener(type, playOnInteraction);
			});
		};

		interactions.forEach(type => {
			window.addEventListener(type, playOnInteraction, { once: true });
		});

		return () => {
			removeListeners();
			clearInterval(fadeIntervalRef.current);
		};
	}, [isPlaying]);

	return (
		<div className="fixed bottom-24 right-6 z-[100]">
			<audio
				ref={audioRef}
				src={bgMusic}
				loop
				autoPlay
				playsInline
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
			/>

			<button
				onClick={togglePlay}
				className={`group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#bc4749] text-white shadow-[0_8px_32px_rgba(188,71,73,0.4)] hover:bg-[#a3393b] transition-all transform hover:scale-110 active:scale-95 border-2 border-white/20`}
			>
				{isPlaying ? (
					<div className="relative flex items-center justify-center">
						<div className="absolute w-full h-full rounded-full bg-white/20 animate-ping pointer-events-none" />
						<Pause size={28} />
					</div>
				) : (
					<Play size={28} className="ml-1" />
				)}

				{/* Tooltip */}
				<span className="absolute bottom-full mb-3 right-0 px-3 py-1.5 bg-black/80 text-white text-[10px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase font-bold tracking-widest border border-white/10 shadow-2xl">
					{isPlaying ? "Tạm dừng nhạc" : "Bật nhạc Xuân"}
				</span>
			</button>
		</div>
	);
};

export default MusicPlayer;
