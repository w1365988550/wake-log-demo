// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class TestAudio extends cc.Component {

    @property({
        displayName: "点击音效",
        type: [cc.AudioClip]
    })
    private gameSoundArray: cc.AudioClip[] = [];

    protected readonly gameSoundMap: Map<string, cc.AudioClip> = new Map();

    protected readonly _dic: Map<cc.AudioClip, number> = new Map();

    public onLoad(): void {
        for (var gameSound of this.gameSoundArray) {
            var name = gameSound.name;
            this.gameSoundMap.set(name, gameSound);
        }
    }

    private play(): void {
        var audioClip = this.getAudioByName("click");

        if (audioClip == null) {
            return;
        }

        var id = cc.audioEngine.playEffect(audioClip, false);
        this._dic.set(audioClip, id);
    }

    protected getAudioByName(audioName: string): cc.AudioClip {
        if (audioName == null) {
            return;
        }
        return this.gameSoundMap.get(audioName);
    }
}
