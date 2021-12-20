import { Music } from "audio/IAudio";
import Dictionary from "language/Dictionary";
import Mod from "mod/Mod";
import Component from "ui/component/Component";
interface ISaveDataGlobal {
    onlyAlphaTracks?: boolean;
}
export default class AlphaTracks extends Mod {
    readonly dictionary: Dictionary;
    readonly musicTrackPixPlz: Music;
    readonly musicTrackTheHighlands: Music;
    globalData: ISaveDataGlobal;
    private get tracks();
    onInitialize(): any;
    onUninitialized(): void;
    resetMusicHandler(): void;
    refreshMusicHandler(isInitialization?: boolean): void;
    constructOptionsSection(section: Component): void;
}
export {};
