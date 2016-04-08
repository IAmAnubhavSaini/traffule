{
 "relations" : [
        {
            "SearchKeyName"     : "park"
        ,   "Title"             : "Parking"
        ,   "Title_hi"          : "पार्किंग"
        ,   "Relatives"         : "NoParking, Parking"
        ,   "DistantRelatives"  : "NoStopping, NoStoppingAndLoading"
        }
    ,   {
            "SearchKeyName"     : "stop"
        ,   "Title"             : "Stopping"
        ,   "Title_hi"          : "स्टॉप"
        ,   "Relatives"         : "NoStopping, StopAndGiveWay, StopPass"
        ,   "DistantRelatives"  : "GiveWay,"
        }
    ,   {
            "SearchKeyName"     : "turn"
        ,   "Title"             : "Turning"
        ,   "Title_hi"          : "टर्न / मोड़"
        ,   "Relatives"         : "NoRightTurn, TurnRigth, NoLeftTurn, TurnLeft, NoRightUTurn, NoLeftUTurn, UTurn, RightUTurn, LeftUTurn,SharpBendToRight,SharpBendToLeft,HairpinBendToRight,DoubleBendFirstLeft,DoubleBendFirstRight"
        ,   "DistantRelatives"  : "RightBranch, LeftBranch, StaggardJunction"
        }
    ,   {
            "SearchKeyName"     : "branch"
        ,   "Title"             : "Branching"
        ,   "Title_hi"          : "ब्रांच"
        ,   "Relatives"         : "RightBranch, LeftBranch, StaggardJunction, TJunction, YJunction,TrafficMergeFromRight, TrafficMergeFromLeft"
        ,   "DistantRelatives"  : ""
        }
    ,   {
            "SearchKeyName"     : "limit"
        ,   "Title"             : "Limits"
        ,   "Title_hi"          : "सीमा"
        ,   "Relatives"         : "HeightLimit, WidthLimit, WeightLimit, AxleWeightLimit,SpeedLimit,EndSpeedLimit"
        ,   "DistantRelatives"  : " "
        }
 ]
}