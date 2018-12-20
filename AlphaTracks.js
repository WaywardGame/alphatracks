var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "language/Translation", "mod/Mod", "mod/ModRegistry", "newui/component/Button", "newui/component/CheckButton", "utilities/Objects"], function (require, exports, Translation_1, Mod_1, ModRegistry_1, Button_1, CheckButton_1, Objects_1) {
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
            audio.resetMusicHandler();
            audio.playMusic();
        }
        refreshMusicHandler(isInitialization = false) {
            if (this.globalData.onlyAlphaTracks) {
                audio.getMusicHandler()
                    .filter(name => name.slice("ModAlphaTracks".length) in this.tracks)
                    .moveToRandom();
            }
            else if (isInitialization) {
                audio.getMusicHandler().refresh();
            }
            else {
                this.resetMusicHandler();
            }
        }
        constructOptionsSection(api, section) {
            new CheckButton_1.CheckButton(api)
                .setText(() => new Translation_1.default(this.dictionary, AlphaTracksTranslation.OptionsOnlyAlphaTracks))
                .setRefreshMethod(() => !!this.globalData.onlyAlphaTracks)
                .on(CheckButton_1.CheckButtonEvent.Change, (_, checked) => {
                this.globalData.onlyAlphaTracks = checked;
                this.refreshMusicHandler();
            })
                .appendTo(section);
            for (const track of Objects_1.default.keys(this.tracks)) {
                new Button_1.default(api)
                    .setText(() => new Translation_1.default(this.dictionary, `OptionsPlayTrack${track}`))
                    .on(Button_1.ButtonEvent.Activate, () => {
                    audio.getMusicHandler().moveToEnumEntry(this.tracks[track]);
                })
                    .appendTo(section);
            }
        }
    }
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
    exports.default = AlphaTracks;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxwaGFUcmFja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbHBoYVRyYWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFXQSxJQUFLLHNCQUlKO0lBSkQsV0FBSyxzQkFBc0I7UUFDMUIsdUdBQXNCLENBQUE7UUFDdEIsdUdBQXNCLENBQUE7UUFDdEIsbUhBQTRCLENBQUE7SUFDN0IsQ0FBQyxFQUpJLHNCQUFzQixLQUF0QixzQkFBc0IsUUFJMUI7SUFNRCxNQUFxQixXQUFZLFNBQVEsYUFBRztRQWEzQyxJQUFZLE1BQU07WUFDakIsT0FBTztnQkFDTixNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtnQkFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxzQkFBc0I7YUFDekMsQ0FBQztRQUNILENBQUM7UUFFTSxZQUFZO1lBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRU0sZUFBZTtZQUNyQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBS00saUJBQWlCO1lBQ3ZCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzFCLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBVU0sbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsS0FBSztZQUNsRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFO2dCQUNwQyxLQUFLLENBQUMsZUFBZSxFQUFFO3FCQUVyQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7cUJBRWxFLFlBQVksRUFBRSxDQUFDO2FBRWpCO2lCQUFNLElBQUksZ0JBQWdCLEVBQUU7Z0JBQzVCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUVsQztpQkFBTTtnQkFDTixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUN6QjtRQUNGLENBQUM7UUFPTSx1QkFBdUIsQ0FBQyxHQUFVLEVBQUUsT0FBa0I7WUFFNUQsSUFBSSx5QkFBVyxDQUFDLEdBQUcsQ0FBQztpQkFDbEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLENBQUM7aUJBQzlGLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztpQkFDekQsRUFBRSxDQUFDLDhCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUM7aUJBQ0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBR3BCLEtBQUssTUFBTSxLQUFLLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM5QyxJQUFJLGdCQUFNLENBQUMsR0FBRyxDQUFDO3FCQUNiLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsS0FBSyxFQUFFLENBQUMsQ0FBQztxQkFDM0UsRUFBRSxDQUFDLG9CQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtvQkFDOUIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzdELENBQUMsQ0FBQztxQkFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEI7UUFDRixDQUFDO0tBQ0Q7SUFuRkE7UUFEQyxxQkFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsc0JBQXNCLENBQUM7bURBQ3BCO0lBR3ZDO1FBREMscUJBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO3lEQUNVO0lBRXhDO1FBREMscUJBQVEsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDOytEQUNVO0lBRzlDO1FBREMsYUFBRyxDQUFDLFVBQVUsQ0FBYyxjQUFjLENBQUM7bURBQ1Q7SUFzRG5DO1FBREMscUJBQVEsQ0FBQyxjQUFjOzhEQXFCdkI7SUFyRkYsOEJBc0ZDIn0=