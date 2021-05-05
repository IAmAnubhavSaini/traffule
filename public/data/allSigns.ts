type SignT = {
    signName: string
    signDescription: string
    signCaption: string
}

type SignsT = {
    signs: SignT[]
}

const SIGNS_ENG: SignsT = {
    "signs": [
        {
            "signName": "NoEntry"
            , "signDescription": "You can not enter this path. Entry is prohibited. Restricted area."
            , "signCaption": "No Entry."
        },
        {
            "signName": "StopAndGiveWay"
            , "signDescription": "Stop your vehicle completely and let other vehicles pass. "
            , "signCaption": "Stop and Give way. Yield"
        },
        {
            "signName": "GiveWay"
            , "signDescription": "Give way to other vehicles."
            , "signCaption": "Give way."
        },
        {
            "signName": "NoMotor"
            , "signDescription": "No motorised vehicles allowed. "
            , "signCaption": "No motor"
        },
        {
            "signName": "HeightLimit"
            , "signDescription": "Vehicles must not be higher than the limit described on the sign."
            , "signCaption": "Height limit"
        },
        {
            "signName": "WidthLimit"
            , "signDescription": "Vehicles must not be wider than the limit described on the sign."
            , "signCaption": "Width limit"
        },
        {
            "signName": "WeightLimit"
            , "signDescription": "Vehicles must not have gross weight more than the limit described on the sign."
            , "signCaption": "Gross weight limit"
        },
        {
            "signName": "AxleWeightLimit"
            , "signDescription": "Vehicle's axle must not have more load than the limit described on the sign."
            , "signCaption": "Axle load limit"
        },
        {
            "signName": "NoParking"
            , "signDescription": "Vehicles must not be parked on the road as described on the sign."
            , "signCaption": "No parking zone"
        },

        {
            "signName": "StopPass"
            , "signDescription": "Stop completely before passing through."
            , "signCaption": "Stop before passing"
        },
        {
            "signName": "NoOvertaking"
            , "signDescription": "Do not overtake vehicles. Do not pass vehicles."
            , "signCaption": "No overtaking"
        },
        {
            "signName": "NoHeavyVehicle"
            , "signDescription": "Heavy vehicles like truck, bus etc. are restricted on this road."
            , "signCaption": "No heavy vehicle"
        },
        {
            "signName": "NoRightTurn"
            , "signDescription": "Turning right is prohibited."
            , "signCaption": "No right turn"
        },
        {
            "signName": "NoHandCart"
            , "signDescription": "Hand carts are prohibited on this road."
            , "signCaption": "No hand cart"
        },
        {
            "signName": "NoAnimalDrawnCart"
            , "signDescription": "Animal drawn carts are prohibited on this road."
            , "signCaption": "No animal drawn carts"
        },
        {
            "signName": "NoLeftTurn"
            , "signDescription": "Turning left is prohibited."
            , "signCaption": "No left turn"
        },
        {
            "signName": "NoRightUTurn"
            , "signDescription": "U turn is prohibited. (for right handed vehicles e.g. in India, U.K.)."
            , "signCaption": "No U turn (right)"
        },
        {
            "signName": "NoLeftUTurn"
            , "signDescription": "U turn is prohibited. (for left handed vehicles e.g. in U.S.A.)."
            , "signCaption": "No U turn (left)"
        },
        {
            "signName": "NoHorn"
            , "signDescription": "Do not blow horn. Silence zone."
            , "signCaption": "No horn"
        },
        {
            "signName": "SpeedLimit"
            ,
            "signDescription": "Maximum speed limit for the vehicles show on the sign, if none then applies to all of the vehicles."
            ,
            "signCaption": "Maximum speed limit"
        },
        {
            "signName": "EndSpeedLimit"
            , "signDescription": "Speed limit restriction lifted."
            , "signCaption": "End of the speed limit"
        },
        {
            "signName": "TempStopSign"
            , "signDescription": "Traffic must stop adjacent to this sign due to a temporary situation."
            , "signCaption": "Stop temporarily on the sign"
        },
        {
            "signName": "TempGoSign"
            , "signDescription": "Traffic may proceed."
            , "signCaption": "Go"
        },
        {
            "signName": "RestrictionEnds"
            , "signDescription": "End of the previous noted restriction except speed limit."
            , "signCaption": "Previous restriction ends"
        },
        {
            "signName": "TurnLeft"
            , "signDescription": "Traffic can only proceed in the left direction."
            , "signCaption": "Turn left"
        },
        {
            "signName": "TurnRight"
            , "signDescription": "Traffic can only proceed in the right direction."
            , "signCaption": "Turn right"
        },
        {
            "signName": "NoStopping"
            , "signDescription": "Traffic can not stop to load/unload materials/personnel."
            , "signCaption": "No stopping of the vechicles."
        },
        {
            "signName": "AheadOnly"
            , "signDescription": "Traffic can proceed only in the forward direction."
            , "signCaption": "Ahead only or Go straight"
        },
        {
            "signName": "KeepLeft"
            ,
            "signDescription": "Traffic must keep in the left lane. (in countries like U.S.A., it is used only when there is a temporary situation on the road)"
            ,
            "signCaption": "Keep left"
        },
        {
            "signName": "KeepRight"
            ,
            "signDescription": "Traffic must keep in the right lane. (in countries like India, it is used only when there is a temporary situation on the road)"
            ,
            "signCaption": "Keep right"
        },
        {
            "signName": "RightTurnAhead"
            , "signDescription": "Traffic must follow right turn ahead on this lane or road."
            , "signCaption": "Right turn ahead"
        },
        {
            "signName": "LeftTurnAhead"
            , "signDescription": "Traffic must follow left turn ahead on this lane or road."
            , "signCaption": "Left turn"
        },
        {
            "signName": "SmallRoundAboutRight"
            , "signDescription": "Traffic must give way to vehicles on right. (in countries like India)"
            , "signCaption": "Small round about (right)"
        },
        {
            "signName": "SmallRoundAboutLeft"
            , "signDescription": "Traffic must give way to vehicles on left. (in countries like USA)"
            , "signCaption": ""
        },
        {
            "signName": "OneWayTraffic"
            , "signDescription": "Only one way traffic is allowed."
            , "signCaption": "One way traffic"
        },
        {
            "signName": "CrossRoad"
            , "signDescription": "Crossroad with a minor road ahead."
            , "signCaption": "Crossroad"
        },
        {
            "signName": "MajorCrossRoad"
            , "signDescription": "Crossroad with a major road ahead."
            , "signCaption": "Major crossroad"
        },
        {
            "signName": "RightBranch"
            , "signDescription": "Road branches on the right ahead."
            , "signCaption": "Branch on right"
        },
        {
            "signName": "LeftBranch"
            , "signDescription": "Road branches on the left ahead."
            , "signCaption": "Branch on left"
        },
        {
            "signName": "StaggardJunction"
            ,
            "signDescription": "Close left and right minor branch roads in staggard formation, i.e. no crossroads and no separate left branch or right branch."
            ,
            "signCaption": "Staggard junction"
        },
        {
            "signName": "TJunction"
            , "signDescription": "Straight road ends, must go either left or right."
            , "signCaption": "T junction"
        },
        {
            "signName": "YJunction"
            , "signDescription": "Straight road ends, must go either left or right, somewhat in straight direction."
            , "signCaption": "Y junction"
        },
        {
            "signName": "TrafficMergeFromLeft"
            , "signDescription": "Traffic is merging in to this road from left side."
            , "signCaption": "Traffic merges from left"
        },
        {
            "signName": "TrafficMergeFromRight"
            , "signDescription": "Traffic is merging in to this road from right side."
            , "signCaption": "Traffic merges from right"
        },
        {
            "signName": "RoundAbout"
            , "signDescription": "Round about to pass a junction ahead."
            , "signCaption": "Roundabout"
        },
        {
            "signName": "SharpBendToRight"
            , "signDescription": "A sharp bend on the road to the right ahead, change of speed might be necessary."
            , "signCaption": "Sharp bend to right"
        },
        {
            "signName": "SharpBendToLeft"
            , "signDescription": "A sharp bend on the road to the left ahead, change of speed might be necessary."
            , "signCaption": "Sharp bend to left"
        },
        {
            "signName": "HairpinBendToRight"
            ,
            "signDescription": "A sharp haripin bend ahead, much like U turn, speed must be brought to minimum as bend is not visible in advance."
            ,
            "signCaption": "Hairpin bend to right"
        },
        {
            "signName": "DoubleBendFirstLeft"
            , "signDescription": "Double bend in road ahead, first one is left."
            , "signCaption": "Double bend, first left"
        },
        {
            "signName": "DoubleBendFirstRight"
            , "signDescription": "Double bend in road ahead, first one is right."
            , "signCaption": "Double bend, first right"
        },
        {
            "signName": "NarrowRoadsBoth"
            , "signDescription": "Road ahead might be very narrow suddenly."
            , "signCaption": "Narrow road ahead"
        },
        {
            "signName": "RightRoadNarrows"
            , "signDescription": "Road ahead might be narrow from right."
            , "signCaption": "Narrow road on right"
        },
        {
            "signName": "LeftRoadNarrows"
            , "signDescription": "Road ahead might be narrow from left"
            , "signCaption": "Narrow road on left"
        },
        {
            "signName": "DualCarriagewayEnds"
            , "signDescription": "Dual carriageway ends and becomes a double lane road instead."
            , "signCaption": "Dual carriageway ends"
        },
        {
            "signName": "TrafficSignals"
            , "signDescription": "A junction controlled by traffic lights is ahead."
            , "signCaption": "Traffic signals"
        },
        {
            "signName": "SteepHillDownwards"
            , "signDescription": "Steep downhill ahead."
            , "signCaption": "Steep downhill ahead"
        },
        {
            "signName": "SteepHillUpwards"
            , "signDescription": "Steep uphill ahead."
            , "signCaption": "Steep uphill ahead"
        },
        {
            "signName": "TwoWayTrafficStraightAhead"
            , "signDescription": "Two way traffic ahead, usually when dual carriageway ends or multilane road is ahead."
            , "signCaption": "Two way traffic straight ahead"
        },
        {
            "signName": "TwoWayTrafficCrossesAhead"
            , "signDescription": "Two way traffic crosses this road ahead."
            , "signCaption": "Two way traffic crosses ahead"
        },
        {
            "signName": "PedestrianWalking"
            , "signDescription": "Pedestrian crossing ahead, slow down and be careful."
            , "signCaption": "Pedestrian crossing ahead"
        },
        {
            "signName": "PedestrianInRoad"
            , "signDescription": "No pedestrian footway, pedestrian walking on the road, slow down and be careful."
            , "signCaption": "Pedestrian in road ahead"
        },
        {
            "signName": "Children"
            , "signDescription": "Children or school ahead, slow down and be careful."
            , "signCaption": "Children ahead"
        },
        {
            "signName": "Cattle"
            , "signDescription": "Cattle crossing zone, slow down and be careful."
            , "signCaption": "Cattle ahead"
        },
        {
            "signName": "WildAnimals"
            , "signDescription": "Wild animals crossing zone, slow down and be careful."
            , "signCaption": "Wild animals ahead"
        },
        {
            "signName": "RiverBank"
            ,
            "signDescription": "Road passes near the edge of deep water body, danger of fall in, slow down and be careful."
            ,
            "signCaption": "River bank ahead"
        },
        {
            "signName": "UnevenRoad"
            , "signDescription": "Road ahead is uneven and dangerous for normal speed, slow down and be careful."
            , "signCaption": "Uneven road ahead"
        },
        {
            "signName": "SlipperyRoad"
            , "signDescription": "Road ahead is slippery and dageruos for normal speed, slow down and be careful."
            , "signCaption": "Slippery road ahead"
        },
        {
            "signName": "RoadHump"
            , "signDescription": "Road hump ahead, slow down appropriately."
            , "signCaption": "Road hump"
        },
        {
            "signName": "LowFlyingAircraft"
            ,
            "signDescription": "Road ahead crosses flight path of a low flying plane, be prepared for loud noises etc."
            ,
            "signCaption": "Low flying aircraft zone ahead"
        },
        {
            "signName": "FallingRocks"
            , "signDescription": "Road ahead is unstabble and rocks can fall from the higher sidelines."
            , "signCaption": "Falling rocks zone ahead"
        },
        {
            "signName": "DangerousDip"
            , "signDescription": "Road crosses a drift or flood zone."
            , "signCaption": "Dangerous dip zone"
        },
        {
            "signName": "NarrowBridge"
            , "signDescription": "Bridge ahead is narrower than current road, slow down and be careful."
            , "signCaption": "Narrow bridge ahead"
        },
        {
            "signName": "Danger"
            , "signDescription": "Ususally for temporary hazardous situations ahead, accompanied by other instructions."
            , "signCaption": "Danger ahead"
        },
        {
            "signName": "CheckPoint"
            , "signDescription": "Checkpoint ahead, be prepared to stop and throughly checked."
            , "signCaption": "Check point ahead"
        },
        {
            "signName": "RoadWorks"
            , "signDescription": "Temporary situation caused by men working on road"
            , "signCaption": "Men at work ahead"
        },
        {
            "signName": "LooseChippings"
            , "signDescription": "Loose chippings of stone, building material etc."
            , "signCaption": "Loose chippings"
        },
        {
            "signName": "RailwayCrossingWOGate"
            , "signDescription": "Railway crossing ahead without gates or barrier, be very careful while crossing."
            , "signCaption": "Railway crossing without gate"
        },
        {
            "signName": "RailwayCrossingWGate"
            , "signDescription": "Railway crossing ahead with gate or barrier, wait for gate to be opened."
            , "signCaption": "Railway crossing with gate"
        },
        {
            "signName": "NoThroughRoad"
            , "signDescription": "Straight road ends ahead, slow down and be careful."
            , "signCaption": "No through road"
        },
        {
            "signName": "PedestrianCrossing"
            , "signDescription": "Pedestrian crossing straight ahead, slow down and be careful."
            , "signCaption": "Pedestrian crossing"
        },
        {
            "signName": "ParkingPlace"
            , "signDescription": "On road parking is allowed or off road parking is available."
            , "signCaption": "Parking place"
        },
        {
            "signName": "OvertakingSection"
            , "signDescription": "Vehicles can overtake slower moving vehicles like bus and trucks."
            , "signCaption": "Overtaking section"
        },
        {
            "signName": "FillingStation"
            , "signDescription": "Distance to and/or location of next filling station ahead on the road."
            , "signCaption": "Filling station"
        },
        {
            "signName": "BreakdownService"
            , "signDescription": "Distance to and/or location of next service station ahead on the road."
            , "signCaption": "Breakdown service"
        },
        {
            "signName": "TelephoneService"
            , "signDescription": "Distance to and/or location of next public telephone booth/service ahead on the road."
            , "signCaption": "Telephone service"
        },
        {
            "signName": "OvernightAccomodation"
            , "signDescription": "Distance to and/or location of next overnight accomodation ahead on the road."
            , "signCaption": "Overnight accomodation"
        },
        {
            "signName": "FirstAidService"
            , "signDescription": "Distance to and/or location of next first aid service post ahead on the road."
            , "signCaption": "First aid service"
        },
        {
            "signName": "HospitalService"
            , "signDescription": "Distance to and/or location of next hospital ahead on the road."
            , "signCaption": "Hospital service"
        },
        {
            "signName": "RefreshmentsService"
            , "signDescription": "Distance to and/or location of next refreshments station ahead on the road."
            , "signCaption": "Refreshment service"
        },
        {
            "signName": "RestaurentService"
            , "signDescription": "Distance to and/or location of next restaurent ahead on the road."
            , "signCaption": "Restaurent service"
        },
        {
            "signName": "PicnicSite"
            , "signDescription": "Distance to and/or location of next picnic site ahead on the road."
            , "signCaption": "Picnic site"
        },
        {
            "signName": "RoutePedsCyclist"
            , "signDescription": "Recommended route for the pedestrians and cyclists."
            , "signCaption": "Route for pedestrians and cyclists"
        },
        {
            "signName": "RoutePeds"
            , "signDescription": "Recommended route for pedestrians"
            , "signCaption": "Route for Pedestrians"
        },
        {
            "signName": "RouteCyclist"
            , "signDescription": "Recommended route for cyclists."
            , "signCaption": "Route for cyclists"
        },
        {
            "signName": "BusStop"
            , "signDescription": "Bus stop for bus service, also no parking for other vehicles."
            , "signCaption": "Bus stop"
        }
    ]
};

export default SIGNS_ENG;

export type {SignT, SignsT};