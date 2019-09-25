export default class SettingsState {
    feature1Enabled: boolean;
    feature2Enabled: boolean;

    constructor(feature1Enabled: boolean, feature2Enabled: boolean) {
        this.feature1Enabled = feature1Enabled;
        this.feature2Enabled = feature2Enabled;
    }

    clone(): SettingsState {
        return new SettingsState(this.feature1Enabled, this.feature2Enabled);
    }

    toggleSetting(settingNrToToggle: number) {
        switch(settingNrToToggle) {
            case 1:
                this.feature1Enabled = !this.feature1Enabled;
                break;
            case 2:
                this.feature2Enabled = !this.feature2Enabled;
                break;
        }
    }
}
