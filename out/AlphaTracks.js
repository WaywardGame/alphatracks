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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@wayward/goodstream/Stream", "language/Translation", "mod/Mod", "mod/ModRegistry", "ui/component/Button", "ui/component/CheckButton"], function (require, exports, Stream_1, Translation_1, Mod_1, ModRegistry_1, Button_1, CheckButton_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlphaTracksTranslation;
    (function (AlphaTracksTranslation) {
        AlphaTracksTranslation[AlphaTracksTranslation["OptionsOnlyAlphaTracks"] = 0] = "OptionsOnlyAlphaTracks";
        AlphaTracksTranslation[AlphaTracksTranslation["OptionsPlayTrackPixPlz"] = 1] = "OptionsPlayTrackPixPlz";
        AlphaTracksTranslation[AlphaTracksTranslation["OptionsPlayTrackTheHighlands"] = 2] = "OptionsPlayTrackTheHighlands";
    })(AlphaTracksTranslation || (AlphaTracksTranslation = {}));
    class AlphaTracks extends Mod_1.default {
        get tracks() {
            return {
                PixPlz: this.musicTrackPixPlz,
                TheHighlands: this.musicTrackTheHighlands
            };
        }
        onInitialize() {
            this.refreshMusicHandler(true);
        }
        onUninitialized() {
            this.resetMusicHandler();
        }
        resetMusicHandler() {
            audio?.resetMusicHandler();
            audio?.playMusic();
        }
        refreshMusicHandler(isInitialization = false) {
            if (this.globalData.onlyAlphaTracks) {
                audio?.getMusicHandler()
                    .filter(name => name.slice("ModAlphaTracks".length) in this.tracks)
                    .moveToRandom();
            }
            else if (isInitialization) {
                audio?.getMusicHandler().refresh();
            }
            else {
                this.resetMusicHandler();
            }
        }
        constructOptionsSection(section) {
            new CheckButton_1.CheckButton()
                .setText(() => Translation_1.default.get(this.dictionary, AlphaTracksTranslation.OptionsOnlyAlphaTracks))
                .setRefreshMethod(() => !!this.globalData.onlyAlphaTracks)
                .event.subscribe("toggle", (_, checked) => {
                this.globalData.onlyAlphaTracks = checked;
                this.refreshMusicHandler();
            })
                .appendTo(section);
            for (const track of Stream_1.default.keys(this.tracks)) {
                new Button_1.default()
                    .setText(() => Translation_1.default.get(this.dictionary, `OptionsPlayTrack${track}`))
                    .event.subscribe("activate", () => {
                    audio?.getMusicHandler().moveToEnumEntry(this.tracks[track]);
                })
                    .appendTo(section);
            }
        }
    }
    exports.default = AlphaTracks;
    __decorate([
        ModRegistry_1.default.dictionary("AlphaTracks", AlphaTracksTranslation)
    ], AlphaTracks.prototype, "dictionary", void 0);
    __decorate([
        ModRegistry_1.default.musicTrack("PixPlz")
    ], AlphaTracks.prototype, "musicTrackPixPlz", void 0);
    __decorate([
        ModRegistry_1.default.musicTrack("TheHighlands")
    ], AlphaTracks.prototype, "musicTrackTheHighlands", void 0);
    __decorate([
        Mod_1.default.globalData("Alpha Tracks")
    ], AlphaTracks.prototype, "globalData", void 0);
    __decorate([
        ModRegistry_1.default.optionsSection
    ], AlphaTracks.prototype, "constructOptionsSection", null);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxwaGFUcmFja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQWxwaGFUcmFja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHOzs7Ozs7Ozs7O0lBWUgsSUFBSyxzQkFJSjtJQUpELFdBQUssc0JBQXNCO1FBQzFCLHVHQUFzQixDQUFBO1FBQ3RCLHVHQUFzQixDQUFBO1FBQ3RCLG1IQUE0QixDQUFBO0lBQzdCLENBQUMsRUFKSSxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBSTFCO0lBTUQsTUFBcUIsV0FBWSxTQUFRLGFBQUc7UUFhM0MsSUFBWSxNQUFNO1lBQ2pCLE9BQU87Z0JBQ04sTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQzdCLFlBQVksRUFBRSxJQUFJLENBQUMsc0JBQXNCO2FBQ3pDLENBQUM7UUFDSCxDQUFDO1FBRWUsWUFBWTtZQUMzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVlLGVBQWU7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUtNLGlCQUFpQjtZQUN2QixLQUFLLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztZQUMzQixLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQVVNLG1CQUFtQixDQUFDLGdCQUFnQixHQUFHLEtBQUs7WUFDbEQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRTtnQkFDcEMsS0FBSyxFQUFFLGVBQWUsRUFBRTtxQkFFdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO3FCQUVsRSxZQUFZLEVBQUUsQ0FBQzthQUVqQjtpQkFBTSxJQUFJLGdCQUFnQixFQUFFO2dCQUM1QixLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7YUFFbkM7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDekI7UUFDRixDQUFDO1FBT00sdUJBQXVCLENBQUMsT0FBa0I7WUFFaEQsSUFBSSx5QkFBVyxFQUFFO2lCQUNmLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLENBQUM7aUJBQzlGLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztpQkFDekQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztnQkFDMUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDO2lCQUNELFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUdwQixLQUFLLE1BQU0sS0FBSyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxnQkFBTSxFQUFFO3FCQUNWLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLG1CQUFtQixLQUFLLEVBQUUsQ0FBQyxDQUFDO3FCQUMzRSxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7b0JBQ2pDLEtBQUssRUFBRSxlQUFlLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDLENBQUM7cUJBQ0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BCO1FBQ0YsQ0FBQztLQUNEO0lBdEZELDhCQXNGQztJQW5GZ0I7UUFEZixxQkFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsc0JBQXNCLENBQUM7bURBQ3BCO0lBR3ZCO1FBRGYscUJBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO3lEQUNVO0lBRXhCO1FBRGYscUJBQVEsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDOytEQUNVO0lBR3ZDO1FBRE4sYUFBRyxDQUFDLFVBQVUsQ0FBYyxjQUFjLENBQUM7bURBQ1Q7SUFzRDVCO1FBRE4scUJBQVEsQ0FBQyxjQUFjOzhEQXFCdkIifQ==