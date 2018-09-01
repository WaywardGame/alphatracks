import { Music } from "Enums";
import { Dictionary } from "language/ILanguage";
import Translation from "language/Translation";
import Mod from "mod/Mod";
import Register from "mod/ModRegistry";
import Button, { ButtonEvent } from "newui/component/Button";
import { CheckButton, CheckButtonEvent } from "newui/component/CheckButton";
import Component from "newui/component/Component";
import { UiApi } from "newui/INewUi";
import Objects from "utilities/Objects";

enum AlphaTracksTranslation {
	OptionsOnlyAlphaTracks,
	OptionsPlayTrackPixPlz,
	OptionsPlayTrackTheHighlands
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

	private saveDataGlobal: ISaveDataGlobal;

	private get tracks() {
		return {
			PixPlz: this.musicTrackPixPlz,
			TheHighlands: this.musicTrackTheHighlands
		};
	}

	public onInitialize(saveDataGlobal: ISaveDataGlobal): any {
		this.saveDataGlobal = saveDataGlobal || {};

		this.refreshMusicHandler(true);
	}

	public onUninitialize() {
		return this.saveDataGlobal;
	}

	public onUninitialized() {
		this.resetMusicHandler();
	}

	/**
	 * Undo the music handler changes done by this mod
	 */
	public resetMusicHandler() {
		audio.resetMusicHandler();
		audio.playMusic();
	}

	/**
	 * This method is called in two places:
	 * 1. When initializing (in which case it only does anything if `onlyAlphaTracks` is enabled)
	 * 2. When the `onlyAlphaTracks` option changes.
	 * 
	 * If `onlyAlphaTracks` is enabled, a random track from this mod is played.
	 * If else, the music handler is reset.
	 */
	public refreshMusicHandler(isInitialization = false) {
		if (this.saveDataGlobal.onlyAlphaTracks) {
			audio.getMusicHandler()
				// filter the music tracks to only play the tracks provided by this mod
				.filter(name => name.slice("ModAlphaTracks".length) in this.tracks)
				// play a random track
				.moveToRandom();

		} else if (isInitialization) {
			audio.getMusicHandler().refresh();

		} else {
			this.resetMusicHandler();
		}
	}

	/**
	 * Creates an options section for this mod, containing a checkbutton for whether `onlyAlphaTracks` 
	 * should be played, and a button to switch to each track.
	 */
	@Register.optionsSection
	public constructOptionsSection(api: UiApi, section: Component) {
		// add a checkbutton for whether the music handler should play only alpha tracks
		new CheckButton(api)
			.setText(() => new Translation(this.dictionary, AlphaTracksTranslation.OptionsOnlyAlphaTracks))
			.setRefreshMethod(() => !!this.saveDataGlobal.onlyAlphaTracks)
			.on(CheckButtonEvent.Change, (_, checked) => {
				this.saveDataGlobal.onlyAlphaTracks = checked;
				this.refreshMusicHandler();
			})
			.appendTo(section);

		// add a button for playing each track
		for (const track of Objects.keys(this.tracks)) {
			new Button(api)
				.setText(() => new Translation(this.dictionary, `OptionsPlayTrack${track}`))
				.on(ButtonEvent.Activate, () => {
					audio.getMusicHandler().moveToEnumEntry(this.tracks[track]);
				})
				.appendTo(section);
		}
	}
}
