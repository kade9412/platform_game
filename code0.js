gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDBigGuyObjects1= [];
gdjs.Untitled_32sceneCode.GDBigGuyObjects2= [];
gdjs.Untitled_32sceneCode.GDPlatformObjects1= [];
gdjs.Untitled_32sceneCode.GDPlatformObjects2= [];
gdjs.Untitled_32sceneCode.GDBaldPirateObjects1= [];
gdjs.Untitled_32sceneCode.GDBaldPirateObjects2= [];
gdjs.Untitled_32sceneCode.GDBigGuyHealthObjects1= [];
gdjs.Untitled_32sceneCode.GDBigGuyHealthObjects2= [];
gdjs.Untitled_32sceneCode.GDBaldPitateObjects1= [];
gdjs.Untitled_32sceneCode.GDBaldPitateObjects2= [];
gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1= [];
gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects2= [];
gdjs.Untitled_32sceneCode.GDBaldPirateAttackObjects1= [];
gdjs.Untitled_32sceneCode.GDBaldPirateAttackObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBigGuyAttackObjects1Objects = Hashtable.newFrom({"BigGuyAttack": gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBigGuyAttackObjects1Objects = Hashtable.newFrom({"BigGuyAttack": gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBigGuyObjects1Objects = Hashtable.newFrom({"BigGuy": gdjs.Untitled_32sceneCode.GDBigGuyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBigGuyAttackObjects1Objects = Hashtable.newFrom({"BigGuyAttack": gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBaldPirateObjects1Objects = Hashtable.newFrom({"BaldPirate": gdjs.Untitled_32sceneCode.GDBaldPirateObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BaldPirate"), gdjs.Untitled_32sceneCode.GDBaldPirateObjects1);
gdjs.copyArray(runtimeScene.getObjects("BaldPitate"), gdjs.Untitled_32sceneCode.GDBaldPitateObjects1);
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.Untitled_32sceneCode.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("BigGuyHealth"), gdjs.Untitled_32sceneCode.GDBigGuyHealthObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBigGuyHealthObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBigGuyHealthObjects1[i].SetValue((( gdjs.Untitled_32sceneCode.GDBigGuyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBigGuyObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBaldPitateObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBaldPitateObjects1[i].SetValue((( gdjs.Untitled_32sceneCode.GDBaldPirateObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBaldPirateObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.Untitled_32sceneCode.GDBigGuyObjects1);
gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBigGuyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBigGuyObjects1[i].setVariableBoolean(gdjs.Untitled_32sceneCode.GDBigGuyObjects1[i].getVariables().getFromIndex(0), true);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBigGuyAttackObjects1Objects, (( gdjs.Untitled_32sceneCode.GDBigGuyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBigGuyObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDBigGuyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBigGuyObjects1[0].getPointY("")) + 25, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.Untitled_32sceneCode.GDBigGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBigGuyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBigGuyObjects1[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDBigGuyObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBigGuyObjects1[k] = gdjs.Untitled_32sceneCode.GDBigGuyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBigGuyObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BigGuyAttack"), gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1[i].addForce(1000, 0, 0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("BigGuyAttack"), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigGuy"), gdjs.Untitled_32sceneCode.GDBigGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("BigGuyAttack"), gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBigGuyAttackObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBigGuyObjects1Objects, 560, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BaldPirate"), gdjs.Untitled_32sceneCode.GDBaldPirateObjects1);
gdjs.copyArray(runtimeScene.getObjects("BigGuyAttack"), gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBigGuyAttackObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBaldPirateObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBaldPirateObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBaldPirateObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBaldPirateObjects1[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBigGuyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBigGuyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlatformObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlatformObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBaldPirateObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBaldPirateObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBigGuyHealthObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBigGuyHealthObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBaldPitateObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBaldPitateObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBigGuyAttackObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBaldPirateAttackObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBaldPirateAttackObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
