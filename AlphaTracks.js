var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "language/Translation", "mod/Mod", "newui/component/Button", "newui/component/CheckButton", "utilities/Objects"], function (require, exports, Translation_1, Mod_1, Button_1, CheckButton_1, Objects_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlphaTracksTranslation;
    (function (AlphaTracksTranslation) {
        AlphaTracksTranslation[AlphaTracksTranslation["OptionsOnlyAlphaTracks"] = 0] = "OptionsOnlyAlphaTracks";
        AlphaTracksTranslation[AlphaTracksTranslation["OptionsPlayTrackPixPlz"] = 1] = "OptionsPlayTrackPixPlz";
        AlphaTracksTranslation[AlphaTracksTranslation["OptionsPlayTrackTheHighlands"] = 2] = "OptionsPlayTrackTheHighlands";
    })(AlphaTracksTranslation || (AlphaTracksTranslation = {}));
    class AlphaTracks extends Mod_1.default {
        constructor() {
            super(...arguments);
            this.tracks = {};
        }
        onInitialize(saveDataGlobal) {
            this.dictionary = this.addDictionary("AlphaTracks", AlphaTracksTranslation);
            this.saveDataGlobal = saveDataGlobal || {};
            for (const track of ["PixPlz", "TheHighlands"]) {
                this.tracks[track] = this.addMusic(track);
            }
            this.registerOptionsSection(this.constructOptionsSection);
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
                    .filter(name => name in this.tracks)
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
            for (const track in this.tracks) {
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
        Objects_1.Bound
    ], AlphaTracks.prototype, "constructOptionsSection", null);
    exports.default = AlphaTracks;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxwaGFUcmFja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbHBoYVRyYWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFTQSxJQUFLLHNCQUlKO0lBSkQsV0FBSyxzQkFBc0I7UUFDMUIsdUdBQXNCLENBQUE7UUFDdEIsdUdBQXNCLENBQUE7UUFDdEIsbUhBQTRCLENBQUE7SUFDN0IsQ0FBQyxFQUpJLHNCQUFzQixLQUF0QixzQkFBc0IsUUFJMUI7SUFNRCxpQkFBaUMsU0FBUSxhQUFHO1FBQTVDOztZQUVrQixXQUFNLEdBQThCLEVBQUUsQ0FBQztRQW1GekQsQ0FBQztRQS9FTyxZQUFZLENBQUMsY0FBK0I7WUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxJQUFJLEVBQUUsQ0FBQztZQUUzQyxLQUFLLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUM7WUFFRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFFMUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFTSxjQUFjO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM1QixDQUFDO1FBRU0sZUFBZTtZQUNyQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBS00saUJBQWlCO1lBQ3ZCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzFCLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBVU0sbUJBQW1CLENBQUMsZ0JBQWdCLEdBQUcsS0FBSztZQUNsRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFO2dCQUN4QyxLQUFLLENBQUMsZUFBZSxFQUFFO3FCQUVyQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztxQkFFbkMsWUFBWSxFQUFFLENBQUM7YUFFakI7aUJBQU0sSUFBSSxnQkFBZ0IsRUFBRTtnQkFDNUIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBRWxDO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ3pCO1FBQ0YsQ0FBQztRQU9NLHVCQUF1QixDQUFDLEdBQVUsRUFBRSxPQUFrQjtZQUU1RCxJQUFJLHlCQUFXLENBQUMsR0FBRyxDQUFDO2lCQUNsQixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztpQkFDOUYsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO2lCQUM3RCxFQUFFLENBQUMsOEJBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQztpQkFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFHcEIsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQyxJQUFJLGdCQUFNLENBQUMsR0FBRyxDQUFDO3FCQUNiLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsS0FBSyxFQUFFLENBQUMsQ0FBQztxQkFDM0UsRUFBRSxDQUFDLG9CQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtvQkFDOUIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzdELENBQUMsQ0FBQztxQkFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEI7UUFDRixDQUFDO0tBQ0Q7SUFyQkE7UUFEQyxlQUFLOzhEQXFCTDtJQXBGRiw4QkFxRkMifQ==