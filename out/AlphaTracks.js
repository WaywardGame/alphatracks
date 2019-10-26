var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "language/Translation", "mod/Mod", "mod/ModRegistry", "newui/component/Button", "newui/component/CheckButton"], function (require, exports, Translation_1, Mod_1, ModRegistry_1, Button_1, CheckButton_1) {
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
        constructOptionsSection(section) {
            new CheckButton_1.CheckButton()
                .setText(() => new Translation_1.default(this.dictionary, AlphaTracksTranslation.OptionsOnlyAlphaTracks))
                .setRefreshMethod(() => !!this.globalData.onlyAlphaTracks)
                .event.subscribe("toggle", (_, checked) => {
                this.globalData.onlyAlphaTracks = checked;
                this.refreshMusicHandler();
            })
                .appendTo(section);
            for (const track of Stream.keys(this.tracks)) {
                new Button_1.default()
                    .setText(() => new Translation_1.default(this.dictionary, `OptionsPlayTrack${track}`))
                    .event.subscribe("activate", () => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxwaGFUcmFja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9BbHBoYVRyYWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFTQSxJQUFLLHNCQUlKO0lBSkQsV0FBSyxzQkFBc0I7UUFDMUIsdUdBQXNCLENBQUE7UUFDdEIsdUdBQXNCLENBQUE7UUFDdEIsbUhBQTRCLENBQUE7SUFDN0IsQ0FBQyxFQUpJLHNCQUFzQixLQUF0QixzQkFBc0IsUUFJMUI7SUFNRCxNQUFxQixXQUFZLFNBQVEsYUFBRztRQWEzQyxJQUFZLE1BQU07WUFDakIsT0FBTztnQkFDTixNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtnQkFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxzQkFBc0I7YUFDekMsQ0FBQztRQUNILENBQUM7UUFFTSxZQUFZO1lBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRU0sZUFBZTtZQUNyQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBS00saUJBQWlCO1lBQ3ZCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzFCLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBVU0sbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsS0FBSztZQUNsRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFO2dCQUNwQyxLQUFLLENBQUMsZUFBZSxFQUFFO3FCQUVyQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7cUJBRWxFLFlBQVksRUFBRSxDQUFDO2FBRWpCO2lCQUFNLElBQUksZ0JBQWdCLEVBQUU7Z0JBQzVCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUVsQztpQkFBTTtnQkFDTixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUN6QjtRQUNGLENBQUM7UUFPTSx1QkFBdUIsQ0FBQyxPQUFrQjtZQUVoRCxJQUFJLHlCQUFXLEVBQUU7aUJBQ2YsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLENBQUM7aUJBQzlGLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztpQkFDekQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztnQkFDMUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDO2lCQUNELFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUdwQixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM3QyxJQUFJLGdCQUFNLEVBQUU7cUJBQ1YsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLG1CQUFtQixLQUFLLEVBQUUsQ0FBQyxDQUFDO3FCQUMzRSxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7b0JBQ2pDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDLENBQUM7cUJBQ0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BCO1FBQ0YsQ0FBQztLQUNEO0lBbkZBO1FBREMscUJBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHNCQUFzQixDQUFDO21EQUNwQjtJQUd2QztRQURDLHFCQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQzt5REFDVTtJQUV4QztRQURDLHFCQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQzsrREFDVTtJQUc5QztRQURDLGFBQUcsQ0FBQyxVQUFVLENBQWMsY0FBYyxDQUFDO21EQUNUO0lBc0RuQztRQURDLHFCQUFRLENBQUMsY0FBYzs4REFxQnZCO0lBckZGLDhCQXNGQyJ9