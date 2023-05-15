/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
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
