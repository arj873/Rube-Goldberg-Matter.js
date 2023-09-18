let engine = Matter.Engine.create();

let render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1900,
        height: 800,
        wireframes: false, //an option to create frames of shapes that are just black and white
        hasBounds: true,
        background: '#000000'
    }
});
let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Vertices = Matter.Vertices,
    Vector = Matter.Vector;
// create engine
let world = engine.world;


let bottom = Bodies.rectangle(0, 800, 4600, 20, { isStatic: true });

let APcompBod1 = Bodies.rectangle(320, 230, 80, 20, { label: "bucket" }),
    APcompBod2 = Bodies.rectangle(360, 160, 10, 140, { render: APcompBod1.render }),
    APcompBod3 = Bodies.rectangle(280, 160, 10, 140, { render: APcompBod1.render });

let APcompountBody1 = Body.create({
    parts: [APcompBod1, APcompBod2, APcompBod3],
    isStatic: false,
});
let APjuicePlatform = Bodies.rectangle(435, 260, 220, 30, { isStatic: true });
let APjuiceRamp1 = Bodies.rectangle(20, 300, 430, 10, { isStatic: true, angle: Math.PI / 10 });
let APjuiceRamp2 = Bodies.rectangle(260, 450, 150, 10, { isStatic: true, angle: Math.PI - Math.PI / 6 });
let APjuiceRamp3 = Bodies.rectangle(200, 570, 400, 10, { isStatic: true, angle: Math.PI / 6 });



// let APplate = Bodies.rectangle(300, 789, 100, 10, { velocity: { x: 1 } });



let rpcar = Matter.Bodies.rectangle(150 + 385, 500 + 280, 322, 10, {
    label: 'plate',
    isStatic: false,
    render: { fillStyle: '#FFFFFF' },
    density: 1,
});
let rpleftwall = Matter.Bodies.rectangle(0 + 385, 450 + 280 + 10, 5 + 10, 75, { label: 'cup', render: { fillStyle: '#257DCF' } }),
    rpbottom = Matter.Bodies.rectangle(37 + 385, 485 + 280 + 10, 75, 5 + 10, {
        label: 'cup1',
        render: { fillStyle: '#257DCF' }
    }),
    rprightwall = Matter.Bodies.rectangle(74 + 385, 450 + 280 + 10, 5 + 10, 75, { label: 'cup', render: { fillStyle: '#257DCF' } })

let APplate = Matter.Body.create({
    parts: [rpleftwall, rpbottom, rprightwall, rpcar]
});
Matter.World.add(engine.world, [APplate]);

// TODO: fix the nums i dont want to rn
let APtoaster1 = Bodies.rectangle(600 + 1000, 390 - 200, 210, 10, { label: "toaster1", render: {fillStyle: '#257dcf'} });
let APtoaster2 = Bodies.rectangle(704 + 1000, 405 - 200, 10, 30,{ label: "toaster1", render: {fillStyle: '#257dcf'} });
let APtoaster3 = Bodies.rectangle(600 + 1000, 424 - 200, 210, 10,{ label: "toaster1",render: {fillStyle: '#257dcf'} });
let APtoaster4 = Bodies.rectangle(605 + 1000, 395 - 200, 200, 2,{ label: "toaster1", render: {fillStyle: '#257dcf'} }); // FIXME: set this to red

let APtoaster = Body.create({
    parts: [APtoaster1, APtoaster2, APtoaster3, APtoaster4],
    isStatic: true,
});
let APbread = Bodies.rectangle(600 + 1000, 410 - 200, 200, 20, { render: { fillStyle: '#995f09' }, label: "bread1" });



let APtestBall = Composites.stack(300, 100, 6, 8, 0, 0, function(x, y) {
    return Bodies.circle(x, y, 4, { density: .0005, friction: -0, label: "balls",render: { fillStyle: '#FFA500' } });
});
let APjuiceplafform3 = Bodies.rectangle(375, 444, 100, 10, { isStatic: true, angle: Math.PI / 6, friction: -3 });
let APjuiceplafform4 = Bodies.rectangle(510, 500, 180, 10, { isStatic: true, label: "stop" });


let APdomino1 = Bodies.rectangle(430, 480, 3, 40, { density: .0001 }),
    APdomino2 = Bodies.rectangle(460, 480, 3, 40, { density: .0001 }),
    APdomino3 = Bodies.rectangle(490, 480, 3, 40, { density: .0001 }),
    APdomino4 = Bodies.rectangle(520, 480, 3, 40, { density: .0001 })
APdomino5 = Bodies.rectangle(550, 480, 3, 40, { density: .0001, label: "2lastDomino" })
APdomino6 = Bodies.rectangle(580, 480, 3, 40, { density: .0001, label: "lastDomino" });

let APball = Bodies.circle(620, 470, 20, { isStatic: true, density: .0002, label: "ball" })
let APwrekingBall = Constraint.create({
    pointA: { x: 800, y: 300 },
    bodyB: APball,
    pointB: { x: 0, y: 0 },

})


let APlever1 = Bodies.rectangle(1100, 360, 200, 10, { isStatic: false, density: .0001, label: "lever1" });
let APlever1Constraint = Constraint.create({
    pointA: { x: 1100, y: 360 },
    bodyB: APlever1,
    pointB: { x: 0, y: 0 },

})
let APlever2 = Bodies.rectangle(1250, 400, 200, 10, { isStatic: false, density: .0001, label: "lever2" });
let APlever2Constraint = Constraint.create({
    pointA: { x: 1250, y: 400 },
    bodyB: APlever2,
    pointB: { x: 0, y: 0 },

})

let APballForToast = Bodies.circle(1300, 385, 10, { isStatic: true });

let newJuice = Bodies.rectangle(450, 730, 50, 50, { isStatic: false, density: .0002, label: "orangeJuice" });

World.add(world, [bottom,
    APcompountBody1, APjuicePlatform, APtestBall, APjuiceRamp1, APjuiceRamp2, APjuiceRamp3,
    APplate, APtoaster, APbread, APjuiceplafform3, APjuiceplafform4, APdomino1, APdomino2, APdomino3, APdomino4, APdomino5, APdomino6, APball,
    APwrekingBall, APlever1, APlever2, APlever1Constraint, APlever2Constraint, APballForToast



    , Constraint.create({
        pointA: { x: 280, y: 210 },
        bodyB: APcompountBody1,
        pointB: { x: -10, y: 40 },
        stiffness: 1.5,
        length: 0
    }),

])





let rprope;
let rpveggietouch = 0;
let rphitramp;
let rptouchel = false;
let rpplatefloor = false;
let rpground = Matter.Bodies.rectangle(-175 + 2500, 780, 400, 20, {
    label: 'ground',
    isStatic: true,
}); //creates a ground surface and isstatic signifies whether it falls
Matter.Body.rotate(rpground, -Math.PI / 12)
let rpramp2 = Matter.Bodies.rectangle(1200 + 2500, 900, 800, 20, {
    label: 'ramp2',
    isStatic: true,
}); //creates a ground surface and isstatic signifies whether it falls
Matter.Body.rotate(rpramp2, -Math.PI / 10)
let rpramp1 = Matter.Bodies.rectangle(3100, 900, 1400, 20, {
    label: 'ramp1',
    isStatic: true,
}); //creates a ground surface and isstatic signifies whether it falls
let rpground3 = Matter.Bodies.rectangle(650 + 2500, 700, 520, 20, {
    label: 'ground3',
    isStatic: true,
}); //creates a ground surface and isstatic signifies whether it falls
let rproof = Matter.Bodies.rectangle(500 + 2500, 100, 200, 20, {
    label: 'roof',
    isStatic: true,
});
let rptoproof = Matter.Bodies.rectangle(950 + 2500, 0, 1900, 20, {
    label: 'toproof',
    isStatic: true,
});
let rpwall = Matter.Bodies.rectangle(400 + 2500, 0, 20, 1400, {
    label: 'wall',
    isStatic: true,

});
let rpbutton = Matter.Bodies.rectangle(390 + 2500, 675, 40, 40, {
    label: 'button',
    isStatic: true,
    render: { fillStyle: '#d11b30' }


});
// let rpground4 = Matter.Bodies.rectangle(1800+2500, 825, 440, 20, { //THIS ONENENENENEN
//     label: 'ground3',
//     isStatic: true,
// });
let rpwall2 = Matter.Bodies.rectangle(600 + 2500, 450, 20, 510, {
    label: 'ground',
    isStatic: true,
});
let rpwall3 = Matter.Bodies.rectangle(600 + 2500, 0, 20, 510, {
    label: 'wall3',
    isStatic: true,

});
let rpelevatorfloor = Matter.Bodies.rectangle(430 + 2500, 625, 180, 20, {
    label: 'elevator',
    isStatic: false,
});
let rpball = Matter.Bodies.circle(490 + 2500, 525, 20, {
    label: 'ball'
}); //creates a ball body

let rpfunnel1 = Matter.Bodies.rectangle(700 + 2500, 0, 450, 20, {
    label: 'funnel',
    isStatic: true,
});
let rpfunnel2 = Matter.Bodies.rectangle(1400 + 2500, 0, 450, 20, {
    label: 'funnel',
    isStatic: true,
});



Matter.Body.rotate(rpfunnel1, Math.PI / 6)
Matter.Body.rotate(rpfunnel2, -Math.PI / 6)



let rpwall4 = Matter.Bodies.rectangle(900 + 2500, 425, 20, 530, {
    label: 'ground',
    isStatic: true,
});
let rpwall5 = Matter.Bodies.rectangle(1200 + 2500, 410, 20, 500, {
    label: 'wall5',
    isStatic: true,
});
let rpplat = Matter.Bodies.rectangle(1050 + 2500, 100, 500, 40, {
    label: 'plat',
    isStatic: false,
    density: 0.000001,
});
let rpplat2 = Matter.Bodies.rectangle(1050 + 2500, 125, 300, 5, {
    label: 'plat',
    isStatic: true,
    density: 0.00001,
});

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, { //deals with the position of the mouse and the actions of it
    mouse: mouse,
    constraint: {
        render: { visible: true } //enables the user to see the mouse effect on the screen
    }
});
let rpbottomBound = Matter.Bodies.rectangle(1050 + 2500, 1300, 7000, 780, {
    label: 'bound1',
    isStatic: true,
    render: { fillStyle: '#000000' }


});
let hitfloor = false;
render.mouse = mouse; //sets mouse attribute to what was just defined
//
// let things = Matter.Bodies.polygon(975,0,8,20,{
//     label: "vegetable"
// })
let rpthings = Matter.Composites.stack(1020 + 2500, 0, 3, 1, 10, 0, function(x, y) { //creates a stack of shapes in just one line of code
    return Matter.Bodies.polygon(x, y, 4, 20, {
        label: "vegetable",
        render: { fillStyle: "#249409" }
    });
});
// let rptrampoline2 = Matter.Bodies.rectangle(4600, 800, 350, 15, {
//     isStatic: true,
//     density: .0001,
//     label: 'trampoline2'
// });

var rptrampoline2 = Matter.Composites.softBody(4200, 830, 10, 2, 50, 25, false, 10, { friction: 0.00001, label: "trampoline2", collisionFilter: { group: Matter.Body.nextGroup(true) }, render: { visible: false } }, { stiffness: 2 });
rptrampoline2.bodies[0].isStatic = true;
rptrampoline2.bodies[9].isStatic = true;
rptrampoline2.bodies[10].isStatic = true;
rptrampoline2.bodies[19].isStatic = true;

let bottom2 = Bodies.rectangle(4900 + 5000, 840, 10000, 100, { isStatic: true, label: "ground2" });
Matter.World.add(engine.world, bottom2);

let rppend = Matter.Bodies.circle(3000 + 2500 - 350, 450, 90, {
    label: 'ball'
}); //creates a ball body

let rppendString = Matter.Constraint.create({
    pointA: { x: 3000 + 2500 - 350, y: 0 },
    bodyB: rppend,
    stiffness: 1,
});
let rpleverBlock2 = Matter.Bodies.rectangle(3500 + 2500 - 350, 200, 250, 15, { isStatic: false, density: .0001, label: "rpkmLever" });
let rpfulcrum2 = Matter.Constraint.create({ //slingshot
    pointA: { x: rpleverBlock2.position.x, y: rpleverBlock2.position.y }, //the middle of the slingshot
    bodyB: rpleverBlock2, //ball1 is the body that is attached to the spring
    stiffness: 1 //how much it will bounce back and forth after release. lower the stiffness lesser the bounce
});
let rpplat3 = Matter.Bodies.rectangle(3650 + 2500 - 350, 325, 376, 20, {
    label: 'plat',
    isStatic: true,
    density: 0.00001,
});
Matter.Body.rotate(rpplat3, Math.PI/9);
let rpball2 = Matter.Bodies.circle(3500 + 2500 - 350, 180, 20, {
    restitution: 0,
    // label: 'ball',
    friction: .001,
});
let boolean = false;
let bread1Constr = false;

let phasenum = 0;







//ground and sandwich ball
// let tempBall = Matter.Bodies.rectangle(20+6000, 715, 200, 15, {isStatic: false, restitution: 0,label: "sandwich"});


//portal stuff
let domRamp = Matter.Bodies.rectangle(70+6000, 400, 170, 20, {isStatic: true});

let x = 180+6000,//these are the components of the bucket which consists of 3 rectangles in the bucket formation
    y = 470,
    size = 100,
    compBod1 = Matter.Bodies.rectangle(x,y+size,size+20,20, {label: "bucket"}),
    compBod2 = Matter.Bodies.rectangle(x + (size/2), y+(size/2), 20, size, {render: compBod1.render}),
    compBod3 = Matter.Bodies.rectangle(x-(size/2),y+(size/2),20,size, {render: compBod1.render});

let compoundBody1 = Matter.Body.create({//creates a body that has multiple bodies
    parts: [compBod1,compBod2, compBod3],
    isStatic: true,
});

let domino1 = Matter.Bodies.rectangle(20+6000, 370, 5, 60, {isStatic: false});
let domino2 = Matter.Bodies.rectangle(55+6000, 370, 5, 60, {isStatic: false});
let domino3 = Matter.Bodies.rectangle(90+6000, 370, 5, 60, {isStatic: false});
let chDomino = Matter.Bodies.rectangle(120+6000, 340, 10, 120, {isStatic: false, density: .001, render: {fillStyle: '#fad13c'}, label: "portalCheese"});

//lever cheese initial part
let leverBlock1 = Matter.Bodies.rectangle(400+6000, 200, 300, 15, {isStatic: false, density: .0001});
let fulcrum1 = Matter.Constraint.create({//slingshot
    pointA: { x: leverBlock1.position.x, y: leverBlock1.position.y},//the middle of the slingshot
    bodyB: leverBlock1,//ball1 is the body that is attached to the spring
    stiffness: 1//how much it will bounce back and forth after release. lower the stiffness lesser the bounce
});

let leverBlock2 = Matter.Bodies.rectangle(600+6000, 350, 300, 15, {isStatic: false, density: .0001});
let fulcrum2 = Matter.Constraint.create({//slingshot
    pointA: { x: leverBlock2.position.x, y: leverBlock2.position.y},//the middle of the slingshot
    bodyB: leverBlock2,//ball1 is the body that is attached to the spring
    stiffness: 1//how much it will bounce back and forth after release. lower the stiffness lesser the bounce
});

let leverBlock3 = Matter.Bodies.rectangle(400+6000, 500, 300, 15, {isStatic:false, density: .0001});
let fulcrum3 = Matter.Constraint.create({//slingshot
    pointA: { x: leverBlock3.position.x, y: leverBlock3.position.y},//the middle of the slingshot
    bodyB: leverBlock3,//ball1 is the body that is attached to the spring
    stiffness: 1//how much it will bounce back and forth after release. lower the stiffness lesser the bounce
});

let cheese = Matter.Bodies.rectangle(500+6000, -20, 120, 10, {isStatic: true, render: {fillStyle: '#fad13c', label: "cheese"}});

//heat gun
let hgunLever = Matter.Bodies.rectangle(800+6000, 320, 176, 15, {isStatic: false, density: .0001});
let fulcrum4 = Matter.Constraint.create({//slingshot
    pointA: { x: hgunLever.position.x, y: hgunLever.position.y},//the middle of the slingshot
    bodyB: hgunLever,//ball1 is the body that is attached to the spring
    stiffness: 1//how much it will bounce back and forth after release. lower the stiffness lesser the bounce
});
let part2ball = Matter.Bodies.circle(800+6000, 300, 20, {isStatic: false, restitution: 0,label: 'p2Ball'});

var trampoline1 = Matter.Composites.softBody(800+6000, 550, 10, 2, 5, 5, false, 10, {friction: 0.00001, label: "trampoline1", collisionFilter: { group: Matter.Body.nextGroup(true) }, render: { visible: false }}, {stiffness: 2});
trampoline1.bodies[0].isStatic = true;
trampoline1.bodies[9].isStatic = true;
trampoline1.bodies[10].isStatic = true;
trampoline1.bodies[19].isStatic = true;

var trampoline2 = Matter.Composites.softBody(1050+6000, 300, 10, 2, 5, 5, false, 10, {friction: 0.00001, label: "trampoline2", collisionFilter: { group: Matter.Body.nextGroup(true) }, render: { visible: false }}, {stiffness: 2});
trampoline2.bodies[0].isStatic = true;
trampoline2.bodies[9].isStatic = true;
trampoline2.bodies[10].isStatic = true;
trampoline2.bodies[19].isStatic = true;

let tip = Matter.Bodies.rectangle(1450+6000, 300, 20, 20, {isStatic: false, label: "tipGun",}),
    head = Matter.Bodies.rectangle(1500+6000, 300, 100, 40, {isStatic: false, label: "heatGun"}),
    shaft = Matter.Bodies.rectangle(1500+6000, 335, 23, 70, {isStatic: false, label: "heatGun"});

let heatGun = Matter.Body.create({
    parts: [tip,head,shaft],
    isStatic:true,
});
Matter.Body.rotate(heatGun, (3*Math.PI/2))

let heatPendulum = Matter.Constraint.create({
    pointA: {x: 1750+6000, y: 300},
    bodyB: heatGun,
    pointB: {x: 0, y: -10},
    stiffness: 1,
});


//toaster and last part
let finalLever = Matter.Bodies.rectangle(2100+6000, 235, 176, 15, {isStatic:false, density: .0001});
let fulcrum5 = Matter.Constraint.create({//slingshot
    pointA: { x: finalLever.position.x, y: finalLever.position.y},//the middle of the slingshot
    bodyB: finalLever,//ball1 is the body that is attached to the spring
    stiffness: 1//how much it will bounce back and forth after release. lower the stiffness lesser the bounce
});
let part3Ball = Matter.Bodies.circle(2100+6000, 215, 20, {isStatic: false, restitution: 0,label: 'p3Ball'});


var trampoline3 = Matter.Composites.softBody(2120+6000, 500, 10, 2, 5, 5, false, 10, {friction: 0.00001, label: "trampoline3", collisionFilter: { group: Matter.Body.nextGroup(true) }, render: { visible: false }}, {stiffness: 2});
trampoline3.bodies[0].isStatic = true;
trampoline3.bodies[9].isStatic = true;
trampoline3.bodies[10].isStatic = true;
trampoline3.bodies[19].isStatic = true;

let toaster1 = Matter.Bodies.rectangle(600 + 2500+6000, 390 - 200, 210, 10, {label: "toaster", render: {fillStyle: '#257dcf'}});
let toaster2 = Matter.Bodies.rectangle(704 + 2500+6000, 405 - 200, 10, 30, { render: {fillStyle: '#257dcf'}});
let toaster3 = Matter.Bodies.rectangle(600 + 2500+6000, 424 - 200, 210, 10,  {render: {fillStyle: '#257dcf'}});
let toaster4 = Matter.Bodies.rectangle(605 + 2500+6000, 395 - 200, 200, 2, { render: {fillStyle: '#257dcf'}});

let toaster = Matter.Body.create({
    parts: [toaster1, toaster2, toaster3, toaster4],
    isStatic: true,
});
let breadTop = Matter.Bodies.rectangle(600 + 2500+6000, 410 - 200, 200, 20, {render: {fillStyle: '#b5651d'}, label: "Bread"});
Matter.World.add(engine.world, [toaster, breadTop]);

// let APbread = Bodies.rectangle(600 + 1000, 410 - 200, 200, 20, { render: { fillStyle: '#995f09' }, label: "bread1" });


//collision and event work
let chSandConstraint = Matter.Constraint.create({
    bodyA: APbread,
    bodyB: cheese
});

//phase booleans
// let phase1 = true;
// let phase2 = false;
// let phase3 = false;

let cheeseSWcol = false;
let heatOn = false;
let heatyPeaty = false;

Matter.Events.on(engine, 'collisionStart', function(event) {
    let pairs = event.pairs;
    pairs.forEach(function(pair) {
        if (pair.bodyA.label === "lastDomino" && pair.bodyB.label === "ball") {
            Matter.World.remove(engine.world, APball);
            Matter.World.remove(engine.world, APwrekingBall);
            let APball2 = Bodies.circle(620, 470, 20, { isStatic: false, density: .0002 });
            Body.setVelocity(APball2, { x: 25, y: 0 });
            let APwrekingBall2 = Constraint.create({
                pointA: { x: 800, y: 300 },
                bodyB: APball2,
                pointB: { x: 0, y: 0 },

            })
            Matter.World.remove(engine.world, pair.bodyA);

            World.add(world, [APball2, APwrekingBall2])

        }

        if (pair.bodyB.label === "bread1" && pair.bodyA.label === "plate" && !bread1Constr) {
            bread1Constr = true;
            World.add(world, Constraint.create({
                bodyA: APbread,
                bodyB: APplate,
                pointB: { x: 50, y: 0 },
                stiffness: .05,
                length: 17,
                render: { visible: false }
            }));
            // Matter.Body.setVelocity(APplate, { x: 35, y: 0 });
            // Matter.Body.setVelocity(APbread, { x: 35, y: 0 });
            setTimeout(function() {
                phasenum = 2;
            }, 1500);

        }


        if (pair.bodyA.label === "lever1" && pair.bodyB.label === "lever2") {
            Matter.World.remove(engine.world, APballForToast);
            let APballIDK = Bodies.circle(1300, 385, 10, { isStatic: false, label: "ballIDK" });
            Body.setVelocity(APballIDK, { x: 7, y: -13 });

            World.add(world, [APballIDK])
        }
        if (pair.bodyA.label === "toaster1" && pair.bodyB.label === "ballIDK") {
            Matter.World.remove(engine.world, APlever1);
            Matter.World.remove(engine.world, APlever1Constraint);
            Matter.World.remove(engine.world, APlever2);
            Matter.World.remove(engine.world, APlever2Constraint);
            Body.setVelocity(APbread, { x: -13, y: 0 });

            phasenum = 1;

            let newJuice = Bodies.rectangle(435, 740, 50, 50, { isStatic: false, density: .0002, render: { fillStyle: '#FFA500' } });
            Matter.World.remove(engine.world, APtestBall);
            World.add(world, [newJuice,
                Constraint.create({
                    bodyA: APplate,
                    pointA: { x: -140, y: 0 },
                    bodyB: newJuice,
                    pointB: { x: 0, y: 0 },
                    render: { visible: false }

                }),
                Constraint.create({
                    bodyA: APplate,
                    pointA: { x: -100, y: 0 },
                    bodyB: newJuice,
                    pointB: { x: 0, y: 0 },
                    render: { visible: false }

                })
            ]);
            // Matter.Body.setVelocity(APplate, { x: 20, y: 0 });



        }
        // if (pair.bodyA.label === "cup1" && pair.bodyB.label === "balls") {
        //     let APcompountBody1 = Body.create({
        //         parts: [APcompBod1, APcompBod2, APcompBod3],
        //         isStatic: false,
        //     });
        //     Matter.World.add(engine.world, newBallConstraint);

        // }




        // if (pair.bodyA.label === "ramp1"){//checks collisions with either scenario
        //     if (!rpplatefloor) {
        //         alert("ramp1 to plate");
        //         Matter.Body.setVelocity(rpcar, {x: 25, y: 20})      //Sets velocity of 20 going left and 10 going up
        //         rpplatefloor = true;//Sets velocity of 20 going left and 10 going up
        //     }
        // }
        // if (pair.bodyA.label === "ramp2"){//checks collisions with either scenario
        //     if (!rphitramp) {
        //         alert("ramp2 to plate");
        //         Matter.Body.setVelocity(rpcar, {x: 0, y: 0})      //Sets velocity of 20 going left and 10 going up
        //         rphitramp = true;
        //     }
        // }
        if ((pair.bodyA.label === 'vegetable' && pair.bodyB.label === 'bread1') || (pair.bodyB.label === 'vegetable' && pair.bodyA.label === 'bread1')) { //checks collisions with either scenario
            rpveggietouch++;
            Matter.World.remove(engine.world, rpplat);
            if (rpveggietouch === 1) {
                let rope1 = Matter.Constraint.create({
                    bodyB: pair.bodyB,
                    bodyA: APbread,
                    pointA: { x: -50, y: -15 }, //sets point on body you want to connect to, relative to the middle of the body
                    stiffness: 1,
                    length: 10,
                    render: { visible: false },

                });
                Matter.World.add(engine.world, rope1);
            }
            if (rpveggietouch === 2) {
                let rope1 = Matter.Constraint.create({
                    bodyB: pair.bodyB,
                    bodyA: APbread,
                    pointA: { x: 0, y: -15 }, //sets point on body you want to connect to, relative to the middle of the body
                    stiffness: 1,
                    length: 10,
                    render: { visible: false },

                });
                Matter.World.add(engine.world, rope1);
            }
            if (rpveggietouch === 3) {

                let rope1 = Matter.Constraint.create({
                    bodyB: pair.bodyB,
                    bodyA: APbread,
                    pointA: { x: 50, y: -15 }, //sets point on body you want to connect to, relative to the middle of the body
                    stiffness: 1,
                    length: 10,
                    render: { visible: false },

                });
                Matter.World.add(engine.world, rope1);
            }

            if (rpveggietouch === 3) {
                // Matter.Body.setVelocity(APplate, {x: 50, y: 0})      //Sets velocity of 20 going left and 10 going up
                // Matter.Body.setVelocity(APbread, {x: 50, y: 0})
                setTimeout(function() {
                    phasenum = 4;
                }, 1500);
            }


        }
        if ((pair.bodyA.label === 'button' && pair.bodyB.label === 'plate') || (pair.bodyB.label === 'button' && pair.bodyA.label === 'plate')) {
            rptouchel = true;
            Matter.World.remove(engine.world, rpbutton);
            rpbutton = Matter.Bodies.rectangle(390 + 2500, 675, 5, 40, {
                label: 'button',
                isStatic: true,
                render: { fillStyle: '#147506' }


            });
            Matter.World.add(engine.world, rpbutton);
            Matter.Body.setVelocity(APplate, {x: 0, y:0});

        }
        if ((pair.bodyA.label === 'plate' && pair.bodyB.label === 'trampoline2') || (pair.bodyB.label === 'plate' && pair.bodyA.label === 'trampoline2')) {
            Matter.Body.setVelocity(rptrampoline2.bodies[4], { x: 0, y: 15 });
            Matter.Body.setVelocity(rptrampoline2.bodies[5], { x: 0, y: 15 });
            Matter.Body.setVelocity(rptrampoline2.bodies[14], { x: 0, y: 15 });
            Matter.Body.setVelocity(rptrampoline2.bodies[15], { x: 0, y: 15 });
            Matter.Body.setVelocity(APplate, { x: 30, y: -22 });
        }
        if ((pair.bodyA.label === 'ground' && pair.bodyB.label === 'plate') || (pair.bodyB.label === 'ground' && pair.bodyA.label === 'plate')) {
            // Matter.Body.setVelocity(APplate, { x: 26, y: 0 });
            Matter.Body.setVelocity(APplate, { x: 28, y: 0 });
            Matter.Body.setInertia(APplate, 9000000000);
        }
        if ((pair.bodyA.label === 'ramp1' && pair.bodyB.label === 'plate') || (pair.bodyB.label === 'ramp1' && pair.bodyA.label === 'plate')) {

            Matter.Body.setInertia(APplate, 111401407.91666666);
            if (!hitfloor) {
                phasenum = 3;
                hitfloor = true
            }
        }

        if ((pair.bodyA.label === 'rpkmLever' || pair.bodyB.label === 'rpkmLever') && (pair.bodyB.label === 'ball' || pair.bodyA.label === 'ball')) {
            // alert("sdfsdfsdfsdfsdfsf")
            setTimeout(function() {
                Matter.Body.setVelocity(rppend, {x: 0, y: 0});
            }, 100);

            setTimeout(function() {
                phasenum=5;
            }, 2000);
        }

        if ((pair.bodyA.label === 'ball' || pair.bodyB.label === 'ball') && (pair.bodyB.label === 'plate' || pair.bodyA.label === 'plate')) {
            // Matter.Body.setVelocity(APplate, { x: 26, y: 0 });
            Matter.Body.setVelocity(APplate, { x: 7, y: 2 });
            Matter.Body.setVelocity(rppend, {x: 13, y: -3});
            Matter.Body.setInertia(APplate, 9000000000);
        }

        // if ((pair.bodyA.label === 'ground2' || pair.bodyB.label === 'ground2') && (pair.bodyB.label === 'plate' || pair.bodyA.label === 'plate')) {
        //     alert("SDFSDFSDFSDFSDFSDFSDFSDF")
        //     phasenum = 5;
        // }

        if ((pair.bodyA.label === 'roof' && pair.bodyB.label === 'ball') || (pair.bodyB.label === 'roof' && pair.bodyA.label === 'ball')) { //checks collisions with either scenario
            engine.world.gravity.y = 1;
            let ballx = rpball.position.x;
            let bally = rpball.position.y;
            Matter.World.remove(engine.world, rpball) //removes the object
            rpball = Matter.Bodies.circle(ballx, bally, 20, {
                label: 'ball'
            });
            Matter.World.add(engine.world, rpball)
            Matter.World.remove(engine.world, rpwall3) //removes the object
            rptouchel = false;
            Matter.Body.setVelocity(rpball, { x: 45, y: 0 }) //Sets velocity of 20 going left and 10 going up

        }

        if ((pair.bodyA.label === 'ball' && pair.bodyB.label === 'wall5') || (pair.bodyB.label === 'ball' && pair.bodyA.label === 'wall5')) {
            Matter.World.remove(engine.world, pair.bodyB) //removes the object

        }
        if ((pair.bodyA.label === 'car' && pair.bodyB.label === 'bread') || (pair.bodyB.label === 'car' && pair.bodyA.label === 'bread')) { //checks collisions with either scenario

            let rope1 = Matter.Constraint.create({
                bodyB: rpcar,
                pointB: { x: 80, y: -15 }, //sets point on body you want to connect to, relative to the middle of the body
                bodyA: APbread,
                stiffness: .3,
                length: 20,
                render: { visible: false },
            });

            Matter.World.add(engine.world, rope1);
        }
        if ((pair.bodyA.label === 'plat' && pair.bodyB.label === 'ramp1') || (pair.bodyB.label === 'plat' && pair.bodyA.label === 'ramp1')) { //checks collisions with either scenario


            Matter.World.remove(engine.world, rpplat);
        }

        if ((pair.bodyA.label === 'plat' && pair.bodyB.label === 'ball') || (pair.bodyB.label === 'plat' && pair.bodyA.label === 'ball')) { //checks collisions with either scenario
            Matter.World.remove(engine.world, rpplat2) //removes the object
            //Matter.Body.setVelocity(elevatorfloor, {x: 0, y: -40})      //Sets velocity of 20 going left and 10 going up
            //Matter.Body.applyForce(elevatorfloor, {x: 0, y: -40});
            //Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 30, y: 0});

        }
        if (pair.bodyB.label === 'test') {
            document.getElementById("p1").innerHTML = Math.random() // any collision that is detected will update the HTML to a random value
        }
        if (pair.bodyA.label === "bucket" && pair.bodyB.label ==="portalCheese") {//checks if the ball hit the bottom of the bucket and then removes the ball
            // document.getElementById("Test2").innerHTML= "nut";
            Matter.World.remove(engine.world, pair.bodyB);
            let {
                min, max
            } = cheese.bounds;
            let cheeseWidth = max.x - min.x;
            let cheeseHeight = max.y - min.y;
            Matter.World.remove(engine.world, cheese);
            cheese = Matter.Bodies.rectangle(cheese.position.x, cheese.position.y, cheeseWidth, cheeseHeight, {isStatic: false, render: {fillStyle: '#fad13c'}, label: "cheese"});
            Matter.World.add(engine.world, cheese);
        }
        // alert(pair.bodyA.label + " , " + pair.bodyB.label);
        if (pair.bodyA.label === "vegetable" && pair.bodyB.label ==="cheese" && !cheeseSWcol) {
            cheeseSWcol = true;
            chSandConstraint = Matter.Constraint.create({
                bodyA: pair.bodyA,
                bodyB: pair.bodyB,
                render: {visible: false},
                length: 18,
                stiffness: 1,
            });
            Matter.World.add(engine.world, chSandConstraint);

            setTimeout(function() {
                phasenum = 6;
            },1500);
            // Matter.Body.setVelocity(tempBall, {x: 39, y: 0});

        }

        if ((pair.bodyA.label === "heatBall" || pair.bodyB.label === "heatBall")&&(pair.bodyA.label === "plate" || pair.bodyB.label === "plate" || pair.bodyA.label === "vegetable" || pair.bodyB.label === "vegetable" || pair.bodyA.label === "orangeJuice" || pair.bodyB.label === "orangeJuice" || pair.bodyA.label === "bread1" || pair.bodyB.label === "bread1" || pair.bodyA.label === "ground2" || pair.bodyB.label === "ground2")) {
            if (pair.bodyA.label === "heatBall") {
                Matter.World.remove(engine.world, pair.bodyA);
            } else {
                Matter.World.remove(engine.world, pair.bodyB);
            }
        }


        if ((pair.bodyA.label === "heatBall" || pair.bodyB.label === "heatBall")&&(pair.bodyA.label === "cheese" || pair.bodyB.label === "cheese")) {
            if (pair.bodyA.label === "heatBall") {
                Matter.World.remove(engine.world, pair.bodyA);
            } else {
                Matter.World.remove(engine.world, pair.bodyB);
            }
            if (heatyPeaty) {
                Matter.World.remove(engine.world, [cheese, chSandConstraint]);
                cheese = Matter.Bodies.rectangle(cheese.position.x, cheese.position.y, 150, 6, {
                    isStatic: false,
                    render: {fillStyle: '#f69f08'},
                    label: "cheese"
                });
                setTimeout(function() {
                    phasenum = 7;
                },1500);
                chSandConstraint = Matter.Constraint.create({
                    bodyA: APbread,
                    bodyB: cheese,
                    render: {visible: false},
                    stiffness: 1,
                    // length: 13,
                });
                Matter.World.add(engine.world, [cheese, chSandConstraint]);
                heatyPeaty = false;
            }
        }

        if ((pair.bodyA.label === "p3Ball" || pair.bodyB.label === "p3Ball")&&(pair.bodyA.label === "toaster" || pair.bodyB.label === "toaster")) {
            Matter.World.remove(engine.world, part3Ball);
            Matter.Body.setVelocity(breadTop, {x: -13, y: 0});
        }

        if (pair.bodyA.label === "Bread" && pair.bodyB.label ==="cheese") {
            let brCheeseConstr = Matter.Constraint.create({
                bodyA: cheese,
                bodyB: breadTop,
                render: {visible: false,},
                stiffness: 1,
                length: 21,
            });
            Matter.World.add(engine.world, brCheeseConstr)

            setTimeout(function() {
               Matter.Body.setVelocity(APplate, {x: 500, y:0});
            }, 5000);
        }

        if ((pair.bodyA.label === "p3Ball" || pair.bodyB.label === "p3Ball")&&(pair.bodyA.label === "trampoline3" || pair.bodyB.label === "trampoline3")) {
            Matter.Body.setVelocity(trampoline3.bodies[4], {x: 0, y: 25});
            Matter.Body.setVelocity(trampoline3.bodies[5], {x: 0, y: 25});
            Matter.Body.setVelocity(trampoline3.bodies[14], {x: 0, y: 25});
            Matter.Body.setVelocity(trampoline3.bodies[15], {x: 0, y: 25});
            Matter.Body.setVelocity(part3Ball, {x: 12, y: -25});
        }

        if (pair.bodyA.label === "p2Ball" && (pair.bodyB.label ==="trampoline1" || pair.bodyB.label==="trampoline2" || pair.bodyB.label==="heatGun")) {
            switch (pair.bodyB.label) {
                case "trampoline1":
                    Matter.Body.setVelocity(trampoline1.bodies[4], {x: 0, y: 25});
                    Matter.Body.setVelocity(trampoline1.bodies[5], {x: 0, y: 25});
                    Matter.Body.setVelocity(trampoline1.bodies[14], {x: 0, y: 25});
                    Matter.Body.setVelocity(trampoline1.bodies[15], {x: 0, y: 25});
                    Matter.Body.setVelocity(part2ball, {x: 3, y: -25});
                    break;
                case "trampoline2":
                    Matter.Body.setVelocity(trampoline2.bodies[4], {x: 0, y: 25});
                    Matter.Body.setVelocity(trampoline2.bodies[5], {x: 0, y: 25});
                    Matter.Body.setVelocity(trampoline2.bodies[14], {x: 0, y: 25});
                    Matter.Body.setVelocity(trampoline2.bodies[15], {x: 0, y: 25});
                    Matter.Body.setVelocity(part2ball, {x: 4.8, y: -25});
                    break;
                case "heatGun":
                    heatOn = true;
                    heatyPeaty = true
                    Matter.World.remove(engine.world, [heatGun,heatPendulum, pair.bodyA]);
                    heatGun = Matter.Body.create({
                        parts: [tip,head,shaft],
                        isStatic:false,
                    });
                    heatPendulum = Matter.Constraint.create({
                        pointA: {x: 1750+6000, y: 300},
                        bodyB: heatGun,
                        pointB: {x: 0, y: -10},
                        stiffness: 1,
                    });
                    Matter.World.add(engine.world, [heatGun,heatPendulum]);
                    break;
            }
        }

    });
});
let interval = setInterval(function (){
    let flameBall = Matter.Bodies.circle(tip.position.x, tip.position.y + 15, 5, {isStatic: false, render: {fillStyle: '#f01313'}});
    Matter.World.add(engine.world, flameBall);
}, 100);
clearInterval(interval);
let hGunspeed = false;
let flameBall = Matter.Bodies.circle(tip.position.x, tip.position.y + 15, 5, {isStatic: false, render: {fillStyle: '#f01313'}});
Matter.Events.on(engine, 'afterUpdate', function() {
    if (rptouchel) {
        Matter.Body.translate(rpelevatorfloor, { x: 0, y: -10 });
    }

    if (phasenum === 1 && APplate.position.x < 800) {
        Matter.Body.setVelocity(APplate, { x: 9, y: 0 });
    }
    if (phasenum === 2 && APplate.position.x < 2350) {
        Matter.Body.setVelocity(APplate, { x: 5, y: 0 });
    }
    if (phasenum === 3 && APplate.position.x < 3420 && APplate.position.y > rpelevatorfloor.position.y) {
        Matter.Body.setVelocity(APplate, { x: 3, y: 0 });
    }
    if (phasenum === 4 && APplate.position.x < 4200) {
        Matter.Body.setVelocity(APplate, { x: 20, y: -1 });
    }
    if (phasenum === 5 && APplate.position.x < 6240) {
        Matter.Body.setVelocity(APplate, {x: 5, y:0});
    }
    if (phasenum === 6 && APplate.position.x < 7240) {
        Matter.Body.setVelocity(APplate, {x: 7.5, y:0});
    }
    if (phasenum === 7 && APplate.position.x < 8400) {
        Matter.Body.setVelocity(APplate, {x: 7, y:0});
    }


    if (rpplat.position.x > 4200) {
        Matter.World.remove(engine.world, rpplat);
    }
    if (APplate.position.x > 4200) {
        Matter.Body.rotate(APplate, ((2 * Math.PI) - APplate.angle));
        Matter.Body.rotate(APbread, ((2 * Math.PI) - APbread.angle));
        Matter.Body.rotate(rpthings.bodies[0], ((2 * Math.PI) - rpthings.bodies[0].angle));
        Matter.Body.rotate(rpthings.bodies[1], ((2 * Math.PI) - rpthings.bodies[1].angle));
        Matter.Body.rotate(rpthings.bodies[2], ((2 * Math.PI) - rpthings.bodies[2].angle));
    }

    if (newJuice.position.y > APplate.position.y) {
        Matter.Body.setVelocity(newJuice, { x: 0, y: -100 });
    }
    if (APbread.position.y > APplate.position.y) {
        Matter.Body.setVelocity(APbread, { x: 0, y: -20 });
    }
    if (rpthings.bodies[0].position.y > APplate.position.y) {
        Matter.Body.setVelocity(rpthings.bodies[0], { x: 0, y: -20 });
    }
    if (rpthings.bodies[1].position.y > APplate.position.y) {
        Matter.Body.setVelocity(rpthings.bodies[1], { x: 0, y: -20 });
    }
    if (rpthings.bodies[2].position.y > APplate.position.y) {
        Matter.Body.setVelocity(rpthings.bodies[2], { x: 0, y: -20 });
    }

    Matter.Body.rotate(APplate, 2 * Math.PI);
    if (heatyPeaty&& heatGun.position.x>cheese.position.x) {

    }

    // if (phase1 && tempBall.position.x < 420) {
    //     Matter.Body.setVelocity(tempBall, {x: 5, y: 0});
    //
    // }
    // if (phase2 && tempBall.position.x < 1440) {
    //     Matter.Body.setVelocity(tempBall, {x: 10, y: 0});
    //
    // }
    // if (phase3 && tempBall.position.x < 2530) {
    //     Matter.Body.setVelocity(tempBall, {x: 8, y:0});
    // }

    if (heatGun.position.x>1850+6000) {
        clearInterval(interval);
        if (!hGunspeed) {
            Matter.Body.setVelocity(heatGun, {x: 10, y: -20});
            hGunspeed = true;
        }
    }

    if (heatOn) {
        interval = setInterval(function (){
            flameBall = Matter.Bodies.circle(tip.position.x, tip.position.y + 15, 5, {isStatic: false, label: "heatBall",render: {fillStyle: '#f01313'}});
            Matter.World.add(engine.world, flameBall);
        }, 100);
        heatOn = false;
    }

    Render.lookAt(render, {
        min: { x: APplate.position.x + 0, y: 0 },
        max: { x: APplate.position.x + 1200, y: 900 }

    });
});


Matter.World.add(engine.world, [rpball2, rpground, rppendString, rppend, rpleverBlock2, rpfulcrum2, rpplat3, rpground3, rptrampoline2, rpbutton, rpwall, rpwall2, rpwall3, rptoproof, rpramp1, rpramp2, rpelevatorfloor, rproof, rpplat2, rpball, mouseConstraint, rpfunnel1, rpfunnel2, rpwall4, rpwall5, rpplat, rpthings, rpbottomBound]); //adds the global objects all at once
Matter.World.add(engine.world, [trampoline3, part3Ball, finalLever, fulcrum5, heatPendulum, heatGun,trampoline2, trampoline1, part2ball, hgunLever,fulcrum4, chDomino, domino3, domino2,domino1, domRamp, compoundBody1, cheese, leverBlock1,leverBlock2,leverBlock3, mouseConstraint, fulcrum1, fulcrum2, fulcrum3]);//running code needed to display everything on your screen

Matter.Engine.run(engine); //code that runs engine
Matter.Render.run(render);
