import { Music } from "@wayward/game/audio/IAudio";
import Dictionary from "@wayward/game/language/Dictionary";
import Translation from "@wayward/game/language/Translation";
import Mod from "@wayward/game/mod/Mod";
import Register from "@wayward/game/mod/ModRegistry";
import Button from "@wayward/game/ui/component/Button";
import { CheckButton } from "@wayward/game/ui/component/CheckButton";
import Component from "@wayward/game/ui/component/Component";
import Objects from "@wayward/utilities/object/Objects";

enum AlphaTracksTranslation {
	OptionsOnlyAlphaTracks,
	OptionsPlayTrackPixPlz,
	OptionsPlayTrackTheHighlands
}

interface ITracks {
	PixPlz: Music;
	TheHighlands: Music;
}

interface ISaveDataGlobal {
	onlyAlphaTracks?: boolean;
}

export default class AlphaTracks extends Mod {

	@Register.dictionary("AlphaTracks", AlphaTracksTranslation)
	public readonly dictionary: Dictionary;

	@Register.musicTrack("PixPlz")
	public readonly musicTrackPixPlz: Music;
	@Register.musicTrack("TheHighlands")
	public readonly musicTrackTheHighlands: Music;

	@Mod.globalData<AlphaTracks>("Alpha Tracks")
	public globalData: ISaveDataGlobal;

	private get tracks(): ITracks {
		return {
			PixPlz: this.musicTrackPixPlz,
			TheHighlands: this.musicTrackTheHighlands
		};
	}

	public override onInitialize(): void {
		this.refreshMusicHandler(true);
	}

	public override onUninitialized(): void {
		this.resetMusicHandler();
	}

	/**
	 * Undo the music handler changes done by this mod
	 */
	public resetMusicHandler(): void {
		audio?.resetMusicHandler();
		audio?.playMusic();
	}

	/**
	 * This method is called in two places:
	 * 1. When initializing (in which case it only does anything if `onlyAlphaTracks` is enabled)
	 * 2. When the `onlyAlphaTracks` option changes.
	 * 
	 * If `onlyAlphaTracks` is enabled, a random track from this mod is played.
	 * If else, the music handler is reset.
	 */
	public refreshMusicHandler(isInitialization = false): void {
		if (this.globalData.onlyAlphaTracks) {
			audio?.getMusicHandler()
				// filter the music tracks to only play the tracks provided by this mod
				.filter(name => name.slice("ModAlphaTracks".length) in this.tracks)
				// play a random track
				.moveToRandom();

		} else if (isInitialization) {
			audio?.getMusicHandler().refresh();

		} else {
			this.resetMusicHandler();
		}
	}

	/**
	 * Creates an options section for this mod, containing a checkbutton for whether `onlyAlphaTracks` 
	 * should be played, and a button to switch to each track.
	 */
	@Register.optionsSection
	public constructOptionsSection(section: Component): void {
		// add a checkbutton for whether the music handler should play only alpha tracks
		new CheckButton()
			.setText(() => Translation.get(this.dictionary, AlphaTracksTranslation.OptionsOnlyAlphaTracks))
			.setRefreshMethod(() => !!this.globalData.onlyAlphaTracks)
			.event.subscribe("toggle", (_, checked) => {
				this.globalData.onlyAlphaTracks = checked;
				this.refreshMusicHandler();
			})
			.appendTo(section);

		// add a button for playing each track
		for (const track of Objects.keys(this.tracks)) {
			new Button()
				.setText(() => Translation.get(this.dictionary, `OptionsPlayTrack${track}`))
				.event.subscribe("activate", () => {
					audio?.getMusicHandler().moveToEnumEntry(this.tracks[track as keyof ITracks]);
				})
				.appendTo(section);
		}
	}
}
