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
        onInitialize(saveDataGlobal) {
            this.saveDataGlobal = saveDataGlobal || {};
            this.refreshMusicHandler(true);
        }
        onUninitialize() {
            return this.saveDataGlobal;
        }
        onUninitialized() {
            this.resetMusicHandler();
        }
        resetMusicHandler() {
            audio.resetMusicHandler();
            audio.playMusic();
        }
        refreshMusicHandler(isInitialization = false) {
            if (this.saveDataGlobal.onlyAlphaTracks) {
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
                .setRefreshMethod(() => !!this.saveDataGlobal.onlyAlphaTracks)
                .on(CheckButton_1.CheckButtonEvent.Change, (_, checked) => {
                this.saveDataGlobal.onlyAlphaTracks = checked;
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
        ModRegistry_1.default.optionsSection
    ], AlphaTracks.prototype, "constructOptionsSection", null);
    exports.default = AlphaTracks;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxwaGFUcmFja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbHBoYVRyYWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFXQSxJQUFLLHNCQUlKO0lBSkQsV0FBSyxzQkFBc0I7UUFDMUIsdUdBQXNCLENBQUE7UUFDdEIsdUdBQXNCLENBQUE7UUFDdEIsbUhBQTRCLENBQUE7SUFDN0IsQ0FBQyxFQUpJLHNCQUFzQixLQUF0QixzQkFBc0IsUUFJMUI7SUFNRCxNQUFxQixXQUFZLFNBQVEsYUFBRztRQVkzQyxJQUFZLE1BQU07WUFDakIsT0FBTztnQkFDTixNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtnQkFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxzQkFBc0I7YUFDekMsQ0FBQztRQUNILENBQUM7UUFFTSxZQUFZLENBQUMsY0FBK0I7WUFDbEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLElBQUksRUFBRSxDQUFDO1lBRTNDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRU0sY0FBYztZQUNwQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDNUIsQ0FBQztRQUVNLGVBQWU7WUFDckIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUtNLGlCQUFpQjtZQUN2QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMxQixLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQVVNLG1CQUFtQixDQUFDLGdCQUFnQixHQUFHLEtBQUs7WUFDbEQsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRTtnQkFDeEMsS0FBSyxDQUFDLGVBQWUsRUFBRTtxQkFFckIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO3FCQUVsRSxZQUFZLEVBQUUsQ0FBQzthQUVqQjtpQkFBTSxJQUFJLGdCQUFnQixFQUFFO2dCQUM1QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7YUFFbEM7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDekI7UUFDRixDQUFDO1FBT00sdUJBQXVCLENBQUMsR0FBVSxFQUFFLE9BQWtCO1lBRTVELElBQUkseUJBQVcsQ0FBQyxHQUFHLENBQUM7aUJBQ2xCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2lCQUM5RixnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUM7aUJBQzdELEVBQUUsQ0FBQyw4QkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztnQkFDOUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDO2lCQUNELFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUdwQixLQUFLLE1BQU0sS0FBSyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxnQkFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDYixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsbUJBQW1CLEtBQUssRUFBRSxDQUFDLENBQUM7cUJBQzNFLEVBQUUsQ0FBQyxvQkFBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7b0JBQzlCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDLENBQUM7cUJBQ0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BCO1FBQ0YsQ0FBQztLQUNEO0lBeEZBO1FBREMscUJBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHNCQUFzQixDQUFDO21EQUNwQjtJQUd2QztRQURDLHFCQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQzt5REFDVTtJQUV4QztRQURDLHFCQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQzsrREFDVTtJQThEOUM7UUFEQyxxQkFBUSxDQUFDLGNBQWM7OERBcUJ2QjtJQTFGRiw4QkEyRkMifQ==