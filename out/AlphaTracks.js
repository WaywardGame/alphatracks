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
            audio === null || audio === void 0 ? void 0 : audio.resetMusicHandler();
            audio === null || audio === void 0 ? void 0 : audio.playMusic();
        }
        refreshMusicHandler(isInitialization = false) {
            if (this.globalData.onlyAlphaTracks) {
                audio === null || audio === void 0 ? void 0 : audio.getMusicHandler().filter(name => name.slice("ModAlphaTracks".length) in this.tracks).moveToRandom();
            }
            else if (isInitialization) {
                audio === null || audio === void 0 ? void 0 : audio.getMusicHandler().refresh();
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
                    audio === null || audio === void 0 ? void 0 : audio.getMusicHandler().moveToEnumEntry(this.tracks[track]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxwaGFUcmFja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQWxwaGFUcmFja3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBVUEsSUFBSyxzQkFJSjtJQUpELFdBQUssc0JBQXNCO1FBQzFCLHVHQUFzQixDQUFBO1FBQ3RCLHVHQUFzQixDQUFBO1FBQ3RCLG1IQUE0QixDQUFBO0lBQzdCLENBQUMsRUFKSSxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBSTFCO0lBTUQsTUFBcUIsV0FBWSxTQUFRLGFBQUc7UUFhM0MsSUFBWSxNQUFNO1lBQ2pCLE9BQU87Z0JBQ04sTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQzdCLFlBQVksRUFBRSxJQUFJLENBQUMsc0JBQXNCO2FBQ3pDLENBQUM7UUFDSCxDQUFDO1FBRWUsWUFBWTtZQUMzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVlLGVBQWU7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUtNLGlCQUFpQjtZQUN2QixLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsaUJBQWlCLEVBQUUsQ0FBQztZQUMzQixLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsU0FBUyxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQVVNLG1CQUFtQixDQUFDLGdCQUFnQixHQUFHLEtBQUs7WUFDbEQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRTtnQkFDcEMsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGVBQWUsR0FFcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUVqRSxZQUFZLEVBQUUsQ0FBQzthQUVqQjtpQkFBTSxJQUFJLGdCQUFnQixFQUFFO2dCQUM1QixLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsZUFBZSxHQUFHLE9BQU8sRUFBRSxDQUFDO2FBRW5DO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ3pCO1FBQ0YsQ0FBQztRQU9NLHVCQUF1QixDQUFDLE9BQWtCO1lBRWhELElBQUkseUJBQVcsRUFBRTtpQkFDZixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2lCQUM5RixnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7aUJBQ3pELEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQztpQkFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFHcEIsS0FBSyxNQUFNLEtBQUssSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzdDLElBQUksZ0JBQU0sRUFBRTtxQkFDVixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsS0FBSyxFQUFFLENBQUMsQ0FBQztxQkFDM0UsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO29CQUNqQyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsZUFBZSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUMsQ0FBQztxQkFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEI7UUFDRixDQUFDO0tBQ0Q7SUFuRkE7UUFEQyxxQkFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsc0JBQXNCLENBQUM7bURBQ3BCO0lBR3ZDO1FBREMscUJBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO3lEQUNVO0lBRXhDO1FBREMscUJBQVEsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDOytEQUNVO0lBRzlDO1FBREMsYUFBRyxDQUFDLFVBQVUsQ0FBYyxjQUFjLENBQUM7bURBQ1Q7SUFzRG5DO1FBREMscUJBQVEsQ0FBQyxjQUFjOzhEQXFCdkI7SUFyRkYsOEJBc0ZDIn0=